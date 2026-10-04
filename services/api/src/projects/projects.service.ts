import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjectsService {
  async listUserProjects(userId: string) {
    return [];
  }

  async createProjectStub(userId: string, data: any) {
    return {
      id: `proj_stub_${Date.now()}`,
      userId,
      status: "DRAFT",
      createdAt: new Date().toISOString(),
      ...data,
    };
  }
}
