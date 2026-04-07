# Project Overview

Single-page landing site for MISHN, a social impact marketing and AI visibility consultancy. Produces a scroll-native, animated landing page that converts visitors into consultation leads.
Built for Mike Tadesse (founder, sole editor). Visitors are potential clients: social impact orgs, nonprofits, mission-driven companies needing marketing intelligence.. Each feature does one thing. Code is easy to follow, run locally, and deploy.

See @project_specs.md for full requirements, workflows, and done criteria.

# Development Rules

**IMPORTANT: Follow this order for every task.**

1. Read CLAUDE.md + project_specs.md before any action. If either is missing, create it first.
2. For new features: update project_specs.md first → show it → wait for approval → then code.
3. Check existing files before creating new ones. Ask if unclear.
4. One change at a time. No scope creep. Only build what's in project_specs.md.

# Tech Stack

Next.js 14 App Router, TypeScript strict, Tailwind CSS 4, GSAP + ScrollTrigger, Lenis smooth scroll, Framer Motion (component-level only), Vercel deployment, no CMS

# Commands

```bash
npm install          # install deps
npm run dev          # dev server → localhost:3000
npm run build        # must pass before "done"
npm test             # run tests
```

# File Structure

```
/app            → pages (Next.js app router)
/app/api/       → API routes (thin — delegate to /lib/)
/components/    → one component per file, reusable UI
/lib/           → business logic, helpers, service clients
.env.local      → secrets (NEVER commit)
project_specs.md → source of truth for scope
```

No new top-level folders without asking.

# Code Style

- ES modules (import/export), not CommonJS
- Destructure imports: `import { foo } from 'bar'`
- Functions max 50 lines — split if longer
- Thin API routes → delegate to service functions in /lib/
- `console.log` at entry/exit of every API route during dev
- Fail loudly: throw errors, don't swallow them
- Simple > clever

# Response Format

Every response must include:
- **What I did** (plain English, one sentence)
- **What you need to do** (numbered steps if any)
- **Why** (one sentence)
- **Next step** (one action)
- **Errors** (plain explanation + exact fix, if applicable)

Walk through external tool setup explicitly (e.g. "Supabase dashboard → Settings → API").

# Verification — YOU MUST do this before saying "done"

1. `npm run build` — fix all errors
2. `npm run dev` — confirm runtime works
3. Test: happy path + error path + auth state
4. No regressions in existing features
5. If UI change: take a screenshot and compare to spec

# Secrets & Safety

- No keys in code. All secrets in .env.local — never commit it.
- Server-side client for sensitive DB ops. Never expose service_role in frontend.
- RLS always on for Supabase tables.
- Ask before deleting or renaming any file.

# Design

Dark-themed, premium feel. Subtle animation. Strong visual hierarchy.
No emoji as UI icons. No inline styles. No generic gradients.
