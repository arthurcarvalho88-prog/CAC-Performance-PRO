# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### CAC Performance PRO (artifacts/cac-performance-pro)
- **Type**: React + Vite (presentation-first landing page)
- **Preview path**: `/`
- **Port**: 25219
- **Description**: Landing page profissional para o app CAC Performance PRO — sistema de gestão de acervo de armas, habitualidades e documentos para atiradores esportivos brasileiros CAC.
- **Color palette**: Navy dark #0C1A33 (matches logo bg), Orange #F97316, Silver/white text
- **Tech**: React, Tailwind CSS, Framer Motion, Rajdhani/Inter fonts
- **Key file**: `artifacts/cac-performance-pro/src/pages/LandingPage.tsx`
- **Brand assets**: Imported from `attached_assets/` via `@assets` alias

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
