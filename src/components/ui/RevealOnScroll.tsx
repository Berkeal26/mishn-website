'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/animations/gsap-config';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { ANIMATION, BREAKPOINTS } from '@/lib/utils/constants';
import { cn } from '@/lib/utils/cn';

export interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: 'div' | 'p' | 'h2' | 'h3' | 'span';
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  y = 40,
  duration = ANIMATION.REVEAL_DURATION,
  as: Tag = 'div',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced || !ref.current) return;

      const el = ref.current;
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: `(max-width: ${BREAKPOINTS.MD - 1}px)`,
          isDesktop: `(min-width: ${BREAKPOINTS.MD}px)`,
        },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };
          // Mobile: fade only (y=0). Desktop: fade + translate.
          const yOffset = isMobile ? ANIMATION.MOBILE_Y : y;

          gsap.set(el, { autoAlpha: 0, y: yOffset });

          ScrollTrigger.create({
            trigger: el,
            start: ANIMATION.REVEAL_START,
            once: true,
            onEnter: () => {
              gsap.to(el, {
                autoAlpha: 1,
                y: 0,
                duration,
                delay,
                ease: ANIMATION.ENTRANCE_EASE,
                clearProps: 'will-change',
              });
            },
          });
        }
      );
    },
    { scope: ref, dependencies: [prefersReduced] }
  );

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLDivElement & HTMLParagraphElement & HTMLHeadingElement & HTMLSpanElement>}
      className={cn(!prefersReduced && 'will-change-transform', className)}
    >
      {children}
    </Tag>
  );
}
