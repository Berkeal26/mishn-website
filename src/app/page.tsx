'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { Navigation } from '@/components/navigation/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Positioning } from '@/components/sections/Positioning';
import { BreathingSection } from '@/components/sections/BreathingSection';
import { Capabilities } from '@/components/sections/Capabilities';
import { SocialProof } from '@/components/sections/SocialProof';
import { CTA } from '@/components/sections/CTA';

/**
 * Home page — assembles all section components in order.
 *
 * Section flow:
 *   Navigation (fixed)
 *   Hero — brandmark + headline
 *   Positioning — "why AI visibility matters" + marquee
 *   BreathingSection — pause moment (150vh)
 *   Capabilities — 4 services
 *   SocialProof — trust stat + testimonials
 *   CTA — close the arc
 *
 * Lenis provides smooth scroll. All motion is GSAP + ScrollTrigger.
 */
export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <main id="main-content">
      <Navigation />
      <Hero id="hero" />
      <Positioning id="positioning" />
      <BreathingSection id="breathing" />
      <Capabilities id="capabilities" />
      <SocialProof id="social-proof" />
      <CTA id="contact" />
    </main>
  );
}
