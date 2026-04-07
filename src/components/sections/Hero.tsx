'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/animations/gsap-config';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { sectionContent } from '@/content/sections.config';
import { ANIMATION } from '@/lib/utils/constants';

// Sequence: logo 0.2s → headline chars start 0.5s (~1.3s to complete) → subheadline 1.4s → CTA 1.6s
const HERO_DELAYS = {
  logo: 0.2,
  headline: 0.5,
  subheadline: 1.4,
  cta: 1.6,
} as const;

export interface HeroProps {
  id: string;
}

export function Hero({ id }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const content = sectionContent.hero;

  useGSAP(
    () => {
      if (prefersReduced || !logoRef.current) return;

      gsap.fromTo(
        logoRef.current,
        { autoAlpha: 0, y: -16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: ANIMATION.REVEAL_DURATION,
          ease: ANIMATION.ENTRANCE_EASE,
          delay: HERO_DELAYS.logo,
          clearProps: 'will-change',
        }
      );
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  return (
    <SectionWrapper
      ref={sectionRef}
      id={id}
      theme="dark"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center md:px-12 lg:px-24"
    >
      {/* Logo */}
      <div ref={logoRef} className="mb-8">
        <Image
          src="/images/logo/mishn-brandmark.svg"
          alt="MISHN brandmark"
          width={80}
          height={80}
          className="mx-auto h-20 w-20 brightness-0 invert"
          priority
        />
      </div>

      {/* Headline — chars stagger in after logo */}
      <SplitText
        as="h1"
        className="font-[family-name:var(--font-fairview)] text-[clamp(3rem,6vw,5rem)] tracking-[0.04em] text-bone-white"
        splitType="chars"
        stagger={0.03}
        scrollTrigger={false}
        delay={HERO_DELAYS.headline}
      >
        {content.headline}
      </SplitText>

      {/* Subheadline — begins while final chars are still arriving */}
      <RevealOnScroll
        as="p"
        className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-sen)] text-lg text-bone-white/80 md:text-xl"
        y={20}
        delay={HERO_DELAYS.subheadline}
      >
        {content.subheadline}
      </RevealOnScroll>

      {/* CTA — beats after subheadline */}
      <RevealOnScroll
        className="mt-10"
        y={20}
        delay={HERO_DELAYS.cta}
      >
        <a
          href={content.ctaHref}
          className="inline-block border-2 border-bone-white px-8 py-3 font-[family-name:var(--font-sen)] text-sm tracking-wide text-bone-white transition-colors duration-200 hover:bg-bone-white hover:text-forest-green"
        >
          {content.ctaLabel}
        </a>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
