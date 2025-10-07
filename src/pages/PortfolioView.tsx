import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PortfolioRenderer } from "@/components/portfolio/PortfolioRenderer";
import { useSEO } from "@/hooks/useSEO";

interface PortfolioViewProps {
  isDemoPreview?: boolean;
  demoData?: any;
}

export default function PortfolioView({ isDemoPreview = false, demoData }: PortfolioViewProps) {
  const { slug = "demo" } = useParams<{ slug: string }>();
  const [hasBetaBanner, setHasBetaBanner] = useState(true);

  // Handle beta banner body class
  useEffect(() => {
    if (hasBetaBanner) {
      document.body.classList.add('has-beta-banner');
    } else {
      document.body.classList.remove('has-beta-banner');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('has-beta-banner');
    };
  }, [hasBetaBanner]);

  function safeParse(json?: string | null) {
    if (!json) return undefined;
    try { 
      return JSON.parse(json); 
    } catch (e) { 
      return undefined;
    }
  }

  // Use demo data if provided (for demo preview mode)
  if (isDemoPreview && demoData) {
    return (
      <div className="portfolio-page">
        <PortfolioRenderer 
          data={demoData} 
          isDemoPreview={true} 
          onBetaBannerDismiss={() => setHasBetaBanner(false)}
        />
      </div>
    );
  }

  // Try to load published data first
  const publishedKey = `publishedPortfolio-${slug}`;
  const published = safeParse(localStorage.getItem(publishedKey));

  // Use published data if available, otherwise create fallback
  let data = published;
  
  if (!data) {
    // For portfolios with no published data, show placeholder
    data = {
      firstName: "Portfolio",
      lastName: "Not Found",
      summary: "This portfolio hasn't been published yet or the link is invalid.",
      skills: [],
      tools: [],
      caseStudies: [],
      personalProject: { title: "", description: "", role: "", link: "", tags: [] }
    };
  }

  // Dynamic SEO based on portfolio data
  useSEO({
    title: data ? `${data.firstName} ${data.lastName} - Product Manager Portfolio | Prodfolio` : "Portfolio | Prodfolio",
    description: data?.summary || "View this product manager's portfolio showcasing their PM thinking, case studies, and impact.",
    ogTitle: data ? `${data.firstName} ${data.lastName} - Product Manager Portfolio` : "Product Manager Portfolio",
    ogDescription: data?.summary || "Showcasing PM thinking and impact through detailed case studies.",
    canonical: `https://lovable.app/p/${slug}`,
    structuredData: data ? {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": `${data.firstName} ${data.lastName}`,
      "jobTitle": "Product Manager",
      "description": data.summary,
      "url": `https://lovable.app/p/${slug}`,
      "sameAs": data.linkedinProfile ? [data.linkedinProfile] : []
    } : undefined
  });

  // Loading state for published portfolios
  if (!data || (!published && !isDemoPreview)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the portfolio you're looking for. It may not be published yet or the link is invalid.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-page">
      <PortfolioRenderer 
        data={data} 
        onBetaBannerDismiss={() => setHasBetaBanner(false)}
      />
    </div>
  );
}