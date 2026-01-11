import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getEpisodeBySlug, getRelatedEpisodes } from "@/data/episodes";
import {
  Play,
  Clock,
  Calendar,
  ChevronLeft,
  Linkedin,
  Share2,
  FileText,
  Youtube,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";
import meaganPhoto from "@/assets/meagan-photo.png";
import santianaPhoto from "@/assets/santiana-photo.png";

const EpisodePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showFullTranscript, setShowFullTranscript] = useState(false);
  const heroAnimation = useScrollAnimation();
  const transcriptAnimation = useScrollAnimation();

  const episode = slug ? getEpisodeBySlug(slug) : undefined;
  const relatedEpisodes = slug ? getRelatedEpisodes(slug, 2) : [];

  // SEO with episode-specific metadata
  useSEO({
    title: episode
      ? `${episode.title} with ${episode.guest.name} | The Product Pivot Podcast`
      : "Episode Not Found | The Product Pivot Podcast",
    description: episode?.longDescription || "Episode not found",
    canonical: `https://prodfolio.io/podcast/episodes/${slug}`,
    structuredData: episode ? {
      "@context": "https://schema.org",
      "@type": "PodcastEpisode",
      "name": episode.title,
      "description": episode.longDescription,
      "datePublished": episode.publishedAt,
      "duration": episode.duration,
      "url": `https://prodfolio.io/podcast/episodes/${slug}`,
      "partOfSeries": {
        "@type": "PodcastSeries",
        "name": "The Product Pivot",
        "url": "https://prodfolio.io/podcast"
      },
      "author": [
        { "@type": "Person", "name": "Meagan Glenn" },
        { "@type": "Person", "name": "Santiana Brace" }
      ],
      "guest": {
        "@type": "Person",
        "name": episode.guest.name,
        "jobTitle": episode.guest.role
      }
    } : undefined
  });

  if (!episode) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]">
        <Navbar />
        <div className="prodfolio-container py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Episode Not Found</h1>
          <p className="text-white/70 mb-8">The episode you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/podcast">← Back to Podcast</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(episode.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const topicLabels: Record<string, string> = {
    hiring: "Hiring & Recruiting",
    career: "Career Transitions",
    ai: "AI & Tech",
    leadership: "Leadership"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]">
      <Navbar />

      {/* Back Navigation */}
      <div className="prodfolio-container max-w-[1000px] mx-auto pt-6 px-4">
        <Link
          to="/podcast"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to all episodes
        </Link>
      </div>

      {/* Hero Section */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-8 pb-12 px-4 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1000px] mx-auto">
          {/* Topic Badge */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              {topicLabels[episode.topic]}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            {episode.title}
          </h1>

          {/* Guest Info */}
          <p className="text-xl text-primary mb-6">
            with {episode.guest.name}, {episode.guest.role} at {episode.guest.company}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {episode.duration}
            </span>
            {episode.guest.linkedin && (
              <a
                href={episode.guest.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect with {episode.guest.name.split(' ')[0]}
              </a>
            )}
          </div>

          {/* Video Player */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/50 mb-8">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${episode.youtubeId}`}
              title={episode.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Subscribe Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="https://www.youtube.com/@TheProductPivot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#FF0000] text-white rounded-lg text-sm font-medium hover:bg-[#FF0000]/90 transition-all"
            >
              <Youtube className="w-4 h-4" />
              Subscribe on YouTube
            </a>
            <a
              href="https://open.spotify.com/show/theproductpivot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white rounded-lg text-sm font-medium hover:bg-[#1DB954]/90 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all"
            >
              <Share2 className="w-4 h-4" />
              Share Episode
            </button>
          </div>

          {/* Description */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
            <h2 className="text-lg font-bold text-white mb-3">About this episode</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              {episode.longDescription}
            </p>

            {/* Highlights */}
            <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">
              In this episode
            </h3>
            <ul className="space-y-2">
              {episode.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80">
                  <Play className="w-4 h-4 text-primary flex-shrink-0 mt-1" fill="currentColor" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Hosts */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
            <p className="text-white/60 text-sm mb-4">Hosted by</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <img src={meaganPhoto} alt="Meagan Glenn" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold text-white">Meagan Glenn</p>
                  <a href="https://www.linkedin.com/in/meagan-glenn/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                    LinkedIn →
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={santianaPhoto} alt="Santiana Brace" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold text-white">Santiana Brace</p>
                  <a href="https://www.linkedin.com/in/santiana-brace/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transcript Section */}
      {episode.transcript && (
        <section
          ref={transcriptAnimation.ref as React.RefObject<HTMLElement>}
          className={`py-12 px-4 bg-white/5 ${transcriptAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="prodfolio-container max-w-[1000px] mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Episode Transcript
              </h2>
              <button
                onClick={() => setShowFullTranscript(!showFullTranscript)}
                className="flex items-center gap-2 text-primary text-sm font-medium hover:underline"
              >
                {showFullTranscript ? (
                  <>
                    Show less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read full transcript <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 ${!showFullTranscript ? 'max-h-96 overflow-hidden relative' : ''}`}>
              <div className="prose prose-invert max-w-none">
                {episode.transcript.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-white/80 leading-relaxed mb-4">
                    {paragraph.split(':').length > 1 ? (
                      <>
                        <strong className="text-primary">{paragraph.split(':')[0]}:</strong>
                        {paragraph.split(':').slice(1).join(':')}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>

              {!showFullTranscript && (
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#16213e] to-transparent" />
              )}
            </div>

            {!showFullTranscript && (
              <button
                onClick={() => setShowFullTranscript(true)}
                className="mt-4 w-full py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
              >
                Read Full Transcript
              </button>
            )}
          </div>
        </section>
      )}

      {/* Related Episodes */}
      {relatedEpisodes.length > 0 && (
        <section className="py-12 px-4">
          <div className="prodfolio-container max-w-[1000px] mx-auto">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              More Episodes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedEpisodes.map((ep) => (
                <Link
                  key={ep.id}
                  to={`/podcast/episodes/${ep.slug}`}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all group"
                >
                  <div className="aspect-video relative bg-black/50">
                    <img
                      src={`https://img.youtube.com/vi/${ep.youtubeId}/maxresdefault.jpg`}
                      alt={ep.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{ep.title}</h3>
                    <p className="text-primary text-sm">with {ep.guest.name}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/podcast">View All Episodes</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="prodfolio-container max-w-[800px] mx-auto">
          <div className="bg-gradient-to-r from-primary to-coral rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
              Ready to build your PM portfolio?
            </h2>
            <p className="text-white/80 mb-6">
              Like what you heard? Put it into practice with Prodfolio.
            </p>
            <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90 font-semibold">
              <a href="https://app.prodfolio.io/sign-up">
                Start Your Portfolio Free
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EpisodePage;
