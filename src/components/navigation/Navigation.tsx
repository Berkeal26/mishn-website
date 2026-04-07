'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

const NAV_LINKS = [
  { id: 'problem', label: 'The Gap' },
  { id: 'positioning', label: 'Approach' },
  { id: 'ai-visibility', label: 'AI Shift' },
  { id: 'capabilities', label: 'Services' },
  { id: 'social-proof', label: 'Proof' },
  { id: 'founder', label: 'Founder' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let accumulated = 0;
    const HIDE_THRESHOLD = 200; // sustained downward scroll before hiding
    const SHOW_ON_UP = 5; // any upward movement > 5px shows nav

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Background after 50px
      setIsScrolled(currentY > 50);

      if (currentY <= 100) {
        setIsHidden(false);
        accumulated = 0;
        lastScrollY.current = currentY;
        return;
      }

      const delta = currentY - lastScrollY.current;

      if (delta > 0) {
        // Scrolling down
        accumulated = Math.min(accumulated + delta, HIDE_THRESHOLD);
        if (accumulated >= HIDE_THRESHOLD) {
          setIsHidden(true);
        }
      } else if (delta < -SHOW_ON_UP) {
        // Scrolling up meaningfully
        accumulated = 0;
        setIsHidden(false);
      }

      lastScrollY.current = currentY;

      // Reset accumulator if user pauses
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        accumulated = 0;
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-forest-green/95 backdrop-blur-sm'
          : 'bg-transparent',
        isHidden && !isOpen && '-translate-y-full'
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12"
        aria-label="Main navigation"
      >
        <a href="#hero" className="relative z-10 block h-10 w-28">
          <Image
            src="/images/logo/mishn-main.svg"
            alt="MISHN home"
            width={112}
            height={40}
            className="h-10 w-auto brightness-0 invert"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-[family-name:var(--font-sen)] text-sm tracking-wide text-bone-white/80 transition-colors duration-200 hover:text-bone-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={cn(
              'block h-0.5 w-6 bg-bone-white transition-transform duration-300',
              isOpen && 'translate-y-2 rotate-45'
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-6 bg-bone-white transition-opacity duration-300',
              isOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-6 bg-bone-white transition-transform duration-300',
              isOpen && '-translate-y-2 -rotate-45'
            )}
          />
        </button>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            'fixed inset-0 flex flex-col items-center justify-center bg-forest-green transition-opacity duration-300 md:hidden',
            isOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          )}
          aria-hidden={!isOpen}
        >
          <ul className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  tabIndex={isOpen ? undefined : -1}
                  className="font-[family-name:var(--font-fairview)] text-2xl tracking-[0.04em] text-bone-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
