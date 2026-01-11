import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Youtube, Headphones, Users, Briefcase, Cpu, TrendingUp, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { episodes } from "@/data/episodes";
import meaganPhoto from "@/assets/meagan-photo.png";
import santianaPhoto from "@/assets/santiana-photo.png";

type TopicFilter = "all" | "hiring" | "career" | "ai" | "leadership";

const topicFilters: { value: TopicFilter; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All Episodes", icon: <Play className="w-4 h-4" /> },
  { value: "hiring", label: "Hiring & Recruiting", icon: <Users className="w-4 h-4" /> },
  { value: "career", label: "Career Transitions", icon: <Briefcase className="w-4 h-4" /> },
  { value: "ai", label: "AI & Tech", icon: <Cpu className="w-4 h-4" /> },
  { value: "leadership", label: "Leadership", icon: <TrendingUp className="w-4 h-4" /> }
];

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState<TopicFilter>("all");
  const heroAnimation = useScrollAnimation();
  const episodesAnimation = useScrollAnimation();
  const hostsAnimation = useScrollAnimation();

  useSEO({
    title: "The Product Pivot Podcast | PM Career Stories & Insights | Prodfolio",
    description: "Real conversations with product leaders about hiring, career growth, and the evolving product landscape. Subscribe to The Product Pivot podcast.",
    canonical: "https://prodfolio.io/podcast",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "PodcastSeries",
      "name": "The Product Pivot",
      "description": "Real conversations with product people about hiring and the product landscape today.",
      "url": "https://prodfolio.io/podcast",
      "author": [
        { "@type": "Person", "name": "Meagan Glenn" },
        { "@type": "Person", "name": "Santiana Brace" }
      ]
    }
  });

  const filteredEpisodes = activeFilter === "all"
    ? episodes
    : episodes.filter(ep => ep.topic === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]">
      <Navbar />

      {/* Hero Section - Podcast Branding */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-16 pb-12 px-4 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Podcast Info */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">A Prodfolio Podcast</p>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white leading-tight">
                The Product Pivot
              </h1>
              <p className="text-xl text-white/80 mb-6 max-w-xl leading-relaxed">
                Real conversations with product people about hiring, career growth, and the evolving product landscape.
              </p>

              {/* Subscribe Buttons */}
              <p className="text-white/60 text-sm mb-4">Subscribe on your favorite platform:</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <a
                  href="https://www.youtube.com/@TheProductPivot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-[#FF0000] text-white rounded-lg font-medium hover:bg-[#FF0000]/90 transition-all hover:scale-105"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
                <a
                  href="https://open.spotify.com/show/theproductpivot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-[#1DB954] text-white rounded-lg font-medium hover:bg-[#1DB954]/90 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Spotify
                </a>
                <a
                  href="https://podcasts.apple.com/podcast/the-product-pivot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-gradient-to-b from-[#F452FF] to-[#832BC1] text-white rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105"
                >
                  <Headphones className="w-5 h-5" />
                  Apple Podcasts
                </a>
              </div>
            </div>

            {/* Right - Podcast Logo/Branding */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-primary via-coral to-primary p-1">
                  <div className="w-full h-full rounded-3xl bg-[#1a1a2e] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl md:text-7xl mb-2">🎙️</div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">The Product</h2>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-coral">Pivot</h2>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-coral rounded-full animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full animate-pulse delay-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosts Section */}
      <section
        ref={hostsAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${hostsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-white/60 text-sm mb-6 text-center">Hosted by</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Host 1 */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/40">
                  <img
                    src={meaganPhoto}
                    alt="Meagan Glenn"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Meagan Glenn</h3>
                  <p className="text-white/60 text-sm">Co-founder, Prodfolio</p>
                  <a
                    href="https://www.linkedin.com/in/meagan-glenn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>

              <div className="hidden md:block text-white/20 text-2xl">&</div>

              {/* Host 2 */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/40">
                  <img
                    src={santianaPhoto}
                    alt="Santiana Brace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Santiana Brace</h3>
                  <p className="text-white/60 text-sm">Co-founder, Prodfolio</p>
                  <a
                    href="https://www.linkedin.com/in/santiana-brace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Filters */}
      <section className="py-8 px-4">
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {topicFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section
        ref={episodesAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${episodesAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            {activeFilter === "all" ? "All Episodes" : `${topicFilters.find(f => f.value === activeFilter)?.label} Episodes`}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => (
              <article
                key={episode.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all group"
              >
                {/* Video Thumbnail */}
                <Link to={`/podcast/episodes/${episode.slug}`} className="block">
                  <div className="aspect-video relative bg-black/50">
                    <img
                      src={`https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`}
                      alt={episode.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {episode.duration}
                    </div>
                    {episode.transcript && (
                      <div className="absolute bottom-3 left-3 bg-primary/90 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        Transcript
                      </div>
                    )}
                  </div>
                </Link>

                {/* Episode Info */}
                <div className="p-5">
                  <Link to={`/podcast/episodes/${episode.slug}`}>
                    <h3 className="text-lg font-heading font-bold text-white mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {episode.title}
                    </h3>
                  </Link>
                  <p className="text-primary text-sm font-medium mb-2">
                    with {episode.guest.name}
                  </p>
                  <p className="text-white/50 text-xs mb-3">
                    {episode.guest.role}, {episode.guest.company}
                  </p>
                  <p className="text-white/70 text-sm line-clamp-2 mb-4">
                    {episode.description}
                  </p>
                  <Link
                    to={`/podcast/episodes/${episode.slug}`}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Listen & Read Transcript →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredEpisodes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No episodes found for this topic yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Email Subscribe Banner */}
      <section className="py-12 px-4">
        <div className="prodfolio-container max-w-[800px] mx-auto">
          <div className="bg-gradient-to-r from-coral to-primary rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
              Subscribe to get notified of new episodes
            </h2>
            <p className="text-white/80 mb-6">
              Join product people getting insights delivered to their inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-5 py-3 rounded-lg bg-white text-navy placeholder:text-navy/50 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                type="submit"
                className="px-6 py-3 bg-navy text-white hover:bg-navy/90 font-semibold rounded-lg"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Watch More */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <Youtube className="w-12 h-12 text-[#FF0000] mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-white mb-3">Watch All Episodes</h3>
              <p className="text-white/70 mb-6">
                Explore our full library of conversations with product leaders on YouTube.
              </p>
              <Button asChild className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">
                <a href="https://www.youtube.com/@TheProductPivot" target="_blank" rel="noopener noreferrer">
                  View on YouTube
                </a>
              </Button>
            </div>

            {/* Be a Guest */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-12 h-12 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Share Your Story</h3>
              <p className="text-white/70 mb-6">
                Have insights to share with the PM community? We'd love to hear from you.
              </p>
              <Button asChild className="bg-coral hover:bg-coral/90 text-white">
                <a href="mailto:theproductpivot@gmail.com">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
