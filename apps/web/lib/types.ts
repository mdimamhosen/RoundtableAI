export const ROLES = ["CLIENT", "DESK", "EDITOR", "QA", "ADMIN"] as const;
export type Role = (typeof ROLES)[number];

export type PublicUser = {
  id: string;
  email: string;
  name: string;
  role: Role;
  emailVerified: boolean;
};

export type AuthResult = {
  accessToken: string;
  refreshToken: string;
  tokenType: "Bearer";
  user: PublicUser;
};
