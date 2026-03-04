import { useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sortedBlogPosts } from "@/data/blogPosts";
import { format } from "date-fns";
import { Clock, ArrowRight } from "lucide-react";

type CategoryFilter = "all" | "Portfolio Tips" | "Job Search" | "Career Tips" | "PM Advice";

const categoryFilters: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All Posts" },
  { value: "Portfolio Tips", label: "Portfolio Tips" },
  { value: "Job Search", label: "Job Search" },
  { value: "Career Tips", label: "Career Tips" },
  { value: "PM Advice", label: "PM Advice" },
];

const categoryColors: Record<string, string> = {
  "Portfolio Tips": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Job Search": "bg-coral/20 text-coral-light border-coral/30",
  "Career Tips": "bg-green-500/20 text-green-300 border-green-500/30",
  "PM Advice": "bg-blue-500/20 text-blue-300 border-blue-500/30",
};

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const heroAnimation = useScrollAnimation();
  const postsAnimation = useScrollAnimation();

  useSEO({
    title: "Blog | PM Career Advice & Portfolio Tips | Prodfolio",
    description:
      "Practical advice on building a product management portfolio, writing PM case studies, breaking into product management, and landing your next PM role.",
    canonical: "https://prodfolio.io/blog",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Prodfolio Blog",
      description:
        "Practical PM career advice, portfolio tips, and job search strategies.",
      url: "https://prodfolio.io/blog",
      publisher: {
        "@type": "Organization",
        name: "Prodfolio",
        url: "https://prodfolio.io",
      },
    },
    breadcrumbs: [
      { name: "Home", url: "https://prodfolio.io" },
      { name: "Blog", url: "https://prodfolio.io/blog" },
    ],
  });

  const filteredPosts = activeFilter === "all"
    ? sortedBlogPosts
    : sortedBlogPosts.filter((post) => post.category === activeFilter);

  const [featured, ...rest] = filteredPosts;

  return (
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-28 pb-12 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1100px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white">
            PM Career <span className="gradient-text">Advice</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Frameworks, guides, and honest takes on building a PM career.
          </p>
          <p className="text-sm text-white/40 mt-3 max-w-2xl mx-auto">
            The advice here reflects our team's experience and conversations with PMs and hiring managers. Every career path is different — tailor what you read to your own situation.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-8 px-4">
        <div className="prodfolio-container max-w-[1100px] mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categoryFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all text-sm ${
                  activeFilter === filter.value
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section
        ref={postsAnimation.ref as React.RefObject<HTMLElement>}
        className={`pb-20 px-4 ${postsAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1100px] mx-auto">

          {/* Featured post */}
          {featured && (
            <Link
              to={`/blog/${featured.slug}`}
              className="block glass-card p-7 mb-8 group hover:border-white/20 transition-all"
            >
              <div className="md:flex md:gap-8 md:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[featured.category] ?? "bg-white/10 text-white/70 border-white/20"}`}
                    >
                      {featured.category}
                    </span>
                    {activeFilter === "all" && (
                      <span className="text-white/40 text-xs">Featured</span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 group-hover:text-purple-light transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/50">
                    <span>{format(new Date(featured.date), "MMMM d, yyyy")}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex items-center mt-6 md:mt-0 flex-shrink-0">
                  <span className="flex items-center gap-2 text-purple-light font-semibold group-hover:gap-3 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Inline CTA */}
          <div className="mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold">Not sure which portfolio type fits you?</p>
              <p className="text-white/60 text-sm mt-1">Take our 3-minute quiz and get a personalized recommendation.</p>
            </div>
            <Link to="/quiz" className="px-6 py-3 bg-white text-navy font-semibold text-sm rounded-xl hover:bg-white/90 transition-colors whitespace-nowrap">
              Take the Free Quiz
            </Link>
          </div>

          {/* Rest of posts grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="glass-card p-6 flex flex-col group hover:border-white/20 transition-all"
              >
                <span
                  className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${categoryColors[post.category] ?? "bg-white/10 text-white/70 border-white/20"}`}
                >
                  {post.category}
                </span>
                <h2 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-purple-light transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-white/40 mt-auto">
                  <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
