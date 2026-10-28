# Whole-Repository Laptop Handoff Design

## Goal

Prepare the existing `Kingsley-A1/js-ts-nestjs-mastery` repository so the whole learning codebase can be pushed to its configured GitHub remote and cloned onto another laptop with clear setup instructions.

## Scope and structure

- Keep the existing monorepo layout and Git history. Do not split repositories, rename projects, or relocate learning archives.
- Retain the root NestJS application and its npm lockfile, the archived JavaScript and TypeScript practice folders, and the nested React/Next.js project with its pnpm lockfile.
- Replace the root README's conflicted NestJS starter content with a concise repository map and laptop setup instructions.
- Replace the nested frontend's generated starter README with project-specific install and run instructions.
- Keep environment files, dependencies, and generated build output out of Git; document how to provide local configuration without publishing secrets.
- Preserve the current uncommitted frontend edits. Repair only the incomplete API-lab additions as needed for the frontend project to build.

## Handoff workflow

On the current laptop, review the complete diff, run relevant backend and frontend checks, stage the intended files, commit, and push the current branch to the existing `origin`. On the new laptop, install Git, Node.js, and the required package manager; clone the repository; install the root app with `npm ci`; install the nested frontend using its documented pnpm workflow; and start PostgreSQL with the repository's Docker Compose configuration when needed.

## Acceptance criteria

1. The root README has no merge-conflict markers and explains where the projects live and how to set them up.
2. The frontend README accurately documents its own setup without replacing the root repository guide.
3. Root npm and nested frontend pnpm workflows remain separate, and committed lockfiles remain authoritative.
4. No local secrets, dependency folders, or generated build output are added to the commit.
5. The included frontend changes compile/build successfully, and the NestJS build and tests are checked.
6. Only intended changes are committed and pushed to the existing remote; the user receives concise commands for cloning and setting up the repository on another laptop.
