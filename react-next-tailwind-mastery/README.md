# React / Next.js Learning Project

This is the frontend learning project in the `js-ts-nestjs-mastery` monorepo. It is an independent Next.js app with its own `package.json` and `pnpm-lock.yaml`; install and run it from this directory.

## Requirements

- Node.js 24 LTS
- Corepack enabled so the pnpm command is available

## Install and run

From `react-next-tailwind-mastery`:

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

Run these commands from this directory:

```powershell
corepack pnpm lint
corepack pnpm build
```

Do not install this project's dependencies from the repository root or replace its pnpm lockfile with the root npm lockfile.
