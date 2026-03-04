import { useParams, Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getBlogPost, sortedBlogPosts } from "@/data/blogPosts";
import { format } from "date-fns";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import NotFound from "./NotFound";

const categoryColors: Record<string, string> = {
  "Portfolio Tips": "bg-[#f0eef5] text-[#6b4fbb] border-[#ddd6f3]",
  "Job Search": "bg-[#fff0ee] text-[#c05640] border-[#f5d5cf]",
  "Career Tips": "bg-[#ecf7ed] text-[#3a8a40] border-[#cce8cd]",
  "PM Advice": "bg-[#edf2ff] text-[#4060b0] border-[#d0ddf5]",
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
    <div className="min-h-screen bg-white" id="main-content" role="main">
      <Navbar />

      <article className="pt-28 pb-20 px-4">
        <div className="max-w-[680px] mx-auto">

          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#1a1a2e] text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>

          {/* Header */}
          <header className="mb-12">
            <span
              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}
            >
              {post.category}
            </span>
            <h1 className="text-3xl md:text-[2.75rem] font-heading font-bold text-[#1a1a2e] mb-5 leading-[1.15]">
              {post.title}
            </h1>
            <p className="text-lg text-[#6b6b7b] leading-relaxed mb-5">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-[#aaa] border-t border-[#eee] pt-5">
              <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-[#1a1a2e]
              prose-h2:text-[1.5rem] prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-bold
              prose-h3:text-[1.2rem] prose-h3:mt-10 prose-h3:mb-3 prose-h3:font-semibold
              prose-p:text-[#3d3d4e] prose-p:leading-[1.85] prose-p:mb-5
              prose-li:text-[#3d3d4e] prose-li:leading-[1.75]
              prose-strong:text-[#1a1a2e] prose-strong:font-semibold
              prose-em:text-[#555]
              prose-a:text-[#6b4fbb] prose-a:no-underline hover:prose-a:underline
              prose-ol:text-[#3d3d4e] prose-ul:text-[#3d3d4e]
              prose-ul:space-y-1.5 prose-ol:space-y-1.5
              prose-blockquote:border-l-4 prose-blockquote:border-[#6b4fbb]/30 prose-blockquote:bg-[#f9f8fc] prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:text-[#5a5a6e] prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Mid-article CTA */}
          <div className="mt-12 mb-2 bg-[#6b4fbb] rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-1">
              <p className="text-white font-semibold text-base">Not sure where to start with your portfolio?</p>
              <p className="text-white/60 text-sm mt-1.5">Take our 3-minute quiz and get personalized recommendations.</p>
            </div>
            <Link to="/quiz" className="px-6 py-3 bg-white text-[#1a1a2e] font-semibold text-sm rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap">
              Take the Quiz
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#eee]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-[#f5f4f7] text-[#777] border border-[#eee]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Prev / Next navigation */}
          {(prevPost || nextPost) && (
            <nav className="mt-12 grid sm:grid-cols-2 gap-4" aria-label="Post navigation">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="bg-[#f9f9fb] border border-[#eee] rounded-xl p-5 group hover:border-[#6b4fbb]/30 transition-all"
                >
                  <span className="flex items-center gap-1 text-xs text-[#aaa] mb-2">
                    <ArrowLeft className="w-3 h-3" /> Previous
                  </span>
                  <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#6b4fbb] transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="bg-[#f9f9fb] border border-[#eee] rounded-xl p-5 text-right group hover:border-[#6b4fbb]/30 transition-all"
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-[#aaa] mb-2">
                    Next <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#6b4fbb] transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </article>

      {/* CTA — matches site-wide pattern */}
      <section className="pb-12 px-4 cta-glow-section">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-2">
            See how fast it really is
          </h2>
          <p className="text-[#6b6b7b] mb-6 max-w-md mx-auto">
            Your portfolio could be live in under an hour.
          </p>
          <Button
            asChild
            className="px-8 py-5 h-auto text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl"
          >
            <a href="https://app.prodfolio.io/sign-up">Start Your Portfolio Free</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
