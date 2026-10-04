# Architecture (Phase 0)

One NestJS process in `services/api`. Modules: Health, Auth, Users, Roles, Media, Projects, Credits.

The browser talks REST to port 4000. There is no gRPC and no Socket.io in this phase.

Postgres holds users, refresh tokens, and email-token rows. Redis, MinIO, and Mailpit are in Docker for later phases. Media signed URLs are a stub. Credits and projects controllers return empty stubs.

Roles: CLIENT, DESK, EDITOR, QA, ADMIN. Public signup creates CLIENT only.
