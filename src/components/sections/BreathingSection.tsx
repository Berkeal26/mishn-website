'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/animations/gsap-config';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { sectionContent } from '@/content/sections.config';

export interface BreathingSectionProps {
  id: string;
}

/**
 * A pause moment — full viewport, single statement, generous scroll zone.
 * The text slowly fades in as the user enters, holds, then fades out.
 * Designed to let the page breathe and create intentional pacing.
 */
export function BreathingSection({ id }: BreathingSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const prefersReduced = useReducedMotion();
  const content = sectionContent.breathing as { statement: string } | undefined;

  useGSAP(
    () => {
      if (prefersReduced || !textRef.current || !sectionRef.current) return;

      const text = textRef.current;

      gsap.set(text, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => {
          gsap.to(text, {
            autoAlpha: 1,
            duration: 1.2,
            ease: 'power2.out',
          });
        },
        onLeave: () => {
          gsap.to(text, {
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power2.in',
          });
        },
        onEnterBack: () => {
          gsap.to(text, {
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(text, {
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power2.in',
          });
        },
      });
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  return (
    <SectionWrapper
      ref={sectionRef}
      id={id}
      theme="dark"
      className="flex min-h-[150vh] items-center justify-center px-6 md:px-12 lg:px-24"
    >
      <p
        ref={textRef}
        className="mx-auto max-w-4xl text-center font-[family-name:var(--font-fairview)] text-[clamp(2rem,5vw,4rem)] leading-tight tracking-[0.04em] text-bone-white"
      >
        {content?.statement ?? "visibility is not a luxury. it is infrastructure."}
      </p>
    </SectionWrapper>
  );
}
