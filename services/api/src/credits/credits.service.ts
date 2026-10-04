import { Injectable } from "@nestjs/common";

@Injectable()
export class CreditsService {
  async getBalance(userId: string) {
    return {
      userId,
      balance: 100,
      currency: "CREDITS",
      tier: "STARTER",
    };
  }
}
