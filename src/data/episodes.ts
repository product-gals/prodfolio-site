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
    slug: "power-of-storytelling",
    title: "The Power of Storytelling",
    episodeNumber: "S1E1",
    guest: {
      name: "Heidi Ram",
      role: "Product Recruiter",
      company: "Tech Recruiting Partners",
      location: "San Francisco, CA",
      website: "https://www.linkedin.com/in/heidiram/",
      industry: "Recruiting & Talent Acquisition",
      bio: "Heidi Ram is an experienced product recruiter who has helped hundreds of PMs land their dream roles at top tech companies. With over 8 years in talent acquisition, she specializes in product management and has placed candidates at companies ranging from early-stage startups to Fortune 500s. Heidi is passionate about helping PMs tell their stories in ways that resonate with hiring managers.",
      linkedin: "https://www.linkedin.com/in/heidiram/"
    },
    description: "How to tell your PM story in a way that resonates with hiring managers and recruiters.",
    longDescription: "In this episode, we sit down with Heidi Ram, an experienced product recruiter who has helped hundreds of PMs land their dream roles. Heidi shares her insider perspective on what makes candidates stand out, why storytelling is the most underrated skill in interviewing, and how to frame your experience in a way that resonates with hiring managers.\n\nWhether you're actively job searching or just want to be prepared for your next opportunity, this episode is packed with actionable advice from someone who reviews thousands of PM applications every year.",
    youtubeId: "Zg4SOZexDUE",
    topic: "hiring",
    topics: ["Interviewing", "Storytelling", "Career Advice", "Job Search"],
    duration: "32 min",
    publishedAt: "2024-11-15",
    takeaways: [
      "Recruiters scan resumes for stories, not just skills—lead with narrative",
      "The STAR method feels mechanical; use the 'dinner party test' instead",
      "The 'present-past-future' framework for 'tell me about yourself'",
      "Build your brand before you need it with a 'brag doc'",
      "Candidates with portfolios jump to the top of the recruiter's list"
    ],
    resourcesMentioned: [
      { title: "Prodfolio - Build Your PM Portfolio", url: "https://prodfolio.io" },
      { title: "The Product Pivot Podcast on YouTube", url: "https://www.youtube.com/@TheProductPivot" }
    ],
    keywords: ["product manager interview", "PM storytelling", "recruiter tips", "job search", "career advice"]
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
