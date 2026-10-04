export const Role = {
  CLIENT: "CLIENT",
  DESK: "DESK",
  EDITOR: "EDITOR",
  QA: "QA",
  ADMIN: "ADMIN",
} as const;

export type Role = (typeof Role)[keyof typeof Role];
export const ROLES = [Role.CLIENT, Role.DESK, Role.EDITOR, Role.QA, Role.ADMIN] as const;

export interface UserSummary {
  id: string;
  email: string;
  name: string;
  role: Role;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RefreshDto {
  refreshToken?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthResponse {
  user: UserSummary;
  tokens: AuthTokens;
}

export interface HealthCheckResponse {
  status: "ok" | "degraded" | "down";
  timestamp: string;
  uptime: number;
  services: {
    database: boolean;
    redis?: boolean;
    storage?: boolean;
  };
}

export const apiPaths = {
  health: "/health",
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    me: "/auth/me",
    verifyEmail: "/auth/verify-email",
    resetPassword: "/auth/reset-password",
  },
  users: {
    me: "/users/me",
    updateMe: "/users/me",
  },
  media: {
    presign: "/media/presign-upload",
  },
  projects: {
    list: "/projects",
    create: "/projects",
    detail: (id: string) => `/projects/${id}`,
  },
  credits: {
    balance: "/credits/balance",
  },
} as const;
