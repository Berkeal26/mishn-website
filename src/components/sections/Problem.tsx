'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap-config';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { sectionContent } from '@/content/sections.config';

export interface ProblemProps {
  id: string;
}

export function Problem({ id }: ProblemProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const content = sectionContent.problem;

  // Scroll-direction-aware marquee
  useGSAP(
    () => {
      if (prefersReduced || !marqueeRef.current) return;

      const el = marqueeRef.current;
      const totalWidth = el.scrollWidth / 2; // half because duplicated
      const tl = gsap.timeline({ repeat: -1, paused: true });

      tl.fromTo(
        el,
        { x: 0 },
        {
          x: -totalWidth,
          duration: 30,
          ease: 'none',
        }
      );

      let scrollDir = 1; // 1 = forward, -1 = reverse

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          // Direction
          const newDir = self.direction;
          if (newDir !== scrollDir) {
            scrollDir = newDir;
            tl.timeScale(scrollDir); // reverse when scrolling up
          }
          // Drive progress based on scroll
          if (tl.paused()) {
            tl.play();
          }
        },
        onLeave: () => tl.pause(),
        onEnterBack: () => tl.play(),
        onLeaveBack: () => tl.pause(),
      });

      return () => {
        tl.kill();
      };
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  const marqueeText = 'the visibility gap \u00B7 your mission matters \u00B7 no one can find you \u00B7 search engines decide who gets seen \u00B7 invisible organizations \u00B7 ';
  const marqueeText2 = 'traditional agencies don\'t understand \u00B7 optimize for clicks not change \u00B7 impact needs intelligence \u00B7 every day invisible \u00B7 mission unseen \u00B7 ';

  return (
    <SectionWrapper ref={sectionRef} id={id} theme="light" className="overflow-hidden py-24 md:py-32">
      {/* Marquee — giant overflowing text */}
      <div className="mb-20 overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap"
          aria-hidden="true"
        >
          <span className="mr-4 inline-block font-[family-name:var(--font-fairview)] text-[clamp(4rem,8vw,8rem)] tracking-[0.04em] text-forest-green/10">
            {marqueeText}{marqueeText}
          </span>
          <span className="mr-4 inline-block font-[family-name:var(--font-fairview)] text-[clamp(4rem,8vw,8rem)] tracking-[0.04em] text-forest-green/10">
            {marqueeText2}{marqueeText2}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <SplitText
          as="h2"
          className="mb-16 font-[family-name:var(--font-fairview)] text-[clamp(2rem,4vw,3rem)] tracking-[0.04em] text-forest-green"
          splitType="words"
        >
          {content.headline}
        </SplitText>

        <div className="flex flex-col gap-12">
          {content.statements.map((statement, i) => (
            <RevealOnScroll
              key={i}
              as="p"
              className="font-[family-name:var(--font-sen)] text-xl leading-relaxed text-forest-green md:text-2xl"
              delay={i * 0.12}
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
