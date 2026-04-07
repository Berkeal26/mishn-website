'use client';

import { useRef } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { sectionContent } from '@/content/sections.config';

export interface PositioningProps {
  id: string;
}

export function Positioning({ id }: PositioningProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const content = sectionContent.positioning;

  return (
    <SectionWrapper ref={sectionRef} id={id} theme="dark" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SplitText
          as="h2"
          className="mb-8 font-[family-name:var(--font-fairview)] text-[clamp(2rem,4vw,3rem)] tracking-[0.04em] text-bone-white"
          splitType="words"
        >
          {content.headline}
        </SplitText>

        <RevealOnScroll
          as="p"
          className="mb-16 max-w-2xl font-[family-name:var(--font-sen)] text-lg leading-relaxed text-bone-white/80"
          y={20}
        >
          {content.body}
        </RevealOnScroll>

        <div className="border-t border-bone-white/20 pt-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {content.pillars.map((pillar, i) => (
              <RevealOnScroll key={i} delay={i * 0.1} y={30}>
                <h3 className="mb-4 font-[family-name:var(--font-fairview)] text-xl tracking-[0.04em] text-bone-white">
                  {pillar.title}
                </h3>
                <p className="font-[family-name:var(--font-sen)] text-base leading-relaxed text-bone-white/80">
                  {pillar.description}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
