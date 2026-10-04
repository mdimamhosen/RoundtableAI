# API

NestJS modular monolith for Proof Desk. Phase 0 only.

## Local dev passwords

These accounts are created by `npm run db:seed` from the repo root. They are for this machine only.

| Email | Password | Role |
| --- | --- | --- |
| admin@proofdesk.local | admin-dev-pass | ADMIN |
| client@proofdesk.local | client-dev-pass | CLIENT |

Do not reuse these outside local Postgres.

## Modules

Health, Auth, Users, Roles, Media, Projects, Credits.

Public `POST /auth/register` always creates a CLIENT. EDITOR, DESK, QA, and ADMIN are not open signup.

`POST /auth/email/verify-request` and `POST /auth/password/reset-request` write a token row and return it in the JSON body. No mail is sent.

## Prisma

Schema: `services/api/prisma/schema.prisma`.

```bash
npm run db:migrate
npm run db:seed
```
