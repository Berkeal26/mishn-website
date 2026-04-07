'use client';

import { forwardRef, CSSProperties } from 'react';
import { cn } from '@/lib/utils/cn';

export interface SectionWrapperProps {
  id: string;
  theme?: 'light' | 'dark';
  className?: string;
  style?: CSSProperties;
  /** Optional accessible label for the section landmark. Falls back to id. */
  ariaLabel?: string;
  children: React.ReactNode;
}

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ id, theme = 'light', className, style, ariaLabel, children }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        aria-label={ariaLabel ?? id}
        style={style}
        className={cn(
          'relative w-full px-6 py-20 md:px-12 lg:px-24',
          theme === 'dark'
            ? 'bg-forest-green text-bone-white'
            : 'bg-white text-forest-green',
          className
        )}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';
