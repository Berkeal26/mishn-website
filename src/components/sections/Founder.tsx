'use client';

import { useRef } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { sectionContent } from '@/content/sections.config';

export interface FounderProps {
  id: string;
}

export function Founder({ id }: FounderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const content = sectionContent.founder;

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
          {/* Image placeholder — replace with next/image when photo is available */}
          <RevealOnScroll className="w-full" y={30}>
            <div
              aria-hidden="true"
              className="mx-auto aspect-[4/5] w-full max-w-sm bg-camouflage lg:mx-0"
            />
          </RevealOnScroll>

          <div>
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
