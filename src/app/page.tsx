import { Navigation } from '@/components/navigation/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Positioning } from '@/components/sections/Positioning';
import { Capabilities } from '@/components/sections/Capabilities';
import { SocialProof } from '@/components/sections/SocialProof';
import { Founder } from '@/components/sections/Founder';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero id="hero" />
      <Problem id="problem" />
      <Positioning id="positioning" />
      <Capabilities id="capabilities" />
      <SocialProof id="social-proof" />
      <Founder id="founder" />
      <CTA id="contact" />
    </>
  );
}
