'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap-config';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

export function BreathingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced || !textRef.current || !sectionRef.current) return;

      const el = textRef.current;

      // Slow fade-in over a generous scroll zone
      gsap.set(el, { autoAlpha: 0, y: 20 });

      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        },
      });

      // Fade out as scrolling away
      gsap.to(el, {
        autoAlpha: 0,
        y: -20,
        duration: 1,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 1,
        },
      });
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="pause moment"
      className="relative flex min-h-[80vh] items-center justify-center bg-white px-6"
    >
      <p
        ref={textRef}
        className="mx-auto max-w-4xl text-center font-[family-name:var(--font-fairview)] text-[clamp(1.5rem,3vw,2.5rem)] tracking-[0.04em] leading-snug text-forest-green"
      >
        the organizations doing the most important work are often the hardest to find.
      </p>
    </section>
  );
}
