'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap-config';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplitText } from '@/components/ui/SplitText';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

export function AIVisibility() {
  const sectionRef = useRef<HTMLElement>(null);
  const shiftRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Parallax on the "from" and "to" cards
  useGSAP(
    () => {
      if (prefersReduced || !shiftRef.current) return;

      const cards = shiftRef.current.querySelectorAll('.shift-card');
      if (cards.length < 2) return;

      // Subtle parallax: left card slower, right card faster
      gsap.to(cards[0], {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: shiftRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(cards[1], {
        y: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: shiftRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  return (
    <SectionWrapper ref={sectionRef} id="ai-visibility" theme="dark" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SplitText
          as="h2"
          className="mb-8 font-[family-name:var(--font-fairview)] text-[clamp(2rem,4vw,3rem)] tracking-[0.04em] text-bone-white"
          splitType="words"
        >
          search is evolving
        </SplitText>

        <RevealOnScroll
          as="p"
          className="mb-16 max-w-2xl font-[family-name:var(--font-sen)] text-lg leading-relaxed text-bone-white/80"
          y={20}
        >
          for years, search meant typing keywords into google and clicking through blue links. that model worked — and traditional seo evolved to serve it.
        </RevealOnScroll>

        <RevealOnScroll
          as="p"
          className="mb-16 max-w-2xl font-[family-name:var(--font-sen)] text-lg leading-relaxed text-bone-white/80"
          y={20}
          delay={0.1}
        >
          but a shift is underway. ai systems now synthesize information from across the web and present answers directly — in google&apos;s ai overviews, in bing&apos;s copilot, in chatgpt, in perplexity, and in dozens of emerging tools. when someone asks &quot;which organizations are leading mental health outreach in veterans communities,&quot; they increasingly get a synthesized answer with cited sources — not a list of ten links to click.
        </RevealOnScroll>

        {/* From → To shift visualization */}
        <div ref={shiftRef} className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <RevealOnScroll delay={0.1} y={30}>
            <div className="shift-card border border-bone-white/20 p-8 md:p-10">
              <p className="mb-4 font-[family-name:var(--font-sen)] text-sm tracking-widest text-bone-white/50">
                before
              </p>
              <h3 className="mb-4 font-[family-name:var(--font-fairview)] text-xl tracking-[0.04em] text-bone-white">
                rank on page one
              </h3>
              <p className="font-[family-name:var(--font-sen)] text-base leading-relaxed text-bone-white/70">
                optimize for keywords, earn backlinks, climb the rankings. visibility was about position — being first in a list of ten blue links.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} y={30}>
            <div className="shift-card border border-bone-white/20 p-8 md:p-10">
              <p className="mb-4 font-[family-name:var(--font-sen)] text-sm tracking-widest text-bone-white/50">
                now
              </p>
              <h3 className="mb-4 font-[family-name:var(--font-fairview)] text-xl tracking-[0.04em] text-bone-white">
                be the source ai cites
              </h3>
              <p className="font-[family-name:var(--font-sen)] text-base leading-relaxed text-bone-white/70">
                ai systems pull from 30+ sources and stitch together a single answer. being cited in that answer — not just ranking on page one — is what drives visibility in 2026.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Key insight */}
        <RevealOnScroll
          as="p"
          className="mx-auto mb-16 max-w-3xl text-center font-[family-name:var(--font-fairview)] text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-[0.04em] leading-snug text-bone-white"
          y={20}
        >
          google confirms that the same content fundamentals that drive traditional search also drive ai features. there are no secret tricks — quality content, clear structure, and genuine authority still win. but the distribution layer has changed.
        </RevealOnScroll>

        {/* Why it matters for social impact */}
        <div className="border-t border-bone-white/20 pt-16">
          <SplitText
            as="h3"
            className="mb-8 font-[family-name:var(--font-fairview)] text-[clamp(1.5rem,3vw,2rem)] tracking-[0.04em] text-bone-white"
            splitType="words"
          >
            why this matters for you
          </SplitText>

          <RevealOnScroll
            as="p"
            className="mb-8 max-w-2xl font-[family-name:var(--font-sen)] text-lg leading-relaxed text-bone-white/80"
            y={20}
          >
            mission-driven organizations often lack marketing budgets, technical seo teams, or content operations. they&apos;re already hard to find. as ai reshapes discovery, the gap between visible and invisible will widen — unless they build visibility that works across both traditional search and ai answer surfaces.
          </RevealOnScroll>

          <RevealOnScroll
            as="p"
            className="max-w-2xl font-[family-name:var(--font-sen)] text-lg leading-relaxed text-bone-white/80"
            y={20}
            delay={0.1}
          >
            research shows that cited brands receive significantly more engagement than uncited competitors appearing on the same results page. position one with no ai citation may deliver less than half the traffic it would have two years ago.
          </RevealOnScroll>
        </div>

        {/* MISHN's role */}
        <RevealOnScroll
          className="mt-16"
          y={30}
        >
          <div className="border-l-2 border-bone-white/30 pl-8">
            <p className="font-[family-name:var(--font-sen)] text-lg leading-relaxed text-bone-white/90">
              that&apos;s what mishn does. we build the intelligence layer that helps mission-driven organizations become visible, credible, and discoverable — whether someone finds them through a google search, an ai-generated answer, or a conversation with a chatbot.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Smooth gradient fade to next (light) section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #EDE6DB 100%)',
        }}
        aria-hidden="true"
      />
    </SectionWrapper>
  );
}
