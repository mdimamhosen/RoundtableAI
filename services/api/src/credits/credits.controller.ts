import { Controller, Get, UseGuards } from "@nestjs/common";
import { CreditsService } from "./credits.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";

@Controller("credits")
@UseGuards(JwtAuthGuard)
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Get("balance")
  async getBalance(@CurrentUser("id") userId: string) {
    return this.creditsService.getBalance(userId);
  }
}
