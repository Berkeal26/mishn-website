'use client';

import { useRef } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { sectionContent } from '@/content/sections.config';

export interface SocialProofProps {
  id: string;
}

export function SocialProof({ id }: SocialProofProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const content = sectionContent.socialProof;

  return (
    <SectionWrapper ref={sectionRef} id={id} theme="dark" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SplitText
          as="h2"
          className="mb-16 font-[family-name:var(--font-fairview)] text-[clamp(2rem,4vw,3rem)] tracking-[0.04em] text-bone-white"
          splitType="words"
        >
          {content.headline}
        </SplitText>

        <div className="flex flex-col">
          {content.testimonials.map((testimonial, i) => (
            <RevealOnScroll
              key={i}
              className="border-t border-bone-white/20 py-12 first:border-t-0"
              delay={i * 0.1}
              y={20}
            >
              <p
                aria-hidden="true"
                className="mb-4 font-[family-name:var(--font-fairview)] text-6xl leading-none text-bone-white/20"
              >
                &ldquo;
              </p>
              <blockquote className="mb-6 font-[family-name:var(--font-sen)] text-xl italic leading-relaxed text-bone-white/90">
                {testimonial.quote}
              </blockquote>
              <footer className="font-[family-name:var(--font-sen)] text-sm text-bone-white/80">
                <cite className="not-italic">
                  {testimonial.author} &mdash; {testimonial.org}
                </cite>
              </footer>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
