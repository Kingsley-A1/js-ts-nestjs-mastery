# NestJS Mastery

A learning monorepo for building TypeScript, NestJS, and full-stack skills. The projects are intentionally kept together, but each runnable app keeps its own dependencies and lockfile.

## Repository map

- `src/` — NestJS API, including the `products` and `users` modules.
- `test/` — NestJS end-to-end tests.
- `JS-practice/` — JavaScript fundamentals and exercises.
- `ts-practice/` — TypeScript fundamentals and exercises.
- `react-next-tailwind-mastery/` — separate Next.js and React learning project. It uses pnpm; it is not part of the root npm project.
- `Learning Plan.md`, `LEARNING HACK.MD`, and `GIT-HANDBOOK.md` — learning and Git reference material.

## Requirements

- Git
- Node.js 24 LTS
- Docker Desktop with Docker Compose, if running the NestJS API with PostgreSQL
- Corepack for the nested frontend's pnpm setup

## Set up the NestJS API

Run these commands from the repository root in PowerShell:

```powershell
npm ci
Copy-Item .env.example .env
docker compose up -d
npm run start:dev
```

The API starts using the root npm project. The Docker Compose service exposes PostgreSQL on `localhost:5433`. The `.env.example` values and Docker Compose credentials are local learning defaults only; never use them for a production deployment.

Useful root commands:

```powershell
npm run build
npm test
npm run test:e2e
npm run start:prod
docker compose down
```

Build before running `npm run start:prod`. Use `docker compose down` to stop the database container; its named volume remains available for the next run.

## Set up the React/Next.js project

Open a second terminal and switch to the nested project:

```powershell
Set-Location react-next-tailwind-mastery
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000). Other frontend commands, run from that folder:

```powershell
corepack pnpm lint
corepack pnpm build
```

Use the nested `pnpm-lock.yaml` for the frontend; do not install its dependencies from the repository root.

## Use this repository on another laptop

Clone the branch currently used for the combined learning projects:

```powershell
git clone --branch learning/react-next-tailwind https://github.com/Kingsley-A1/js-ts-nestjs-mastery.git
Set-Location js-ts-nestjs-mastery
```

Then follow the NestJS and/or frontend setup above. `.env` is intentionally ignored by Git; copy `.env.example` to `.env` on each machine that needs the NestJS database configuration. Never commit your real `.env` file.
