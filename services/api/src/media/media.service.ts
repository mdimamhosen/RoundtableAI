import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as Minio from "minio";

@Injectable()
export class MediaService {
  private readonly logger = new Logger(MediaService.name);
  private minioClient: Minio.Client | null = null;
  private readonly bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this.bucketName = this.configService.get<string>("MINIO_BUCKET", "retouch");
    const endPoint = this.configService.get<string>("MINIO_ENDPOINT", "localhost");
    const port = Number(this.configService.get<number>("MINIO_PORT", 9000));
    const useSSL = this.configService.get<string>("MINIO_USE_SSL", "false") === "true";
    const accessKey = this.configService.get<string>("MINIO_ACCESS_KEY", "minio");
    const secretKey = this.configService.get<string>("MINIO_SECRET_KEY", "minio-dev-pass");

    try {
      this.minioClient = new Minio.Client({
        endPoint,
        port,
        useSSL,
        accessKey,
        secretKey,
      });
      this.logger.log(`Initialized MinIO client target: ${endPoint}:${port}, bucket: ${this.bucketName}`);
    } catch (err: any) {
      this.logger.warn(`MinIO client failed initialization: ${err?.message}`);
    }
  }

  async getPresignedUploadUrl(filename: string, expirySeconds = 3600): Promise<{ uploadUrl: string; objectKey: string }> {
    const objectKey = `uploads/${Date.now()}-${filename.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    if (!this.minioClient) {
      return {
        uploadUrl: `http://localhost:9000/${this.bucketName}/${objectKey}?stub=mock-presigned`,
        objectKey,
      };
    }

    try {
      const uploadUrl = await this.minioClient.presignedPutObject(this.bucketName, objectKey, expirySeconds);
      return { uploadUrl, objectKey };
    } catch (err: any) {
      this.logger.warn(`Presigned URL generation fallback: ${err?.message}`);
      return {
        uploadUrl: `http://localhost:9000/${this.bucketName}/${objectKey}?stub=fallback`,
        objectKey,
      };
    }
  }
}
