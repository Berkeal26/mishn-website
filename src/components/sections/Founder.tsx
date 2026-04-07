'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap-config';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { sectionContent } from '@/content/sections.config';
import { BREAKPOINTS } from '@/lib/utils/constants';

export interface FounderProps {
  id: string;
}

export function Founder({ id }: FounderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const content = sectionContent.founder;

  useGSAP(
    () => {
      if (prefersReduced || !imageRef.current || !textRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(
        `(min-width: ${BREAKPOINTS.LG}px)`,
        () => {
          // Image scrolls at 0.85x speed (slower = behind)
          gsap.to(imageRef.current, {
            y: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });

          // Text at normal 1x speed (feels like it overtakes)
          gsap.to(textRef.current, {
            y: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }
      );
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  return (
    <SectionWrapper ref={sectionRef} id={id} theme="light" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SplitText
          as="h2"
          className="mb-16 font-[family-name:var(--font-fairview)] text-[clamp(2rem,4vw,3rem)] tracking-[0.04em] text-forest-green"
          splitType="words"
        >
          {content.headline}
        </SplitText>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image placeholder with parallax */}
          <RevealOnScroll className="w-full" y={30}>
            <div ref={imageRef}>
              <div
                aria-hidden="true"
                className="mx-auto aspect-[4/5] w-full max-w-sm bg-camouflage lg:mx-0"
              />
            </div>
          </RevealOnScroll>

          <div ref={textRef}>
            <RevealOnScroll y={20}>
              <h3 className="mb-6 font-[family-name:var(--font-fairview)] text-2xl tracking-[0.04em] text-forest-green">
                {content.name}
              </h3>
            </RevealOnScroll>
            <RevealOnScroll
              as="p"
              className="font-[family-name:var(--font-sen)] text-lg leading-relaxed text-forest-green/80"
              y={20}
              delay={0.1}
            >
              {content.bio}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
