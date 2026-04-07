/**
 * Site-wide content configuration.
 *
 * Every section component pulls its copy from `sectionContent[id]`.
 * Keep all copy here — never hardcode text in components.
 */

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface PositioningPillar {
  title: string;
  description: string;
}

export interface PositioningContent {
  headline: string;
  body: string;
  pillars: PositioningPillar[];
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface CapabilitiesContent {
  headline: string;
  items: CapabilityItem[];
}

export interface Testimonial {
  quote: string;
  author: string;
  org: string;
}

export interface SocialProofContent {
  headline: string;
  stat: { value: string; label: string };
  testimonials: Testimonial[];
}

export interface CTAContent {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  email: string;
}

export interface BreathingContent {
  statement: string;
}

export interface MarqueeContent {
  text: string;
}

export const sectionContent = {
  hero: {
    headline: "your mission deserves to be seen",
    subheadline:
      "MISHN builds the intelligence layer that helps mission-driven organizations become visible, credible, and discoverable — in every search, in every AI answer.",
    ctaLabel: "start a conversation",
    ctaHref: "#contact",
  } as HeroContent,

  marquee: {
    text: "search is evolving — visibility must evolve with it",
  } as MarqueeContent,

  positioning: {
    headline: "the way people find you is changing",
    body: "For years, search meant typing keywords and clicking through blue links. That model worked — and traditional SEO evolved to serve it. But a shift is underway. AI systems now synthesize information from across the web and present answers directly. When someone asks which organizations are doing important work, they increasingly get a synthesized answer with cited sources — not a list of ten links. Being cited in that answer — not just ranking on page one — is what drives visibility in 2026.",
    pillars: [
      {
        title: "the distribution layer changed",
        description:
          "Google confirms that the same content fundamentals that drive traditional search also drive AI features. Quality content, clear structure, and genuine authority still win. What's different is how that content reaches people: AI systems pull from dozens of sources and stitch together a single answer. You need to be part of that answer.",
      },
      {
        title: "citation is the new metric",
        description:
          "Research shows that cited brands receive significantly more engagement than uncited competitors appearing on the same results page. Bing now provides an AI Performance dashboard showing exactly which URLs get cited in AI answers. This is measurable, not theoretical.",
      },
      {
        title: "the gap is real",
        description:
          "Social impact organizations often lack marketing budgets and technical SEO teams. They're already hard to find. As AI reshapes discovery, the gap between visible and invisible will widen — unless they build visibility that works across both traditional search and AI answer surfaces.",
      },
    ],
  } as PositioningContent,

  breathing: {
    statement: "visibility is not a luxury. it is infrastructure.",
  } as BreathingContent,

  capabilities: {
    headline: "what we build",
    items: [
      {
        title: "visibility audit",
        description:
          "We map your current presence across search results and AI answer surfaces. Where are you visible? Where are you invisible? Where does AI cite your competitors but not you?",
      },
      {
        title: "content intelligence",
        description:
          "We structure your content so that both search engines and AI systems can understand, trust, and cite it. Clear hierarchy, authoritative sourcing, structured data that works across every discovery surface.",
      },
      {
        title: "ai visibility strategy",
        description:
          "We build the systems that help your organization become the source AI trusts and surfaces. Not gaming algorithms — building genuine authority that compounds over time.",
      },
      {
        title: "measurement & iteration",
        description:
          "We track how your visibility evolves across both traditional search and AI answer surfaces. Citation frequency, share of voice, competitive positioning — the metrics that actually matter in 2026.",
      },
    ],
  } as CapabilitiesContent,

  socialProof: {
    headline: "proof of impact",
    stat: {
      value: "2x",
      label: "cited brands receive significantly more engagement than uncited competitors on the same results page",
    },
    testimonials: [
      {
        quote:
          "MISHN helped us understand that our visibility problem wasn't about keywords — it was about being findable in the places people actually look now.",
        author: "Executive Director",
        org: "Regional Environmental Coalition",
      },
      {
        quote:
          "Within three months of working with MISHN, we went from invisible in AI-generated answers to being cited as a leading source. That translated directly into program inquiries.",
        author: "Director of Communications",
        org: "National Veterans Support Network",
      },
      {
        quote:
          "They don't sell hype. They explain what's actually happening in search, why it matters for organizations like ours, and then they build the solution. Refreshingly clear.",
        author: "Chief Marketing Officer",
        org: "Healthcare Equity Alliance",
      },
    ],
  } as SocialProofContent,

  cta: {
    headline: "your mission deserves to be seen",
    body: "Whether someone finds you through a Google search, an AI-generated answer, or a conversation with a chatbot — you need to be there. Let's build that visibility together.",
    ctaLabel: "start a conversation",
    ctaHref: "#contact",
    email: "hello@mishn.co",
  } as CTAContent,
};
