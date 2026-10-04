import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { MediaService } from "./media.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { IsNotEmpty, IsString } from "class-validator";

export class PresignUploadDto {
  @IsString()
  @IsNotEmpty()
  filename!: string;
}

@Controller("media")
@UseGuards(JwtAuthGuard)
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post("presign-upload")
  async presign(@Body() dto: PresignUploadDto) {
    return this.mediaService.getPresignedUploadUrl(dto.filename);
  }
}
