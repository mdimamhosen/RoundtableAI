# Proof Desk

Phase 0 of a photo retouching desk: a NestJS API and a Next.js site. Clients get an AI first pass, then a human editor. This phase is auth, roles, and the public site. Stripe, credits, and the editor queue are not built.

The folder is still named Roundtable. The product on the site is Proof Desk.

## Run the site (Vercel)

Set the Vercel root directory to `apps/web`. Framework: Next.js. `apps/web` does not import workspace packages.

`NEXT_PUBLIC_API_URL` should point at the Nest API. Local default is `http://localhost:4000`.

## Run the API

```bash
npm install
cp .env.example .env
cp .env.example services/api/.env
docker compose up -d postgres redis minio mailpit
npm run db:migrate
npm run db:seed

# Run all services concurrently (Web on :3000 + API on :4000)
npm run dev

# Or start Docker dependencies + all services in one command:
npm run dev:all
```

Seed logins are local dev only. See `services/api/README.md`.

## Layout

- `apps/web` — public pages, auth, empty `/app` shell
- `services/api` — one NestJS modular monolith
- `packages/shared` — role names for the API side. The web app copies the same union in `apps/web/lib/types.ts` so Vercel can build `apps/web` alone.
# RoundtableAI
