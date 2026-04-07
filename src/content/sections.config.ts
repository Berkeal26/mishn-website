export const sectionContent = {
  hero: {
    headline: 'intelligence for impact',
    subheadline:
      'We help mission-driven organizations cut through the noise with marketing intelligence and AI visibility strategies that actually move people.',
    ctaLabel: 'Start a conversation',
    ctaHref: '#contact',
  },

  problem: {
    headline: 'the visibility gap',
    statements: [
      "Your mission matters — but no one can find you. Search engines, AI assistants, and social algorithms decide who gets seen. Most impact-driven organizations are invisible.",
      "Traditional marketing agencies don't understand your world. They optimize for clicks, not change. You need a partner who speaks both impact and intelligence.",
      "Every day you're not visible is a day your mission isn't reaching the people who need it most.",
    ],
  },

  positioning: {
    headline: 'where mission meets intelligence',
    body: "MISHN sits at the intersection of social impact strategy and modern marketing intelligence. We don't just make you visible — we make you findable, quotable, and impossible to ignore.",
    pillars: [
      {
        title: 'ai visibility',
        description:
          'Get cited by AI assistants, LLMs, and answer engines. The next generation of search is here — we make sure you show up.',
      },
      {
        title: 'marketing intelligence',
        description:
          'Data-driven strategy that connects your mission to the audiences who care most. No vanity metrics — real impact measurement.',
      },
      {
        title: 'impact storytelling',
        description:
          'Transform your outcomes into narratives that resonate across channels — from boardrooms to social feeds to AI-generated summaries.',
      },
    ],
  },

  capabilities: {
    headline: 'what we do',
    items: [
      {
        title: 'ai search optimization',
        description:
          'Structured content, entity mapping, and authority building so AI systems cite your organization as a primary source.',
      },
      {
        title: 'strategic seo',
        description:
          'Technical and content SEO tailored for mission-driven organizations. We optimize for the searches your future supporters are making.',
      },
      {
        title: 'content intelligence',
        description:
          'Audit, strategy, and production of content that performs — grounded in data, shaped by your mission, built to compound.',
      },
      {
        title: 'brand positioning',
        description:
          'Clarify who you are, who you serve, and why it matters. We build positioning frameworks that make every piece of communication sharper.',
      },
    ],
  },

  socialProof: {
    headline: 'trusted by changemakers',
    testimonials: [
      {
        quote:
          'MISHN helped us go from invisible to cited by three major AI assistants within six months. Our inbound inquiries tripled.',
        author: 'Program Director',
        org: 'National Climate Education Nonprofit',
      },
      {
        quote:
          "They understand the intersection of impact and visibility better than anyone we've worked with. Finally, a marketing partner that gets it.",
        author: 'Executive Director',
        org: 'Urban Health Equity Initiative',
      },
      {
        quote:
          "The AI visibility audit alone was worth it. We had no idea how much ground we were losing to organizations with half our track record.",
        author: 'Communications Lead',
        org: 'Global Food Security Alliance',
      },
    ],
  },

  founder: {
    headline: 'the mind behind mishn',
    name: 'Mike Tadesse',
    bio: "Mike Tadesse has spent over a decade at the intersection of marketing, technology, and social impact. After years of watching mission-driven organizations lose visibility to better-funded competitors with weaker impact, he founded MISHN to level the playing field. His approach combines deep marketing intelligence with genuine understanding of what it takes to drive social change.",
    imageSrc: '/images/founder/mike-tadesse.webp',
    imageAlt: 'Mike Tadesse, founder of MISHN, in a professional headshot',
  },

  cta: {
    headline: 'ready to be seen?',
    body: "Your mission deserves visibility. Let's build a strategy that puts you in front of the people — and the AI systems — that matter most.",
    ctaLabel: 'Book a free consultation',
    ctaHref: 'https://calendly.com',
    email: 'hello@mishn.co',
  },
} as const;

export type SectionId = keyof typeof sectionContent;
