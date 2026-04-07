# CLAUDE.md — MISHN Website

## Project
Single-page landing site for MISHN, a social impact marketing + AI visibility consultancy.
Stack: Next.js 14+ (App Router), Tailwind CSS 4, GSAP + ScrollTrigger, Lenis, Framer Motion (component-level only).

## Architecture Principles
- Section-based: each landing page section is one component in `src/components/sections/`
- Content lives in `src/content/*.config.ts` — never hardcode copy in components
- Animations register in `useGSAP()` hooks inside each section component
- No global animation orchestrator — each section owns its scroll triggers
- All components are server components by default. Add `'use client'` only when needed (animation, interactivity)

## Brand System — Non-Negotiable

### Colors (use Tailwind theme tokens, not raw hex in code)
- `forest-green`: #2F5233 (primary — dominant brand color)
- `olive-green`: #7B8550
- `gray-blue`: #A4B9C9
- `warm-beige`: #EDE6DB
- `camoflage`: #9C8E71
- `tan`: #CAB894
- `bone-white`: #EDE6DB
- Always use `forest-green` text on white backgrounds (AAA contrast 8.8)
- Always use white or `bone-white` text on `forest-green` backgrounds (AAA contrast 8.8)
- NEVER use low-contrast combinations: olive-on-tan, white-on-beige, olive-on-forest-green

### Typography
- Headlines: Fairview Small Caps (loaded locally from /public/fonts)
  - CRITICAL: Always use lowercase input text. Fairview Small Caps renders lowercase as small caps automatically. Never use CSS text-transform: uppercase or type in ALL CAPS — this creates oversized characters.
  - Kerning: 40 tracking in CSS (letter-spacing: 0.04em)
  - Sizes: Hero 80pt equiv (clamp(3rem, 6vw, 5rem)), Section headers 40pt equiv (clamp(2rem, 4vw, 3rem))
- Body: Sen Regular, 18px (1.125rem), line-height 1.6
- Captions: Sen Regular, 14px (0.875rem)
- Use next/font with local files — no Google Fonts CDN

### Logo
- SVG source files in /public/images/logo/
- Minimum clear space: earth icon size around the logo
- Three variants: default (green on white), inverted (white on green), brand mark only (magnifying glass + earth)

## Coding Standards
- TypeScript strict mode. No `any` types.
- Functional components only. No class components.
- Props interfaces defined and exported for every component.
- File naming: PascalCase for components, camelCase for utilities/hooks.
- Use `cn()` utility (clsx + twMerge) for conditional classes.
- Tailwind classes ordered: layout → sizing → spacing → typography → colors → effects → responsive.
- No inline styles except for dynamic GSAP-controlled values.
- Extract magic numbers into constants in `lib/utils/constants.ts`.

## Animation Conventions
- GSAP for all scroll-linked animations. Register plugins in `lib/animations/gsap-config.ts`.
- Framer Motion ONLY for: hover states, page transitions, component enter/exit.
- Never mix GSAP and Framer Motion on the same element.
- Default easing: `power2.out` for entrances, `power3.inOut` for transitions.
- Max animation duration: 800ms for reveals, 400ms for micro-interactions.
- Always check `useReducedMotion()` — if true, skip all motion, show content immediately.
- Clean up ScrollTrigger instances in useGSAP cleanup/return.
- Use `scrub: true` for parallax. Use `toggleActions: "play none none none"` for one-shot reveals.

## Accessibility Rules
- WCAG 2.1 AA minimum, target AAA where possible.
- All images need descriptive alt text (not "image of...").
- Focus-visible outlines on all interactive elements (3px solid forest-green).
- Semantic HTML: section, article, nav, main, header, footer — not div soup.
- Skip-to-content link as first focusable element.
- aria-labels on icon-only buttons.
- Color is never the only means of conveying information.
- Test with keyboard navigation. Every interactive element must be reachable via Tab.
- Form inputs must have associated labels.

## Performance Rules
- Images: WebP format, responsive srcset, lazy loading below the fold.
- Fonts: preload Fairview and Sen in layout.tsx head.
- GSAP: import only needed plugins (gsap, ScrollTrigger, SplitText). No full bundle.
- No layout shifts: set explicit width/height on images and media.
- No client-side data fetching on the landing page. All content is static/built-time.
- Target: Lighthouse > 90 on all metrics.

## Responsive Design
- Mobile-first. Tailwind breakpoints: sm (640), md (768), lg (1024), xl (1280).
- On mobile (< 768px):
  - No parallax effects
  - Typography animations simplify to fade-in only
  - Split layouts stack vertically
  - Hamburger menu replaces horizontal nav
- Test at: 375px (iPhone SE), 768px (iPad), 1024px (laptop), 1440px (desktop), 1920px (wide).

## Section Component Pattern
Every section component should follow this structure:
```tsx
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { sectionContent } from '@/content/sections.config';

interface SectionNameProps {
  id: string;
}

export function SectionName({ id }: SectionNameProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const content = sectionContent[id];

  useGSAP(() => {
    // ScrollTrigger setup here
    // Always scope to sectionRef
  }, { scope: sectionRef });

  return (
    <SectionWrapper ref={sectionRef} id={id} theme="light|dark">
      {/* Section content */}
    </SectionWrapper>
  );
}
```

## What To Avoid
- No gradient backgrounds (not in the brand system)
- No rounded cards with shadows (generic SaaS aesthetic)
- No icon libraries (Lucide, Heroicons) — use brand icons from /public/images or simple custom SVGs
- No carousels or auto-playing sliders
- No "Lorem ipsum" anywhere — use real or realistic copy from sections.config.ts
- No animations that block content visibility for more than 500ms
- No horizontal scrolling sections (brittle on mobile)
- No parallax on mobile or when prefers-reduced-motion is set
- No popup modals, chatbots, or cookie banners in v1
