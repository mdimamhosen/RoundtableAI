import { Injectable } from "@nestjs/common";
import { Role } from "@prisma/client";

@Injectable()
export class RolesService {
  list() {
    return {
      roles: [Role.CLIENT, Role.DESK, Role.EDITOR, Role.QA, Role.ADMIN],
      publicSignup: [Role.CLIENT],
      note: "EDITOR, DESK, QA, and ADMIN are not created by public signup.",
    };
  }
}
