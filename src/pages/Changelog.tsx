import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sortedChangelogEntries, type ChangelogCategory } from "@/data/changelog";
import { format } from "date-fns";
import { ArrowRight, Rss, Sparkles } from "lucide-react";

const RSS_FEED_URL = "https://prodfolio.io/changelog/rss.xml";

function useRssLinkTag() {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>(
      'link[rel="alternate"][type="application/rss+xml"]'
    );
    const created = !link;
    if (!link) {
      link = document.createElement("link");
      link.rel = "alternate";
      link.type = "application/rss+xml";
      link.title = "Prodfolio Changelog";
      document.head.appendChild(link);
    }
    link.href = RSS_FEED_URL;
    return () => {
      if (created && link?.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);
}

type CategoryFilter = "all" | ChangelogCategory;

const categoryLabels: Record<ChangelogCategory, string> = {
  New: "New",
  Improved: "Improved",
  Fixed: "Fixed",
};

// All possible filter chips, in display order. We only render ones with at least one entry.
const ALL_CATEGORIES: ChangelogCategory[] = ["New", "Improved", "Fixed"];

const categoryColors: Record<string, string> = {
  New: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Improved: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Fixed: "bg-green-500/20 text-green-300 border-green-500/30",
};

const Changelog = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const heroAnimation = useScrollAnimation();
  const listAnimation = useScrollAnimation();

  useRssLinkTag();

  useSEO({
    title: "Changelog | What's New in Prodfolio",
    description:
      "Every Prodfolio release: new features, improvements, integrations, and fixes. See what we've shipped and what's coming next.",
    canonical: "https://prodfolio.io/changelog",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Prodfolio Changelog",
      description:
        "Release notes and product updates for Prodfolio, the product portfolio tool for PMs.",
      url: "https://prodfolio.io/changelog",
      isPartOf: {
        "@type": "WebSite",
        name: "Prodfolio",
        url: "https://prodfolio.io",
      },
      about: {
        "@type": "SoftwareApplication",
        name: "Prodfolio",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://prodfolio.io",
      },
    },
    breadcrumbs: [
      { name: "Home", url: "https://prodfolio.io" },
      { name: "Changelog", url: "https://prodfolio.io/changelog" },
    ],
  });

  const filteredEntries =
    activeFilter === "all"
      ? sortedChangelogEntries
      : sortedChangelogEntries.filter((entry) =>
          entry.categories.includes(activeFilter)
        );

  // Only show filter chips for categories that actually exist on at least one entry.
  const availableCategories = ALL_CATEGORIES.filter((cat) =>
    sortedChangelogEntries.some((entry) => entry.categories.includes(cat))
  );
  const categoryFilters: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "All updates" },
    ...availableCategories.map((cat) => ({
      value: cat as CategoryFilter,
      label: categoryLabels[cat],
    })),
  ];

  // Group entries by "Month YYYY" preserving reverse-chronological order.
  const entriesByMonth = filteredEntries.reduce<
    { key: string; label: string; entries: typeof filteredEntries }[]
  >((acc, entry) => {
    const label = format(new Date(entry.date), "MMMM yyyy");
    const existing = acc.find((g) => g.key === label);
    if (existing) {
      existing.entries.push(entry);
    } else {
      acc.push({ key: label, label, entries: [entry] });
    }
    return acc;
  }, []);

  return (
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-28 pb-12 px-4 ${heroAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[1100px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            What's new
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white">
            Prodfolio <span className="gradient-text">Changelog</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Every meaningful ship — new features, improvements, fixes, and integrations.
          </p>
          <p className="text-sm text-white/40 mt-3 max-w-2xl mx-auto">
            Have a feature request? Submit it on our{" "}
            <a
              href="https://tally.so/r/XxJM8O"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70"
            >
              feedback board
            </a>
            .
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={RSS_FEED_URL}
              className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white/90 transition-colors border border-white/15 rounded-full px-3 py-1.5"
              aria-label="Subscribe to changelog via RSS"
            >
              <Rss className="w-3.5 h-3.5" />
              Subscribe via RSS
            </a>
          </div>
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

      {/* Entries */}
      <section
        ref={listAnimation.ref as React.RefObject<HTMLElement>}
        className={`pb-20 px-4 ${listAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="prodfolio-container max-w-[820px] mx-auto">
          {filteredEntries.length === 0 ? (
            <p className="text-center text-white/60 py-12">
              No updates in this category yet.
            </p>
          ) : (
            <div className="space-y-12">
              {entriesByMonth.map((group) => (
                <section key={group.key} aria-labelledby={`month-${group.key.replace(/\s+/g, "-").toLowerCase()}`}>
                  <div className="sticky top-20 z-10 -mx-4 px-4 py-3 mb-5 backdrop-blur-md bg-[#100D22]/70 border-b border-white/10">
                    <h2
                      id={`month-${group.key.replace(/\s+/g, "-").toLowerCase()}`}
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60"
                    >
                      {group.label}
                    </h2>
                  </div>
                  <ol className="space-y-6" aria-label={`Updates from ${group.label}`}>
                    {group.entries.map((entry) => (
                      <li key={entry.slug}>
                        <Link
                          to={`/changelog/${entry.slug}`}
                          className="block glass-card p-7 group hover:border-white/20 transition-all"
                        >
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            {entry.categories.map((cat) => (
                              <span
                                key={cat}
                                className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                                  categoryColors[cat] ??
                                  "bg-white/10 text-white/70 border-white/20"
                                }`}
                              >
                                {cat}
                              </span>
                            ))}
                            <time
                              dateTime={entry.date}
                              className="text-white/50 text-xs ml-1"
                            >
                              {format(new Date(entry.date), "MMMM d, yyyy")}
                            </time>
                            {entry.version && (
                              <span className="text-white/40 text-xs font-mono">
                                v{entry.version}
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-purple-light transition-colors">
                            {entry.title}
                          </h3>
                          <p className="text-white/70 leading-relaxed mb-4">
                            {entry.excerpt}
                          </p>
                          <span className="flex items-center gap-2 text-purple-light font-semibold text-sm group-hover:gap-3 transition-all">
                            Read full update <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Changelog;
