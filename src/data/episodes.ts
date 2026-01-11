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
  appleUrl?: string;
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
    buzzsproutId: "16604831",
    spotifyUrl: "https://open.spotify.com/episode/3nQHBEp1IqG0PqWtQB0l0n",
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
    slug: "from-music-school-to-staff-pm",
    title: "From Music School to Staff PM",
    episodeNumber: "S1E2",
    guest: {
      name: "Brandon Lucas Green",
      role: "Staff Product Manager",
      company: "Buffer",
      location: "Boston, MA (Remote)",
      website: "https://buffer.com",
      industry: "Social Media & SaaS",
      bio: "Brandon Lucas Green is a Staff Product Manager at Buffer, the popular social media management platform. His unconventional journey from music school to tech showcases how creativity and adaptability can be powerful assets in product management. Brandon has navigated various work environments throughout his career and brings a unique perspective on the evolving nature of product management and what it takes to thrive in today's competitive PM landscape.",
      linkedin: "https://www.linkedin.com/in/brandonlgreen/"
    },
    description: "Brandon's unconventional journey from music school to Staff PM at Buffer, and how creativity shapes his approach to product.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Brandon Lucas Green, a Staff Product Manager at Buffer, to explore his unconventional journey from music school to tech and how he navigated the world of product management.\n\nBrandon shares pivotal moments in his career, the challenges he faced, and how adaptability has shaped his success in different work environments. He also discusses the role of creativity in product management, offers insights into today's job market for PMs, and emphasizes the importance of self-reflection for career growth.\n\nFrom the evolving nature of product management to practical advice for aspiring PMs, this episode is packed with valuable takeaways.",
    youtubeId: "5zn1aQwMo8E",
    spotifyUrl: "https://open.spotify.com/episode/5JREScrUH29f8unFQlHFVG",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-creativity-in-product-management/id1784108281?i=1000691160955",
    topic: "career",
    topics: ["Career Transition", "Creativity in PM", "Job Market Insights", "Self-Reflection", "Remote Work"],
    duration: "45 min",
    publishedAt: "2024-12-01",
    takeaways: [
      "Unconventional backgrounds like music can bring unique creativity to product management",
      "Adaptability is essential for success across different work environments and company cultures",
      "Self-reflection is a critical skill for continuous career growth as a PM",
      "The PM job market is evolving—understanding current trends helps you position yourself",
      "Creativity isn't just for designers—it's a core PM skill for problem-solving",
      "Pivotal career moments often come from unexpected challenges and how you respond to them"
    ],
    resourcesMentioned: [
      { title: "Buffer", url: "https://buffer.com" },
      { title: "The Product Pivot Podcast on YouTube", url: "https://www.youtube.com/@TheProductPivot" }
    ],
    keywords: ["staff product manager", "Buffer", "career transition", "music to tech", "creativity in product management", "PM job market", "remote product manager", "career growth"]
  },
  {
    id: "3",
    slug: "meet-the-hosts",
    title: "Meet the Hosts",
    episodeNumber: "S1E3",
    guest: {
      name: "Santi & Meagan",
      role: "Your Hosts",
      company: "The Product Pivot",
      location: "Remote",
      website: "https://www.youtube.com/@TheProductPivot",
      industry: "Product Management",
      bio: "Santiana Brace is a Product Leader at LifeRaft who pivoted from retail management through customer support and QA into product. Meagan Glenn is a Fractional Product Lead who transitioned from customer success into founding PM roles. Together, they share a passion for mentoring job seekers and helping others break into product management.",
      linkedin: "https://www.linkedin.com/in/santiana-brace/"
    },
    description: "Get to know your hosts Santi and Meagan, their journeys into product, and how The Product Pivot podcast came to be.",
    longDescription: "In this special episode, hosts Santi and Meagan share their own pivots into product management and the story behind The Product Pivot podcast.\n\nSanti's journey took her from retail management to customer support coordinator, then QA analyst, before finally landing in product. Meagan transitioned from customer success roles into founding PM positions at early-stage startups. Both share how mentorship shaped their careers, the importance of feedback, and why customer experience backgrounds create uniquely empathetic PMs.\n\nThey also reveal how a LinkedIn connection turned into a podcast partnership, and their mission to help even just one person through sharing these conversations.",
    youtubeId: "YUNFlHuEQyg",
    spotifyUrl: "https://open.spotify.com/episode/12qg8mul8WEQnVmVKfaHcv",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-meet-your-hosts/id1784108281?i=1000694415392",
    topic: "career",
    topics: ["Meet the Hosts", "Career Transition", "Mentorship", "Customer Experience", "Podcast Origin Story"],
    duration: "53 min",
    publishedAt: "2024-12-15",
    takeaways: [
      "You can pivot to PM from any background—retail, customer support, music school, anything",
      "CX and customer support experience builds crucial empathy for product management",
      "Mentorship is essential—seek it out and pay it forward when you can",
      "Feedback isn't a personal attack—it's someone investing time to help you improve",
      "Data is king, but context is queen—you need both to make great product decisions",
      "PMs are the organizational glue—they build relationships across every department",
      "Every day is a school day—continuous learning never stops in product"
    ],
    resourcesMentioned: [
      { title: "The Product Pivot on YouTube", url: "https://www.youtube.com/@TheProductPivot" },
      { title: "Santi on LinkedIn", url: "https://www.linkedin.com/in/santiana-brace/" },
      { title: "Meagan on LinkedIn", url: "https://www.linkedin.com/in/meagan-glenn/" }
    ],
    keywords: ["product pivot hosts", "Santi Brace", "Meagan Glenn", "pivot to product management", "CX to PM", "mentorship", "product management podcast", "career transition"]
  },
  {
    id: "4",
    slug: "from-product-marketing-to-pm",
    title: "From Product Marketing to PM",
    episodeNumber: "S1E4",
    guest: {
      name: "Tyler (TJ) Johnson",
      role: "Product Manager",
      company: "Nectar",
      location: "Remote",
      website: "https://nectarhr.com",
      industry: "Employee Recognition & Rewards",
      bio: "Tyler (TJ) Johnson is a Product Manager at Nectar, an employee recognition and rewards platform. He pivoted from customer marketing and product marketing into his first PM role in April 2024. TJ's journey is unique—Nectar's founders have been his best friends since age 3, and he joined the company after experiencing firsthand how customer obsession and relationship-building translate directly into product management success.",
      linkedin: "https://www.linkedin.com/in/tylerbjohnson24/"
    },
    description: "How TJ leveraged his product marketing background and customer obsession to land his first PM role at Nectar.",
    longDescription: "In this episode, hosts Santi and Meagan talk with Tyler (TJ) Johnson about his recent pivot from product marketing to product management at Nectar, an employee recognition and rewards platform.\n\nTJ shares how his customer-facing background in marketing gave him invaluable skills for PM work, why building strong relationships with engineers is critical, and the importance of 'wearing the hat before you have the position.' He also discusses the value of dogfooding your own product, how good leaders create more leaders (not followers), and why Marty Cagan's 'Inspired' shaped his understanding of product management.\n\nWith a unique backstory—the founders are his childhood best friends—TJ offers honest insights into navigating a PM role at a company where relationships run deep.",
    youtubeId: "LDeP5TyASDc",
    topic: "career",
    topics: ["Career Transition", "Product Marketing to PM", "Customer Obsession", "Engineering Relationships", "Startup Culture"],
    duration: "48 min",
    publishedAt: "2025-01-01",
    takeaways: [
      "Customer obsession from marketing roles translates directly to PM success",
      "Wear the hat before you have the position—start doing PM work before the title",
      "Good leaders create more leaders, not followers",
      "Building strong relationships with engineers turns them from mercenaries into missionaries",
      "Dogfooding your own product gives you invaluable customer empathy",
      "Your customer-facing background is a superpower, not a limitation",
      "Transferable skills matter more than traditional PM experience"
    ],
    resourcesMentioned: [
      { title: "Inspired by Marty Cagan", url: "https://www.svpg.com/inspired-how-to-create-products-customers-love/" },
      { title: "Nectar HR", url: "https://nectarhr.com" },
      { title: "The Product Pivot Podcast on YouTube", url: "https://www.youtube.com/@TheProductPivot" }
    ],
    keywords: ["product marketing to PM", "career transition", "customer obsession", "Nectar", "employee recognition", "first PM role", "transferable skills", "engineering relationships", "dogfooding"]
  }
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find(ep => ep.slug === slug);
}

export function getRelatedEpisodes(currentSlug: string, limit: number = 2): Episode[] {
  return episodes.filter(ep => ep.slug !== currentSlug).slice(0, limit);
}
