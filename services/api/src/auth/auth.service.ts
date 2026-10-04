import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Role, User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import * as crypto from "crypto";
import { PrismaService } from "../prisma/prisma.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  private readonly accessSecret: string;
  private readonly refreshSecret: string;
  private readonly accessTtlSeconds: number;
  private readonly refreshTtlSeconds: number;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.accessSecret = this.configService.get<string>(
      "JWT_ACCESS_SECRET",
      "dev-access-secret-change",
    );
    this.refreshSecret = this.configService.get<string>(
      "JWT_REFRESH_SECRET",
      "dev-refresh-secret-change",
    );
    this.accessTtlSeconds = Number(this.configService.get<number>("JWT_ACCESS_TTL", 900));
    this.refreshTtlSeconds = Number(this.configService.get<number>("JWT_REFRESH_TTL", 604800));
  }

  private hashToken(token: string): string {
    return crypto.createHash("sha256").update(token).digest("hex");
  }

  private sanitizeUser(user: User) {
    const { passwordHash: _, ...safeUser } = user;
    return safeUser;
  }

  private async generateTokens(user: Pick<User, "id" | "email" | "role">) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.accessSecret,
      expiresIn: this.accessTtlSeconds,
    });

    const rawRefreshToken = crypto.randomBytes(40).toString("hex");
    const refreshJwt = this.jwtService.sign(
      { sub: user.id, jti: rawRefreshToken },
      {
        secret: this.refreshSecret,
        expiresIn: this.refreshTtlSeconds,
      },
    );

    const tokenHash = this.hashToken(refreshJwt);
    const expiresAt = new Date(Date.now() + this.refreshTtlSeconds * 1000);

    await this.prisma.refreshToken.create({
      data: {
        tokenHash,
        userId: user.id,
        expiresAt,
      },
    });

    return {
      accessToken,
      refreshToken: refreshJwt,
      expiresIn: this.accessTtlSeconds,
    };
  }

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase().trim() },
    });

    if (existing) {
      throw new ConflictException("Email is already registered");
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    // Rule: Public signup creates CLIENT only
    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase().trim(),
        name: dto.name.trim(),
        passwordHash,
        role: Role.CLIENT,
        emailVerified: false,
      },
    });

    const tokens = await this.generateTokens(user);

    return {
      user: this.sanitizeUser(user),
      tokens,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase().trim() },
    });

    if (!user) {
      throw new UnauthorizedException("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException("Invalid email or password");
    }

    const tokens = await this.generateTokens(user);

    return {
      user: this.sanitizeUser(user),
      tokens,
    };
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException("Refresh token is required");
    }

    let payload: any;
    try {
      payload = this.jwtService.verify(refreshToken, {
        secret: this.refreshSecret,
      });
    } catch {
      throw new UnauthorizedException("Invalid or expired refresh token");
    }

    const tokenHash = this.hashToken(refreshToken);
    const storedToken = await this.prisma.refreshToken.findUnique({
      where: { tokenHash },
      include: { user: true },
    });

    if (!storedToken || storedToken.expiresAt < new Date()) {
      if (storedToken) {
        await this.prisma.refreshToken.delete({ where: { id: storedToken.id } });
      }
      throw new UnauthorizedException("Refresh token has expired or is revoked");
    }

    // Token rotation: delete used token
    await this.prisma.refreshToken.delete({ where: { id: storedToken.id } });

    // Generate new token pair
    const tokens = await this.generateTokens(storedToken.user);

    return {
      user: this.sanitizeUser(storedToken.user),
      tokens,
    };
  }

  async logout(userId: string, refreshToken?: string) {
    if (refreshToken) {
      const tokenHash = this.hashToken(refreshToken);
      await this.prisma.refreshToken.deleteMany({
        where: { tokenHash },
      });
    } else {
      await this.prisma.refreshToken.deleteMany({
        where: { userId },
      });
    }
    return { success: true };
  }

  async verifyEmail(token: string) {
    const tokenHash = this.hashToken(token);
    const storedToken = await this.prisma.emailVerificationToken.findUnique({
      where: { tokenHash },
    });

    if (!storedToken || storedToken.expiresAt < new Date() || storedToken.purpose !== "email_verification") {
      throw new BadRequestException("Invalid or expired verification token");
    }

    await this.prisma.user.update({
      where: { id: storedToken.userId },
      data: { emailVerified: true },
    });

    await this.prisma.emailVerificationToken.delete({
      where: { id: storedToken.id },
    });

    return { success: true, message: "Email verified successfully" };
  }

  async requestPasswordReset(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user) {
      // Avoid revealing whether account exists
      return { success: true, message: "If this email is registered, a reset link will be sent" };
    }

    const rawToken = crypto.randomBytes(32).toString("hex");
    const tokenHash = this.hashToken(rawToken);
    const expiresAt = new Date(Date.now() + 3600 * 1000); // 1 hour

    await this.prisma.emailVerificationToken.create({
      data: {
        tokenHash,
        purpose: "password_reset",
        userId: user.id,
        expiresAt,
      },
    });

    return {
      success: true,
      message: "If this email is registered, a reset link will be sent",
      // Include token in dev for testing stub
      devToken: process.env.NODE_ENV !== "production" ? rawToken : undefined,
    };
  }

  async resetPassword(token: string, newPassword: string) {
    const tokenHash = this.hashToken(token);
    const storedToken = await this.prisma.emailVerificationToken.findUnique({
      where: { tokenHash },
    });

    if (!storedToken || storedToken.expiresAt < new Date() || storedToken.purpose !== "password_reset") {
      throw new BadRequestException("Invalid or expired reset token");
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await this.prisma.user.update({
      where: { id: storedToken.userId },
      data: { passwordHash },
    });

    await this.prisma.emailVerificationToken.delete({
      where: { id: storedToken.id },
    });

    // Revoke existing sessions
    await this.prisma.refreshToken.deleteMany({
      where: { userId: storedToken.userId },
    });

    return { success: true, message: "Password has been successfully updated" };
  }
}
