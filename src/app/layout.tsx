import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import './globals.css';

const fairview = localFont({
  src: '../../public/fonts/FairviewSmallCaps.woff2',
  variable: '--font-fairview',
  display: 'swap',
  preload: true,
});

const sen = localFont({
  src: '../../public/fonts/Sen-Regular.woff2',
  variable: '--font-sen',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'MISHN — Intelligence for Impact',
  description:
    'Social impact marketing and AI visibility consulting for mission-driven organizations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fairview.variable} ${sen.variable}`}>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SmoothScroll>
          <main id="main-content">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
