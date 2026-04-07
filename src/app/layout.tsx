import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MISHN — AI Visibility for Mission-Driven Organizations",
  description:
    "MISHN builds the intelligence layer that helps mission-driven organizations become visible, credible, and discoverable — in every search, in every AI answer.",
  openGraph: {
    title: "MISHN — AI Visibility for Mission-Driven Organizations",
    description:
      "Your mission deserves to be seen. We build visibility that works across both traditional search and AI answer surfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preload brand fonts */}
        <link
          rel="preload"
          href="/fonts/Fairview_SmallCaps.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Sen-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Skip to content — accessibility */}
        <a href="#hero" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
