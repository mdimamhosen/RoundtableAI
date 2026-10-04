export class SignedUrlDto {
  method!: "PUT";
  bucket!: string;
  key!: string;
  url!: string;
  expiresInSeconds!: number;
  stub!: true;
}
