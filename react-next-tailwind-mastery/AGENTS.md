# AGENTS.md

Personal learning project ("react-next-tailwind-mastery") for mastering React, Next.js (App Router), and Tailwind CSS. Contains lesson exercises under `src/`.

## Stack & Commands

- **Package manager:** pnpm (do not use npm/yarn).
- **Framework:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript (strict).
- **Styling:** Tailwind CSS v4 — CSS-first config, **no `tailwind.config.js`**.

| Command      | Purpose                             |
| ------------ | ----------------------------------- |
| `pnpm dev`   | Dev server at http://localhost:3000 |
| `pnpm build` | Production build                    |
| `pnpm start` | Run the production build            |
| `pnpm lint`  | Run ESLint                          |

## Conventions

- **Path alias:** `@/*` → `./src/*` (e.g. `import ProductGrid from "@/components/ProductGrid"`).
- **Client components:** add `"use client";` at the top when a component uses hooks, state, or event handlers.
- **Props typing:** declare `type XProps = { ... }` above the component and type the destructured props.
- **Component style:** default-exported function components; event handlers named `handleX`; state via `useState`.
- **Data is separate from UI:** product data lives in `src/data/products.tsx`.
- **Tailwind v4 theming:** theme tokens are defined in `src/app/globals.css` via `@theme inline` and CSS variables.
- **Shared button:** `src/colours/button.tsx` exports a `Button` with `primary`/`secondary` variants.

## Structure & Pitfalls

- `src/` contains lesson-exercise folders (`colours/`, `Flexbox/`, `grid/`, `components/`, `data/`) with **duplicate `ProductCard.tsx` files**. The live app imports `@/components/ProductCard` (via `ProductGrid`), so edit `src/components/ProductCard.tsx` for the running page.
- Some files are work-in-progress: `src/components/productCardAssigment.tsx` has an unfinished `TODO`; `src/grid/ProductCard.tsx` is empty.
- Study notes live in `src/Lesson Summary/` (e.g. `ReactRecap.md`, `Day 16 Note.md`). Reference them for concept questions; don't edit them unless asked.
