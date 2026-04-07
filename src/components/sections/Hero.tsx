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

// 3-beat entrance: logo scale 0.2s → headline chars 0.6s → subheadline 1.5s → CTA 1.8s
const HERO_DELAYS = {
  logo: 0.2,
  headline: 0.6,
  subheadline: 1.5,
  cta: 1.8,
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

      // Logo: scale up + fade in — deliberate, premium entrance
      gsap.fromTo(
        logoRef.current,
        { autoAlpha: 0, scale: 0.85 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          delay: HERO_DELAYS.logo,
          clearProps: 'will-change',
        }
      );

      // Subtle ambient scale on the logo once it's in
      gsap.to(logoRef.current, {
        scale: 1.02,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: HERO_DELAYS.logo + 1.2,
      });
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
      {/* Logo — beat 1: scale up from nothing */}
      <div ref={logoRef} className="mb-10">
        <Image
          src="/images/logo/mishn-brandmark.svg"
          alt="MISHN brandmark"
          width={80}
          height={80}
          className="mx-auto h-20 w-20 brightness-0 invert"
          priority
        />
      </div>

      {/* Headline — beat 2: chars stagger in */}
      <SplitText
        as="h1"
        className="font-[family-name:var(--font-fairview)] text-[clamp(3rem,6vw,5rem)] tracking-[0.04em] text-bone-white"
        splitType="chars"
        stagger={0.035}
        scrollTrigger={false}
        delay={HERO_DELAYS.headline}
      >
        {content.headline}
      </SplitText>

      {/* Subheadline — beat 3: rise up */}
      <RevealOnScroll
        as="p"
        className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-sen)] text-lg text-bone-white/80 md:text-xl"
        y={24}
        delay={HERO_DELAYS.subheadline}
      >
        {content.subheadline}
      </RevealOnScroll>

      {/* CTA — beat 4: final anchor */}
      <RevealOnScroll
        className="mt-12"
        y={16}
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
