'use client';

import { useRef } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { sectionContent } from '@/content/sections.config';

export interface ProblemProps {
  id: string;
}

export function Problem({ id }: ProblemProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const content = sectionContent.problem;

  return (
    <SectionWrapper ref={sectionRef} id={id} theme="light" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SplitText
          as="h2"
          className="mb-16 font-[family-name:var(--font-fairview)] text-[clamp(2rem,4vw,3rem)] tracking-[0.04em] text-forest-green"
          splitType="words"
        >
          {content.headline}
        </SplitText>

        <div className="flex flex-col gap-10">
          {content.statements.map((statement, i) => (
            <RevealOnScroll
              key={i}
              as="p"
              className="font-[family-name:var(--font-sen)] text-xl leading-relaxed text-forest-green md:text-2xl"
              delay={i * 0.1}
              y={30}
            >
              {statement}
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
