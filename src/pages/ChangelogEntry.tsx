import { useParams, Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  getChangelogEntry,
  sortedChangelogEntries,
} from "@/data/changelog";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NotFound from "./NotFound";

const categoryColors: Record<string, string> = {
  New: "bg-[#f0eef5] text-[#6b4fbb] border-[#ddd6f3]",
  Improved: "bg-[#edf2ff] text-[#4060b0] border-[#d0ddf5]",
  Fixed: "bg-[#ecf7ed] text-[#3a8a40] border-[#cce8cd]",
};

const ChangelogEntry = () => {
  const { slug } = useParams<{ slug: string }>();
  const entry = getChangelogEntry(slug ?? "");

  const currentIndex = sortedChangelogEntries.findIndex(
    (e) => e.slug === slug
  );
  const prevEntry =
    currentIndex > 0 ? sortedChangelogEntries[currentIndex - 1] : null;
  const nextEntry =
    currentIndex < sortedChangelogEntries.length - 1
      ? sortedChangelogEntries[currentIndex + 1]
      : null;

  useSEO(
    entry
      ? {
          title: `${entry.title} | Prodfolio Changelog`,
          description: entry.excerpt,
          canonical: `https://prodfolio.io/changelog/${entry.slug}`,
          ogType: "article",
          structuredData: {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: entry.title,
            description: entry.excerpt,
            datePublished: entry.date,
            dateModified: entry.date,
            articleSection: entry.categories[0],
            keywords: entry.tags.join(", "),
            url: `https://prodfolio.io/changelog/${entry.slug}`,
            publisher: {
              "@type": "Organization",
              name: "Prodfolio",
              url: "https://prodfolio.io",
            },
            about: {
              "@type": "SoftwareApplication",
              name: "Prodfolio",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://prodfolio.io",
              ...(entry.version ? { softwareVersion: entry.version } : {}),
            },
          },
          breadcrumbs: [
            { name: "Home", url: "https://prodfolio.io" },
            { name: "Changelog", url: "https://prodfolio.io/changelog" },
            {
              name: entry.title,
              url: `https://prodfolio.io/changelog/${entry.slug}`,
            },
          ],
        }
      : {
          title: "Update Not Found | Prodfolio Changelog",
          description: "This changelog entry could not be found.",
          noindex: true,
        }
  );

  if (!entry) return <NotFound />;

  return (
    <div className="min-h-screen bg-white" id="main-content" role="main">
      <Navbar />

      <article className="pt-28 pb-20 px-4">
        <div className="max-w-[680px] mx-auto">
          {/* Back link */}
          <Link
            to="/changelog"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#1a1a2e] text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All updates
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {entry.categories.map((cat) => (
                <span
                  key={cat}
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${
                    categoryColors[cat] ??
                    "bg-gray-100 text-gray-600 border-gray-200"
                  }`}
                >
                  {cat}
                </span>
              ))}
              {entry.version && (
                <span className="text-xs font-mono text-[#888] ml-1">
                  v{entry.version}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-[2.75rem] font-heading font-bold text-[#1a1a2e] mb-5 leading-[1.15]">
              {entry.title}
            </h1>
            <p className="text-lg text-[#6b6b7b] leading-relaxed mb-5">
              {entry.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-[#aaa] border-t border-[#eee] pt-5">
              <time dateTime={entry.date}>
                {format(new Date(entry.date), "MMMM d, yyyy")}
              </time>
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
              prose-code:text-[#6b4fbb] prose-code:bg-[#f5f4f7] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.9em] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-blockquote:border-l-4 prose-blockquote:border-[#6b4fbb]/30 prose-blockquote:bg-[#f9f8fc] prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:text-[#5a5a6e] prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: entry.content }}
          />

          {/* Tags */}
          {entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#eee]">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-[#f5f4f7] text-[#777] border border-[#eee]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Prev / Next navigation */}
          {(prevEntry || nextEntry) && (
            <nav
              className="mt-12 grid sm:grid-cols-2 gap-4"
              aria-label="Changelog navigation"
            >
              {prevEntry ? (
                <Link
                  to={`/changelog/${prevEntry.slug}`}
                  className="bg-[#f9f9fb] border border-[#eee] rounded-xl p-5 group hover:border-[#6b4fbb]/30 transition-all"
                >
                  <span className="flex items-center gap-1 text-xs text-[#aaa] mb-2">
                    <ArrowLeft className="w-3 h-3" /> Newer
                  </span>
                  <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#6b4fbb] transition-colors line-clamp-2">
                    {prevEntry.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextEntry && (
                <Link
                  to={`/changelog/${nextEntry.slug}`}
                  className="bg-[#f9f9fb] border border-[#eee] rounded-xl p-5 text-right group hover:border-[#6b4fbb]/30 transition-all"
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-[#aaa] mb-2">
                    Older <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#6b4fbb] transition-colors line-clamp-2">
                    {nextEntry.title}
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
            <a href="https://app.prodfolio.io/sign-up">
              Start Your Portfolio Free
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChangelogEntry;
