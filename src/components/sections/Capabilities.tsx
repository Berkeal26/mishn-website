'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/animations/gsap-config';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { sectionContent } from '@/content/sections.config';

export interface CapabilitiesProps {
  id: string;
}

export function Capabilities({ id }: CapabilitiesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const content = sectionContent.capabilities;
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced) return;

      // Parallax: alternate items get subtle depth offset
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        const offset = i % 2 === 0 ? -15 : 15;
        gsap.to(item, {
          y: offset,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
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
          stagger={0.06}
        >
          {content.headline}
        </SplitText>

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
          {content.items.map((item, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
            >
              <RevealOnScroll delay={i * 0.12} y={30}>
                <p className="mb-3 font-[family-name:var(--font-sen)] text-sm tracking-widest text-forest-green">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-3 font-[family-name:var(--font-fairview)] text-xl tracking-[0.04em] text-forest-green">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-sen)] text-base leading-relaxed text-forest-green/80">
                  {item.description}
                </p>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
