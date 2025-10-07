import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetricBadge from "@/components/MetricBadge";
import { supabase } from "@/integrations/supabase/client";
import { useSEO } from "@/hooks/useSEO";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  slug: string;
  content?: string;
  oneLiner?: string;
  metrics?: Array<{
    text: string;
    type: 'positive' | 'negative' | 'neutral';
  }>;
}

interface Portfolio {
  id: string;
  title: string;
  slug: string;
  case_studies: CaseStudy[];
  tldr: string;
  contact_email?: string;
  contact_linkedin?: string;
  resume_url?: string;
}

export default function CaseStudyView() {
  const { slug: portfolioSlug, caseStudySlug } = useParams<{ 
    slug: string; 
    caseStudySlug: string; 
  }>();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Dynamic SEO for case study
  useSEO({
    title: caseStudy && portfolio ? `${caseStudy.title} - ${portfolio.title} | Case Study` : "Case Study | Prodfolio",
    description: caseStudy?.oneLiner || caseStudy?.description || "View this detailed product management case study showcasing PM thinking and impact.",
    ogTitle: caseStudy ? `${caseStudy.title} - Product Management Case Study` : "Product Management Case Study",
    ogDescription: caseStudy?.oneLiner || caseStudy?.description || "View this detailed product management case study showcasing PM thinking and impact.",
    ogType: "article",
    canonical: `https://lovable.app/p/${portfolioSlug}/case-study/${caseStudySlug}`,
    noindex: notFound,
    structuredData: caseStudy && portfolio ? {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": caseStudy.title,
      "description": caseStudy.oneLiner || caseStudy.description,
      "author": {
        "@type": "Person",
        "name": portfolio.title
      },
      "url": `https://lovable.app/p/${portfolioSlug}/case-study/${caseStudySlug}`,
      "mainEntityOfPage": `https://lovable.app/p/${portfolioSlug}/case-study/${caseStudySlug}`,
      "genre": "Product Management",
      "keywords": "product management, case study, PM thinking, product strategy"
    } : undefined
  });

  useEffect(() => {
    const loadCaseStudy = async () => {
      if (!portfolioSlug || !caseStudySlug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        // Add timeout to prevent infinite loading
        const timeoutId = setTimeout(() => {
          setNotFound(true);
          setLoading(false);
        }, 10000);

        // First try to load from database with better error handling
        const { data: portfolioData, error } = await supabase
          .from('portfolios')
          .select('*')
          .eq('slug', portfolioSlug)
          .eq('is_published', true)
          .maybeSingle(); // Use maybeSingle to handle no results gracefully
        
        clearTimeout(timeoutId);

        if (error) {
          throw error;
        }

        if (!portfolioData) {
          // Fallback to localStorage for backward compatibility
          
          // Fallback to localStorage for backward compatibility
          const publishedKey = `publishedPortfolio-${portfolioSlug}`;
          const published = localStorage.getItem(publishedKey);
          
          if (published) {
            try {
              const portfolioData = JSON.parse(published);
              
              // Find the case study by slug
              const foundCaseStudy = portfolioData.caseStudies?.find((cs: any) => 
                cs.slug === caseStudySlug || cs.id === caseStudySlug
              );

              if (foundCaseStudy) {
                setPortfolio({
                  id: 'local',
                  title: `${portfolioData.firstName} ${portfolioData.lastName}`,
                  slug: portfolioSlug,
                  case_studies: portfolioData.caseStudies || [],
                  tldr: portfolioData.summary || '',
                  contact_email: portfolioData.contactEmail,
                  contact_linkedin: portfolioData.linkedinProfile,
                  resume_url: portfolioData.resumeUrl
                });
                setCaseStudy(foundCaseStudy);
              } else {
                setNotFound(true);
              }
            } catch (parseError) {
              setNotFound(true);
            }
          } else {
            setNotFound(true);
          }
        } else {
          // Load from database
          
          // Load from database - safely parse JSON with enhanced error handling
          let caseStudies: CaseStudy[] = [];
          try {
            const rawCaseStudies = portfolioData.case_studies;
            if (Array.isArray(rawCaseStudies)) {
              // Type guard to check if items have the required CaseStudy properties
              caseStudies = (rawCaseStudies as unknown as any[]).filter((cs: any) => 
                cs && 
                typeof cs === 'object' && 
                typeof cs.id === 'string' && 
                typeof cs.title === 'string' &&
                typeof cs.description === 'string'
              ) as CaseStudy[];
            } else {
              // Handle non-array case studies
            }
          } catch (e) {
            // Handle parsing errors silently
          }
          
          const foundCaseStudy = caseStudies.find((cs: CaseStudy) => 
            cs.slug === caseStudySlug || cs.id === caseStudySlug
          );

          if (foundCaseStudy) {
            setPortfolio({
              id: portfolioData.id,
              title: portfolioData.title,
              slug: portfolioData.slug,
              case_studies: caseStudies,
              tldr: portfolioData.tldr,
              contact_email: portfolioData.contact_email,
              contact_linkedin: portfolioData.contact_linkedin,
              resume_url: portfolioData.resume_url
            });
            setCaseStudy(foundCaseStudy);
          } else {
            setNotFound(true);
          }
        }
      } catch (error) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudy();
  }, [portfolioSlug, caseStudySlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (notFound || !caseStudy || !portfolio) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the case study you're looking for. It may have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => navigate(`/p/${portfolioSlug}`)}
              className="bg-primary text-white hover:bg-primary/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
            >
              Go Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx} className="text-2xl font-semibold mt-8 mb-4 text-gray-900">{paragraph.substring(3)}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={idx} className="text-xl font-semibold mt-6 mb-3 text-gray-900">{paragraph.substring(4)}</h3>;
      } else if (paragraph.startsWith('- ')) {
        return (
          <ul key={idx} className="list-disc pl-6 mb-6 space-y-2">
            {paragraph.split('\n').map((item, itemIdx) => (
              <li key={itemIdx} className="text-gray-700">{item.substring(2)}</li>
            ))}
          </ul>
        );
      } else if (/^\d+\./.test(paragraph)) {
        return (
          <ol key={idx} className="list-decimal pl-6 mb-6 space-y-2">
            {paragraph.split('\n').map((item, itemIdx) => {
              const match = item.match(/^\d+\.\s(.+)/);
              return match ? <li key={itemIdx} className="text-gray-700">{match[1]}</li> : null;
            })}
          </ol>
        );
      } else {
        return <p key={idx} className="mb-6 text-gray-700 leading-relaxed">{paragraph}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(`/p/${portfolioSlug}`)}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {portfolio.title}
            </Button>
            <div className="flex items-center gap-3">
              {portfolio.contact_linkedin && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(portfolio.contact_linkedin!, '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              )}
              {portfolio.contact_email && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`mailto:${portfolio.contact_email}`, '_blank')}
                >
                  ✉️ Email
                </Button>
              )}
              {portfolio.resume_url && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(portfolio.resume_url!, '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Case study content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm border p-8">
          {/* Case study header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {caseStudy.title}
            </h1>
            
            {caseStudy.oneLiner && (
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {caseStudy.oneLiner}
              </p>
            )}

            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-6">
                {caseStudy.metrics.map((metric, index) => (
                  <MetricBadge key={index} type={metric.type}>
                    {metric.text}
                  </MetricBadge>
                ))}
              </div>
            )}
          </header>

          {/* Case study content */}
          <div className="prose prose-lg max-w-none">
            {caseStudy.content ? (
              renderContent(caseStudy.content)
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">
                  Detailed case study content coming soon.
                </p>
                <Button
                  onClick={() => navigate(`/p/${portfolioSlug}`)}
                  variant="outline"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Button>
              </div>
            )}
          </div>
        </article>

        {/* Footer with back to portfolio link */}
        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate(`/p/${portfolioSlug}`)}
            className="bg-primary text-white hover:bg-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            View More Work
          </Button>
        </div>
      </div>
    </div>
  );
}