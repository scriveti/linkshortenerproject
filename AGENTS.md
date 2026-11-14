# Agent Instructions

This is a link shortener application. These instructions are for LLM coding agents and are mandatory.

## Critical Rule

**IT IS INCREDIBLY IMPORTANT THAT YOU ALWAYS READ THE RELEVANT INSTRUCTION FILE(S) IN THE `/docs` DIRECTORY BEFORE GENERATING ANY CODE.** This is the single most important rule in this document. No exceptions.

- Before writing, editing, or proposing any code, identify every `/docs` file relevant to the task and read each one in full.
- If a task touches multiple topics (e.g. auth and UI), read all of the corresponding files.
- Do not rely on memory, assumptions, or general framework knowledge in place of these files; the `/docs` files override defaults.
- If you have not read the relevant `/docs` file(s) in the current task, stop and read them first.

The modular documentation in `/docs`:

- [docs/authentication.md](docs/authentication.md) - Clerk-only auth, protected `/dashboard`, home redirect, modal sign-in/sign-up
- [docs/ui-components.md](docs/ui-components.md) - shadcn/ui only for all UI; no custom components

## Tech Stack

- Next.js 16 (App Router) with React 19 and TypeScript (strict)
- Clerk (`@clerk/nextjs`) for authentication
- Drizzle ORM (v1 RC) with Neon serverless Postgres (`drizzle-orm/neon-http`)
- Tailwind CSS v4 with shadcn/ui (`base-nova` style, built on `@base-ui/react`) and `lucide-react` icons

## Commands

- `npm run dev` - start the dev server
- `npm run build` - production build (must pass before work is considered complete)
- `npm run lint` - ESLint (must pass with no errors)
- `npx drizzle-kit generate` / `npx drizzle-kit migrate` - generate/apply migrations (see [docs/database.md](docs/database.md))

## Non-Negotiables (summary)

1. Never use `any`; never suppress type or lint errors without a justified one-line comment.
2. All protected data access is scoped to the authenticated Clerk user; never trust a user id from the client.
3. All database access goes through helper functions in `/data`, called from Server Components or Server Actions. No queries in components or route handlers directly.
4. Mutations use Server Actions with validated input; do not create API routes for things a Server Action can do.
5. Use existing shadcn/ui components and the `cn` utility; do not hand-roll components that shadcn provides.
6. Never commit or hardcode secrets; read them from environment variables.
