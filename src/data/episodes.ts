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
    spotifyUrl: "https://open.spotify.com/episode/0RR7hCiFRtdFxkrYUH72yn",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-from-marketing-to-product-management/id1784108281?i=1000697647289",
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
  },
  {
    id: "5",
    slug: "big-tech-myths",
    title: "Big Tech Myths - A PM's Journey to Microsoft",
    episodeNumber: "S1E5",
    guest: {
      name: "Varshine Sridharan",
      role: "AI Product Lead",
      company: "Microsoft Copilot & Agents",
      location: "Boulder, CO",
      website: "https://www.microsoft.com/copilot",
      industry: "Big Tech & AI",
      bio: "Varshine (Varsh) Sridharan is an AI Product Lead at Microsoft, building Gen AI products including Copilot. With nearly seven years of overall experience and four years in product management, she started her career as a solutions engineer at Microsoft in India before pivoting to PM at Twilio—then returning to Microsoft as a Senior PM. Varsh is passionate about mentoring aspiring PMs and breaking myths about what it takes to get into big tech.",
      linkedin: "https://www.linkedin.com/in/varshine/"
    },
    description: "Varsh breaks myths about breaking into big tech and shares how she pivoted from solutions engineering to PM at Microsoft.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Varshine (Varsh) Sridharan, an AI Product Lead at Microsoft working on Copilot, to debunk common myths about breaking into big tech and discuss the evolving landscape of AI product management.\n\nVarsh shares her unconventional journey from solutions engineering at Microsoft India to TPM at Twilio, then pivoting internally to PM before returning to Microsoft. She emphasizes that you don't need big tech experience to get into big tech—what matters is your product building skills and customer empathy.\n\nThe conversation covers practical advice for job seekers: pivot internally rather than externally, create a niche with AI side projects, leverage LinkedIn strategically, and practice relentlessly for PM interviews. Varsh also discusses how AI is transforming product management, enabling PMs to bridge gaps between design and engineering like never before.",
    youtubeId: "RLgCLZ-9ICU",
    spotifyUrl: "https://open.spotify.com/episode/4RIcXJmJCKrMO17n7WJ4Jg",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-big-tech-myths-a-pms-journey-to-microsoft/id1784108281?i=1000698748381",
    topic: "career",
    topics: ["Big Tech", "AI Product Management", "Career Transition", "Interview Prep", "Networking", "Internal Transfers"],
    duration: "49 min",
    publishedAt: "2025-01-15",
    takeaways: [
      "You don't need big tech experience to get into big tech—product building skills matter more than company names",
      "Pivot to PM internally within your company—it's much easier than external hiring",
      "Get any job first, then move into PM internally rather than holding out for the perfect PM role",
      "Create a competitive edge with AI projects and side hustles to stand out in today's market",
      "Leverage your industry background when applying—your niche knowledge is a strength",
      "Practice, practice, practice for PM interviews—write out answers and do mock interviews",
      "Use LinkedIn strategically—engage with content, write posts about products, build connections",
      "AI is the pivotal moment for PMs—learn to bridge design and engineering gaps with AI tools",
      "Focus on the product you want to build, not just the company name",
      "Rejection means 'not right now'—use the time to polish your skills and try again"
    ],
    resourcesMentioned: [
      { title: "Cracking the PM Interview by Gayle Laakmann McDowell", url: "https://www.crackingthepminterview.com" },
      { title: "Exponent PM Interview Prep", url: "https://www.tryexponent.com" },
      { title: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com" },
      { title: "Lewis Lin PM Community", url: "https://www.lewis-lin.com" },
      { title: "The Product Pivot Podcast on YouTube", url: "https://www.youtube.com/@TheProductPivot" }
    ],
    keywords: ["big tech PM", "Microsoft product manager", "AI product management", "Copilot", "breaking into big tech", "internal transfer", "PM interview prep", "career transition", "TPM to PM", "solutions engineering"]
  },
  {
    id: "6",
    slug: "is-product-management-evolving-or-disappearing",
    title: "Is Product Management Evolving or Disappearing",
    episodeNumber: "S1E6",
    guest: {
      name: "Brody Clemmer",
      role: "Lead Product Manager",
      company: "Little Otter",
      location: "Remote",
      website: "https://www.littleotterhealth.com",
      industry: "Healthcare & Mental Health",
      bio: "Brody Clemmer is the Lead Product Manager at Little Otter, a pediatric mental health startup. With nearly 12 years in the product world, Brody came from an entrepreneurial background—running his own web development firm before discovering product management. He never went to college, going straight into the workforce after high school, and believes that a 'figure it out' mindset is what sets great PMs apart. Brody is passionate about coaching product managers and even helps PMs transition out of product when it's no longer the right fit.",
      linkedin: "https://www.linkedin.com/in/brodyclemmer/"
    },
    description: "Brody shares his provocative take on the future of product management and why the role may not exist in 10 years as we know it today.",
    longDescription: "In this thought-provoking episode, hosts Santi and Meagan sit down with Brody Clemmer, Lead Product Manager at Little Otter, to discuss the evolving—and potentially disappearing—nature of product management.\n\nBrody shares his unconventional path from running a bootstrapped web development firm at 22 to becoming a lead PM, all without a college degree. He challenges common assumptions about the PM career path, arguing that product management is a role, not a career, and that the title may not exist in 10 years—though product thinking will always be needed.\n\nThe conversation dives deep into the differences between startups and big tech, the importance of staying in the problem space, adaptive communication, and why Brody sometimes coaches PMs out of product management entirely. His hot take: go after another career path first, use product thinking foundations, and you'll find your way into product if it's meant to be.",
    youtubeId: "4ZLUXW06jbg",
    spotifyUrl: "https://open.spotify.com/episode/7jKcv6eBAXTtN5z7hLAawe",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-is-product-management-evolving-or/id1784108281?i=1000699663079",
    topic: "career",
    topics: ["Future of PM", "Career Philosophy", "Startup Culture", "Problem Space", "Generalist Skills", "No Degree Path"],
    duration: "60 min",
    publishedAt: "2025-01-29",
    takeaways: [
      "Intense curiosity is the most important trait for product managers—lean into it",
      "Product management looks drastically different before Series D vs after—know the difference",
      "Your job is to add value to the business—figure out how to do that, whatever it takes",
      "Master adaptive communication—it's not what you say, it's what they hear",
      "Stay in the problem space far longer than you're comfortable with before jumping to solutions",
      "Product management may not exist as a title in 10 years, but product thinking always will",
      "Consider going after another career path first—use product thinking foundations in any role",
      "Product management is a role, not a career path—there's a ceiling, and that's okay",
      "The 'figure it out' mindset separates great PMs from good ones",
      "When evaluating startups, ask: would they still have a business without the technology?"
    ],
    resourcesMentioned: [
      { title: "Generalist World Community", url: "https://www.generalist.world" },
      { title: "Little Otter Health", url: "https://www.littleotterhealth.com" },
      { title: "The Product Pivot Podcast on YouTube", url: "https://www.youtube.com/@TheProductPivot" }
    ],
    keywords: ["future of product management", "PM career path", "startup PM", "generalist", "problem space", "no degree PM", "entrepreneurial PM", "product thinking", "adaptive communication", "Little Otter"]
  },
  {
    id: "7",
    slug: "from-newsrooms-to-roadmaps",
    title: "From Newsrooms to Roadmaps: Olympia's Journey",
    episodeNumber: "S1E7",
    guest: {
      name: "Olympia Bardis",
      role: "Senior Product Manager",
      company: "CNBC",
      location: "New York, NY",
      website: "https://www.cnbc.com",
      industry: "Media & Finance",
      bio: "Olympia Bardis is a Senior Product Manager at CNBC, where she builds products for retail investors. With a journalism degree and dreams of being an on-air reporter, Olympia spent five and a half years in legacy media at Fox News before pivoting to product management. She credits Mel Robbins' 5 Second Rule for giving her the courage to advocate for herself and make the leap. A native New Yorker with a passion for storytelling, she believes the 'gift of yap' is one of the most underrated PM skills.",
      linkedin: "https://www.linkedin.com/in/olympiabardis/"
    },
    description: "Olympia shares her journey from journalism school to building products for investors at CNBC, and why storytelling is a PM superpower.",
    longDescription: "In this episode, hosts Santi and Meagan chat with Olympia Bardis, Senior Product Manager at CNBC, about her unconventional pivot from journalism to product management.\n\nOlympia shares how she graduated from journalism school wanting to be an on-air reporter, quickly realized it wasn't for her, and spent five and a half years figuring out her next move. With encouragement from an IT friend and inspiration from Mel Robbins' 5 Second Rule, she hustled her way into a hybrid content/product role at Fox before transitioning to CNBC.\n\nThe conversation covers the power of self-advocacy, treating yourself as a product, embracing rejection as redirection, and why the 'gift of yap' (storytelling) is crucial for product managers. Olympia also shares her hot take on whether the PM industry's trend toward hyper-specialization helps or hinders the profession.",
    youtubeId: "pUYPr4m22g4",
    spotifyUrl: "https://open.spotify.com/episode/6VNFMBEiE1IvAYv2tErSE7",
    appleUrl: "https://podcasts.apple.com/sk/podcast/from-newsrooms-to-roadmaps-olympias-journey/id1784108281?i=1000700798306",
    topic: "career",
    topics: ["Journalism to PM", "Self-Advocacy", "Storytelling", "Career Pivot", "Media Industry", "Rejection & Resilience"],
    duration: "44 min",
    publishedAt: "2025-02-12",
    takeaways: [
      "You are your own best advocate—keep ringing the bell about your career goals",
      "It's okay to fall out of love with things and pivot—that's how you grow",
      "Treat yourself as a product and iterate on your skills and approach",
      "You know more than you think—trust yourself and have conviction in your ideas",
      "Every rejection is a redirection and a great learning moment",
      "Take breaks when needed to sharpen skills, network, and reflect",
      "Storytelling is a crucial PM skill—the 'gift of yap' transfers directly from journalism",
      "Be flexible, open-minded, and adaptable—PMs are essentially contortionists",
      "Honor the bliss of the learning curve—all novices start somewhere",
      "If you help one person with your content, you did your job"
    ],
    resourcesMentioned: [
      { title: "Contagious: Why Things Catch On by Jonah Berger", url: "https://jonahberger.com/books/contagious/" },
      { title: "Measure What Matters by John Doerr", url: "https://www.whatmatters.com/the-book" },
      { title: "The 5 Second Rule by Mel Robbins", url: "https://melrobbins.com/the-5-second-rule/" },
      { title: "The Product Pivot Podcast on YouTube", url: "https://www.youtube.com/@TheProductPivot" }
    ],
    keywords: ["journalism to PM", "CNBC product manager", "career pivot", "self-advocacy", "storytelling", "media industry PM", "rejection", "Mel Robbins", "transferable skills", "retail investors"]
  },
  {
    id: "8",
    slug: "fractional-pm-unpacked",
    title: "Fractional PM Unpacked",
    episodeNumber: "S1E8",
    guest: {
      name: "Trevor Acy",
      role: "Fractional Product Leader",
      company: "Delta Product Group",
      location: "Mississippi",
      website: "https://www.linkedin.com/in/trevoracy/",
      industry: "Consulting & Fractional PM",
      bio: "Trevor Acy is a fractional product leader offering part-time product management, coaching, and training for business leaders. Previously a director of marketing in Nashville, Trevor pivoted to product after reading 'Inspired' and attending an SVPG workshop—even taking a demotion to make the switch. He moved home to Mississippi to help build the tech and startup ecosystem, working with nonprofits like The Bean Path and the Mississippi Coding Academy to spread product thinking across the state.",
      linkedin: "https://www.linkedin.com/in/trevoracy/"
    },
    description: "Trevor unpacks fractional product management, how he pivoted from marketing, and his mission to build Mississippi's tech ecosystem.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Trevor Acy, a fractional product leader at Delta Product Group, to explore the world of fractional product management and his journey from marketing director to PM.\n\nTrevor shares how reading 'Inspired' and attending an SVPG workshop transformed his thinking—he told his CTO, 'I'm tired of telling people our product is good. I want to make our product better.' He spent a year applying product principles in his marketing role before taking a demotion to become an IC product manager.\n\nThe conversation covers practical advice for aspiring PMs (just get the reps in), the benefits of fractional work for companies, why you should do unscalable things for as long as possible, and Trevor's passion project: building Mississippi's tech and startup ecosystem through education and mentorship.",
    youtubeId: "EBVblJFDbUQ",
    spotifyUrl: "https://open.spotify.com/episode/1XVDKaegavbjGnB4ZzUQFB",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-fractional-pm-unpacked/id1784108281?i=1000701729849",
    topic: "career",
    topics: ["Fractional PM", "Marketing to PM", "Startup Ecosystem", "Coaching & Training", "Career Transition", "Community Building"],
    duration: "60 min",
    publishedAt: "2025-02-26",
    takeaways: [
      "Apply product principles in your current role before transitioning—treat your projects as products",
      "Getting the reps in practicing the discipline is what makes you a better PM",
      "You can still think product-first even if your company is a feature factory",
      "Be okay not knowing and being an amateur again—asking dumb questions is a PM superpower",
      "Sneak in customer-centered work alongside feature requests, then show the results",
      "Do unscalable things for as long as possible—you'll learn where the real problems are",
      "Great PMs hold strong opinions while being totally open to counter information",
      "Fractional work opportunities come from people you know, not cold outreach",
      "Get comfortable promoting yourself—it doesn't come naturally but it's essential",
      "Find existing bright spots in your community and offer to help—opportunities follow"
    ],
    resourcesMentioned: [
      { title: "Inspired by Marty Cagan", url: "https://www.svpg.com/inspired-how-to-create-products-customers-love/" },
      { title: "Silicon Valley Product Group (SVPG)", url: "https://www.svpg.com" },
      { title: "The Bean Path (Jackson, MS)", url: "https://thebeanpath.org" },
      { title: "Mississippi Coding Academy", url: "https://mscoding.org" },
      { title: "The Product Pivot Podcast on YouTube", url: "https://www.youtube.com/@TheProductPivot" }
    ],
    keywords: ["fractional product manager", "marketing to PM", "SVPG", "Inspired", "Mississippi tech", "product coaching", "startup ecosystem", "Delta Product Group", "career transition", "community building"]
  },
  {
    id: "9",
    slug: "season-two-kickoff",
    title: "Season Two Kickoff and More!",
    episodeNumber: "S2E1",
    guest: {
      name: "Meagan Glenn & Santiana Brace",
      role: "Your Hosts",
      company: "The Product Pivot",
      location: "Remote",
      website: "https://www.youtube.com/@TheProductPivot",
      industry: "Product Management",
      bio: "In this special hosts-only episode, Meagan and Santi recap Season 1, share personal updates (Meagan went fractional, Santi moved to ProdOps), tease Season 2 guests, and announce Prodfolio—their new portfolio platform for PMs. They also share community-submitted product tips and call for Season 3 guest suggestions.",
      linkedin: "https://www.linkedin.com/company/the-product-pivot/"
    },
    description: "Hosts Meagan and Santi recap Season 1, share updates, tease Season 2 guests, and announce their new project: Prodfolio.",
    longDescription: "In this special hosts-only episode, Meagan and Santi kick off Season 2 by reflecting on the incredible journey of Season 1—over 1,000 views and even being recognized in public!\n\nThey share personal career updates: Meagan pivoted to fractional product management after a layoff, while Santi transitioned into a Product Operations role. The hosts also announce Prodfolio, their passion project to help aspiring PMs build credibility through portfolio documentation.\n\nThe episode features community-submitted product tips, teasers for Season 2 guests (including a product recruiter, AI PM expert, and Big Tech PM), and a call for Season 3 suggestions. A behind-the-scenes look at the humans behind The Product Pivot.",
    youtubeId: "MqNuW8qXzmU",
    spotifyUrl: "https://open.spotify.com/episode/0s8UN6C159QMczcJcarJfi",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-season-2-kickoff-more/id1784108281?i=1000724599598",
    topic: "career",
    topics: ["Season Recap", "Hosts Update", "Prodfolio Announcement", "Community Tips", "Season 2 Preview"],
    duration: "50 min",
    publishedAt: "2025-03-12",
    takeaways: [
      "Product people don't come from product backgrounds—that's a universal truth from Season 1",
      "Transferable skills are the heart of the PM pivot journey",
      "Build like a dreamer, think like a CFO, test like a skeptic",
      "If you always argue from the customer's perspective, you'll never lose an argument",
      "Build something—anything—and iterate with user feedback",
      "What separates senior PMs isn't just experience, it's mindset",
      "Understand not just your users, but your team and organizational dynamics",
      "The PM role is whatever it takes to get the product launch over the line",
      "If your content helps one person, you did your job",
      "Treat yourself as a product and iterate"
    ],
    resourcesMentioned: [
      { title: "Prodfolio - PM Portfolio Platform", url: "https://prodfolio.io" },
      { title: "The Product Pivot Season 1", url: "https://www.youtube.com/@TheProductPivot" },
      { title: "The Product Pivot Podcast on YouTube", url: "https://www.youtube.com/@TheProductPivot" }
    ],
    keywords: ["season recap", "hosts episode", "Prodfolio", "PM portfolio", "product operations", "fractional PM", "season two", "community tips", "career update", "behind the scenes"]
  }
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find(ep => ep.slug === slug);
}

export function getRelatedEpisodes(currentSlug: string, limit: number = 2): Episode[] {
  return episodes.filter(ep => ep.slug !== currentSlug).slice(0, limit);
}
