export class HealthDto {
  status!: "ok";
  service!: "api";
  db!: "up" | "down";
}
