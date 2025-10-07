
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MetricBadge from "@/components/MetricBadge";
import { ArrowRight } from "lucide-react";

type MetricType = {
  text: string;
  type: 'positive' | 'negative' | 'neutral';
};

interface CaseStudyCardProps {
  title: string;
  description: string;
  oneLiner?: string;
  metrics?: MetricType[];
  className?: string;
  onClick?: () => void;
  showViewMore?: boolean;
  caseStudyId?: string;
  caseStudySlug?: string;
  portfolioSlug?: string;
  isDemoPreview?: boolean;
}

const CaseStudyCard = ({
  title,
  description,
  oneLiner,
  metrics = [],
  className = '',
  onClick,
  showViewMore = false,
  caseStudyId,
  caseStudySlug,
  portfolioSlug,
  isDemoPreview = false
}: CaseStudyCardProps) => {
  const location = useLocation();
  
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleViewMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Call onClick to trigger modal instead of navigation
    if (onClick) {
      onClick();
    } else if (caseStudySlug && portfolioSlug) {
      // Fallback to opening in new tab if no onClick handler
      window.open(`/p/${portfolioSlug}/case-study/${caseStudySlug}`, '_blank');
    }
  };

  return (
    <div 
      className={`bg-white border border-gray-200/60 rounded-lg shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer h-full ${caseStudySlug && portfolioSlug ? '' : 'cursor-default'} ${className}`}
      onClick={handleCardClick}
    >
      <div className={`${isDemoPreview ? 'p-3' : 'p-6'} h-full flex flex-col`}>
        <div className="flex-1">
          <h3 className={`${isDemoPreview ? 'text-sm mb-2' : 'text-lg mb-3'} font-bold text-gray-900`}>
            {title}
          </h3>
          <p className={`text-gray-700 ${isDemoPreview ? 'mb-2 text-xs' : 'mb-4 text-sm'} leading-relaxed`}>
            {oneLiner && oneLiner.trim() ? oneLiner : "One liner copy"}
          </p>
          {metrics.length > 0 && (
            <div className={`flex flex-wrap gap-1 ${isDemoPreview ? 'mb-2' : 'mb-4'}`}>
              {metrics.map((metric, index) => (
                <MetricBadge key={index} type={metric.type} isDemoPreview={isDemoPreview}>
                  {metric.text}
                </MetricBadge>
              ))}
            </div>
          )}
        </div>
        {showViewMore && (
          <div className="mt-auto pt-2">
            <Button 
              className={`bg-primary text-white hover:bg-primary/80 transition-all duration-300 font-medium w-full ${isDemoPreview ? 'px-2 py-1 text-xs' : 'px-4 py-2 text-sm'}`}
              onClick={handleViewMore}
            >
              View more <ArrowRight className={`ml-2 ${isDemoPreview ? 'h-3 w-3' : 'h-4 w-4'}`} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;
