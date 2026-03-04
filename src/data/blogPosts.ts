export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "coming-soon",
    title: "Something's Brewing",
    excerpt: "We're working on thoughtful, practical content for product managers at every stage. Check back soon.",
    date: "2026-03-04",
    readTime: "1 min read",
    category: "PM Advice",
    tags: ["Product Management", "Portfolios"],
    content: `
<p>We're putting together guides, tips, and real talk for product managers — whether you're building your first portfolio or refining one you've had for years.</p>

<p>Check back soon. In the meantime, <a href="/quiz">take the quiz</a> to see if you need a PM portfolio.</p>
    `,
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
