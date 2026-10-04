import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";

@Controller("projects")
@UseGuards(JwtAuthGuard)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async listProjects(@CurrentUser("id") userId: string) {
    return this.projectsService.listUserProjects(userId);
  }

  @Post()
  async createProject(@CurrentUser("id") userId: string, @Body() body: any) {
    return this.projectsService.createProjectStub(userId, body);
  }
}
