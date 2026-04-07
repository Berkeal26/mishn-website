'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/animations/gsap-config';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { cn } from '@/lib/utils/cn';

export interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
}

/**
 * Scroll-direction-aware marquee.
 * Text scrolls left on scroll-down, reverses on scroll-up.
 * Duplicated for seamless looping.
 */
export function Marquee({ text, speed = 0.5, className }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced || !trackRef.current || !containerRef.current) return;

      const track = trackRef.current;
      const container = containerRef.current;
      const contentWidth = track.scrollWidth / 2; // Half because duplicated

      // Continuous base animation
      const tween = gsap.to(track, {
        x: -contentWidth,
        duration: contentWidth / (speed * 100),
        ease: 'none',
        repeat: -1,
      });

      // Scroll-direction modulation
      ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const direction = self.direction; // 1 = down, -1 = up
          gsap.to(tween, {
            timeScale: direction === 1 ? 1 : -1,
            overwrite: 'auto',
            duration: 0.3,
          });
        },
      });
    },
    { scope: containerRef, dependencies: [prefersReduced] }
  );

  return (
    <div
      ref={containerRef}
      className={cn('overflow-hidden whitespace-nowrap', className)}
      aria-hidden="true"
    >
      <div ref={trackRef} className="inline-flex">
        {/* Duplicate for seamless loop */}
        <span className="inline-block pr-16">{text}</span>
        <span className="inline-block pr-16">{text}</span>
      </div>
    </div>
  );
}
