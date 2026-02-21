import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sortedBlogPosts } from "@/data/blogPosts";
import { format } from "date-fns";
import { Clock, ArrowRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Portfolio Tips": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Job Search": "bg-coral/20 text-coral-light border-coral/30",
  "Career Tips": "bg-green-500/20 text-green-300 border-green-500/30",
  "PM Advice": "bg-blue-500/20 text-blue-300 border-blue-500/30",
};

const Blog = () => {
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
  });

  const [featured, ...rest] = sortedBlogPosts;

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
            PM Career Advice
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Practical guides on portfolios, case studies, job searching, and breaking into product management.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section
        ref={postsAnimation.ref as React.RefObject<HTMLElement>}
        className={`pb-20 px-4 ${postsAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1100px] mx-auto">

          {/* Featured post */}
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
                  <span className="text-white/40 text-xs">Featured</span>
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
