# Project Specs

## What It Does

Single-page landing site for MISHN, a social impact marketing and AI visibility consultancy. Produces a scroll-native, animated landing page that converts visitors into consultation leads.

## Who Uses It

Mike Tadesse (founder, sole editor). Visitors are potential clients: social impact orgs, nonprofits, mission-driven companies needing marketing intelligence.

## Tech Stack

Next.js 14 App Router, TypeScript strict, Tailwind CSS 4, GSAP + ScrollTrigger, Lenis smooth scroll, Framer Motion (component-level only), Vercel deployment, no CMS

## Workflows

<!-- Each workflow needs: trigger → steps → output.
     This is the implementation contract — Claude builds from this.
     Fill in the TODOs before your first Claude Code session. -->

### 1. hero-section
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]

### 2. problem-section
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]

### 3. positioning-section
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]

### 4. capability-sections
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]

### 5. social-proof
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]

### 6. founder-section
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]

### 7. cta-section
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]

### 8. scroll-animation-system
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]

### 9. responsive-qa
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]

### 10. accessibility-audit
- **Trigger:** [TODO: what starts this]
- **Steps:**
  1. [TODO]
  2. [TODO]
- **Output:** [TODO: what is produced]


## Data

<!-- What is stored, where, and key fields. Be specific enough for Claude
     to create schemas or API calls from this section. -->

No database. Contact form submissions via Vercel Functions forwarded to email. Vercel Analytics for page views. No user accounts, no persistence.

## Constraints

No gradient backgrounds. No icon libraries (Lucide, Heroicons). No shadcn/ui. No CMS in v1. No horizontal scroll sections. GSAP and Framer Motion must never animate the same element. Always use lowercase text input with Fairview Small Caps font — never CSS text-transform uppercase. Forest green #2F5233 is the primary color — no blue, purple, or gray as primary.

## What "Done" Looks Like

<!-- Specific, testable criteria. If you can't verify it, it's not done. -->

Lighthouse score above 90 on all metrics. All 10 sections render correctly at 375px and 1440px. Scroll animations play without jank. Zero axe-core critical violations. Contact form submits successfully. Fonts load from local files.
