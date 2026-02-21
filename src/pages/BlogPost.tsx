import { useParams, Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPost, sortedBlogPosts } from "@/data/blogPosts";
import { format } from "date-fns";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import NotFound from "./NotFound";

const categoryColors: Record<string, string> = {
  "Portfolio Tips": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Job Search": "bg-coral/20 text-coral-light border-coral/30",
  "Career Tips": "bg-green-500/20 text-green-300 border-green-500/30",
  "PM Advice": "bg-blue-500/20 text-blue-300 border-blue-500/30",
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug ?? "");

  const currentIndex = sortedBlogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? sortedBlogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < sortedBlogPosts.length - 1
      ? sortedBlogPosts[currentIndex + 1]
      : null;

  useSEO(
    post
      ? {
          title: `${post.title} | Prodfolio Blog`,
          description: post.excerpt,
          canonical: `https://prodfolio.io/blog/${post.slug}`,
          ogType: "article",
          structuredData: {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            publisher: {
              "@type": "Organization",
              name: "Prodfolio",
              url: "https://prodfolio.io",
            },
            url: `https://prodfolio.io/blog/${post.slug}`,
            keywords: post.tags.join(", "),
          },
        }
      : {
          title: "Post Not Found | Prodfolio Blog",
          description: "This blog post could not be found.",
          noindex: true,
        }
  );

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      <article className="pt-28 pb-20 px-4">
        <div className="prodfolio-container max-w-[760px] mx-auto">

          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span
              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${categoryColors[post.category] ?? "bg-white/10 text-white/70 border-white/20"}`}
            >
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-5">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50 border-t border-white/10 pt-5">
              <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-5
              prose-li:text-white/80
              prose-strong:text-white
              prose-a:text-purple-light prose-a:no-underline hover:prose-a:underline
              prose-ol:text-white/80 prose-ul:text-white/80
              prose-ul:space-y-1 prose-ol:space-y-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#9E85F9]/10 backdrop-blur-md rounded-2xl border border-[#9E85F9]/25 p-7 text-center">
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Ready to build a portfolio worth sharing?
            </h3>
            <p className="text-white/70 mb-5 text-sm">
              Prodfolio helps PMs present their work with the structure and clarity hiring managers actually want.
            </p>
            <a
              href="https://app.prodfolio.io/sign-up"
              className="inline-block px-7 py-3 bg-white text-[#100D22] font-semibold rounded-xl hover:bg-white/90 transition-colors text-sm"
            >
              Start for free
            </a>
          </div>

          {/* Prev / Next navigation */}
          {(prevPost || nextPost) && (
            <nav className="mt-12 grid sm:grid-cols-2 gap-4" aria-label="Post navigation">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="glass-card p-5 group hover:border-white/20 transition-all"
                >
                  <span className="flex items-center gap-1 text-xs text-white/40 mb-2">
                    <ArrowLeft className="w-3 h-3" /> Previous
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-purple-light transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="glass-card p-5 text-right group hover:border-white/20 transition-all"
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-white/40 mb-2">
                    Next <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-purple-light transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
