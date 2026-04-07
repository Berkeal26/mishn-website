'use client';

import { useRef } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { sectionContent } from '@/content/sections.config';

export interface CTAProps {
  id: string;
}

export function CTA({ id }: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const content = sectionContent.cta;

  return (
    <SectionWrapper
      ref={sectionRef}
      id={id}
      theme="dark"
      className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <SplitText
          as="h2"
          className="mb-8 font-[family-name:var(--font-fairview)] text-[clamp(2rem,4vw,3rem)] tracking-[0.04em] text-bone-white"
          splitType="words"
        >
          {content.headline}
        </SplitText>

        <RevealOnScroll
          as="p"
          className="mb-12 font-[family-name:var(--font-sen)] text-lg leading-relaxed text-bone-white/80"
          y={20}
        >
          {content.body}
        </RevealOnScroll>

        <RevealOnScroll
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          y={20}
          delay={0.1}
        >
          <a
            href={content.ctaHref}
            className="inline-block bg-bone-white px-8 py-3 font-[family-name:var(--font-sen)] text-sm tracking-wide text-forest-green transition-opacity duration-200 hover:opacity-90"
          >
            {content.ctaLabel}
          </a>
          <a
            href={`mailto:${content.email}`}
            className="font-[family-name:var(--font-sen)] text-sm tracking-wide text-bone-white/70 underline underline-offset-4 transition-colors duration-200 hover:text-bone-white"
          >
            {content.email}
          </a>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}
