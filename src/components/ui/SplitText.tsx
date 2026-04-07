'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/animations/gsap-config';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { ANIMATION, BREAKPOINTS } from '@/lib/utils/constants';
import { cn } from '@/lib/utils/cn';

gsap.registerPlugin(GSAPSplitText);

export interface SplitTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  splitType?: 'chars' | 'words' | 'lines';
  stagger?: number;
  duration?: number;
  delay?: number;
  scrollTrigger?: boolean;
  onComplete?: () => void;
}

export function SplitText({
  children,
  className,
  as: Tag = 'h1',
  splitType = 'chars',
  stagger = 0.03,
  duration = ANIMATION.REVEAL_DURATION,
  delay = 0,
  scrollTrigger = true,
  onComplete,
}: SplitTextProps) {
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
          // Mobile: fade only (y=0). Desktop: stagger with translate.
          const yOffset = isMobile ? ANIMATION.MOBILE_Y : 20;

          const split = new GSAPSplitText(el, { type: splitType });
          const targets = split[splitType] as Element[];

          gsap.set(targets, { opacity: 0, y: yOffset });

          const tweenConfig: gsap.TweenVars = {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            delay,
            ease: ANIMATION.ENTRANCE_EASE,
            onComplete,
            clearProps: 'will-change',
          };

          if (scrollTrigger) {
            ScrollTrigger.create({
              trigger: el,
              start: ANIMATION.REVEAL_START,
              once: true,
              onEnter: () => {
                gsap.to(targets, tweenConfig);
              },
            });
          } else {
            gsap.to(targets, tweenConfig);
          }

          return () => {
            split.revert();
          };
        }
      );
    },
    { scope: ref, dependencies: [prefersReduced] }
  );

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>}
      className={cn(!prefersReduced && 'will-change-transform', className)}
    >
      {children}
    </Tag>
  );
}
