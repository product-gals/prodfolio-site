export interface Episode {
  id: string;
  slug: string;
  title: string;
  episodeNumber?: string; // e.g., "S2E27"
  guest: {
    name: string;
    role: string;
    company: string;
    location?: string;
    website?: string;
    industry?: string;
    bio: string;
    photo?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  description: string;
  longDescription: string;
  youtubeId: string;
  spotifyUrl?: string;
  buzzsproutId?: string; // For audio embed
  topic: "hiring" | "career" | "ai" | "leadership";
  topics: string[]; // Multiple topic tags
  duration: string;
  publishedAt: string;
  takeaways: string[];
  resourcesMentioned?: { title: string; url: string }[];
  keywords: string[];
}

export const episodes: Episode[] = [
  {
    id: "1",
    slug: "from-pi-to-pm",
    title: "From PI to PM",
    episodeNumber: "S1E1",
    guest: {
      name: "Rachel Kronenfeld",
      role: "Product Manager",
      company: "LifeRaft",
      location: "Canada",
      website: "https://www.liferaftinc.com",
      industry: "Open Source Intelligence & Software",
      bio: "Rachel Kronenfeld is a Product Manager at LifeRaft, a software company specializing in open source online intelligence and investigation. Before pivoting to product, Rachel spent 8 years as a licensed private investigator and served as Director of Services at a managed service firm—where she actually used LifeRaft's product as a customer. Her unique journey from subject matter expert to PM showcases how deep industry knowledge can be a powerful path into product management.",
      linkedin: "https://www.linkedin.com/in/rachel-kronenfeld-6911426b/"
    },
    description: "How Rachel pivoted from private investigator to product manager by leveraging her subject matter expertise.",
    longDescription: "Rachel Kronenfeld's path to product management is unlike any other. After 8 years as a private investigator and Director of Services at an intelligence firm, she made the leap to PM at LifeRaft—the very software she used as a customer.\n\nIn this episode, Rachel shares how she positioned herself for a PM role without traditional product experience, the challenges of learning on the job, and why being a subject matter expert gave her unique advantages. She also discusses working closely with engineering and design teams, letting go of perfectionism in favor of iteration, and why the 'PM is dead' narrative shouldn't discourage aspiring product managers.",
    youtubeId: "qS4IxwD9dCo",
    topic: "career",
    topics: ["Career Transition", "Subject Matter Expert", "Pivoting to Product", "Transferable Skills", "Cross-functional Collaboration"],
    duration: "43 min",
    publishedAt: "2024-11-15",
    takeaways: [
      "You can pivot to PM from any background—subject matter expertise is incredibly valuable",
      "Transferable skills from sales, CX, and marketing apply directly to product management",
      "Product management looks different at every company—be ready to learn on the job",
      "Building strong relationships with engineering, design, and other departments is critical",
      "Let go of perfectionism—focus on MVPs and iterate based on customer feedback",
      "Don't let 'PM is dead' narratives discourage you—fix your algorithm and stay positive",
      "PMs are the glue between departments—it's hard to imagine a product company without them"
    ],
    resourcesMentioned: [
      { title: "Cracking the PM Career by Jackie Bavaro & Gayle Laakmann McDowell", url: "https://www.crackingthepmcareer.com" },
      { title: "Inspired by Marty Cagan", url: "https://www.svpg.com/inspired-how-to-create-products-customers-love/" },
      { title: "The Product Pivot Podcast on YouTube", url: "https://www.youtube.com/@TheProductPivot" }
    ],
    keywords: ["pivot to product management", "subject matter expert PM", "career transition", "private investigator to PM", "breaking into product", "transferable skills", "LifeRaft"]
  },
  {
    id: "2",
    slug: "why-ai-should-be-boring",
    title: "Why AI Should Be Boring",
    episodeNumber: "S1E2",
    guest: {
      name: "Aaron Kesler",
      role: "VP of Product",
      company: "AI Startup",
      location: "Austin, TX",
      website: "https://www.linkedin.com/in/aaronkesler/",
      industry: "AI & Machine Learning",
      bio: "Aaron Kesler is VP of Product at an AI startup where he leads product strategy for enterprise automation solutions. His unconventional path from sales to product leadership gives him a unique perspective on breaking into PM and building products that solve real problems. Aaron is known for his contrarian take that the best AI products are 'boring'—they solve mundane problems really well without chasing hype.",
      linkedin: "https://www.linkedin.com/in/aaronkesler/",
      twitter: "https://twitter.com/aaronkesler"
    },
    description: "Breaking into product management and the mindset shift of giving yourself the title.",
    longDescription: "Aaron Kesler, VP of Product at an AI startup, joins us to discuss his unconventional path into product management and his hot take on AI product development.\n\nAaron argues that the best AI products are 'boring'—they solve real problems without the hype. We also dive into his advice for aspiring PMs: sometimes you need to give yourself the title before anyone else will. This episode is essential listening for anyone thinking about AI PM roles or transitioning into product from another function.",
    youtubeId: "Kw9ssA8sSsI",
    topic: "ai",
    topics: ["AI Product Management", "Career Transition", "Breaking into PM", "Product Strategy"],
    duration: "45 min",
    publishedAt: "2024-12-01",
    takeaways: [
      "The best AI products are 'boring'—they solve mundane problems exceptionally well",
      "Don't chase AI capabilities; focus on problems AI can solve better than alternatives",
      "Give yourself the PM title by doing PM work before you have the role",
      "Sales experience translates well to PM: customer empathy and communication",
      "Chase learning environments, not titles—the career follows growth"
    ],
    resourcesMentioned: [
      { title: "Prodfolio - Build Your PM Portfolio", url: "https://prodfolio.io" }
    ],
    keywords: ["AI product management", "career transition", "VP of Product", "AI PM", "breaking into PM"]
  },
  {
    id: "3",
    slug: "product-management-evolving-or-disappearing",
    title: "Is Product Management Evolving or Disappearing?",
    episodeNumber: "S1E3",
    guest: {
      name: "Brody Clemmer",
      role: "Product Lead",
      company: "Growth Startup",
      location: "Remote / Digital Nomad",
      website: "https://www.linkedin.com/in/brodyclemmer/",
      industry: "SaaS / B2B Tech",
      bio: "Brody Clemmer is a Product Lead at a fast-growing startup where he focuses on product strategy and team development. With experience spanning startups and scale-ups, Brody has a unique perspective on how the PM role is evolving in the age of AI. He's passionate about helping PMs develop systems thinking and strategic skills that will remain valuable as execution becomes commoditized.",
      linkedin: "https://www.linkedin.com/in/brodyclemmer/"
    },
    description: "The evolution of product management and what the role may look like in the next few years.",
    longDescription: "With AI automating more tasks and companies questioning the PM role, is product management evolving or facing extinction?\n\nBrody Clemmer, a Product Lead at a fast-growing startup, shares his perspective on where PM is headed. We discuss the skills that will matter in 5 years, how AI will reshape the role, and why the best PMs will become 'systems thinkers' rather than feature shippers. If you're thinking about your long-term PM career, this episode is a must-listen.",
    youtubeId: "4ZLUXW06jbg",
    topic: "leadership",
    topics: ["Future of PM", "AI & Automation", "Product Leadership", "Career Development"],
    duration: "38 min",
    publishedAt: "2024-12-15",
    takeaways: [
      "The traditional PM role (PRDs, backlog management) is disappearing—but strategic PM work is growing",
      "AI commoditizes execution; 'what to build' becomes more important than 'how to build'",
      "Systems thinking will replace feature-focused PM work",
      "Key future skills: customer empathy, strategic communication, technical literacy, business acumen",
      "Focus on substance over title—the best moves are learning opportunities, not promotions"
    ],
    resourcesMentioned: [
      { title: "Prodfolio - Build Your PM Portfolio", url: "https://prodfolio.io" },
      { title: "The Product Pivot on LinkedIn", url: "https://www.linkedin.com/company/prodfoliohq/" }
    ],
    keywords: ["future of product management", "PM career", "AI and product management", "product leadership", "PM skills"]
  }
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find(ep => ep.slug === slug);
}

export function getRelatedEpisodes(currentSlug: string, limit: number = 2): Episode[] {
  return episodes.filter(ep => ep.slug !== currentSlug).slice(0, limit);
}
