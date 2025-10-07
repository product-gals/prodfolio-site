import { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import { Linkedin, Download, Star, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";
import CaseStudyModal from "@/components/CaseStudyModal";
import Tag from "@/components/Tag";
import { ShareModal } from "@/components/ShareModal";
import TldrSection from "./components/TldrSection";

interface PortfolioRendererProps {
  data: {
    firstName: string;
    lastName: string;
    linkedinProfile?: string;
    contactEmail?: string;
    summary: string;
    personalProject?: {
      title?: string;
      description?: string;
      role?: string;
      link?: string;
      tags?: string[];
      show?: boolean;
    };
    skills: string[];
    tools: string[];
    caseStudies: Array<{
      id: string;
      title: string;
      description: string;
      oneLiner?: string;
      metrics?: Array<{
        text: string;
        type: 'positive' | 'negative' | 'neutral';
      }>;
    }>;
    resumeUrl?: string;
  };
  isDemoPreview?: boolean;
  isBuilderPreview?: boolean;
  onBetaBannerDismiss?: () => void;
}

export const PortfolioRenderer = memo(({ data, isDemoPreview = false, isBuilderPreview = false, onBetaBannerDismiss }: PortfolioRendererProps) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
  const isDemoPortfolio = location.pathname === '/demo-portfolio';
  const isPublished = location.pathname.startsWith('/p/');
  const slug = (location.pathname.match(/^\/p\/([^/]+)/)?.[1]) || null;
  const [showBeta, setShowBeta] = useState(false);

  const handleCaseStudyClick = (caseStudy: any) => {
    setSelectedCaseStudy(caseStudy);
    setIsCaseStudyModalOpen(true);
  };

  const closeCaseStudyModal = () => {
    setIsCaseStudyModalOpen(false);
    setSelectedCaseStudy(null);
  };
  
  // Mock loading for demo effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // Beta banner: first load only, dismissible
  useEffect(() => {
    if (!isPublished) return;
    const key = `betaBannerDismissed-${slug ?? 'global'}`;
    const dismissed = localStorage.getItem(key);
    if (!dismissed) setShowBeta(true);
  }, [isPublished, slug]);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  const showWatermark = true; // Show watermark for all portfolios in beta

  return (
    <div className="min-h-screen bg-gray-50 pb-12 relative">
      {/* Beta banner on published pages (first load only) */}
      {isPublished && showBeta && (
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2">
          <div className="prodfolio-container flex items-center justify-between">
            <span className="text-sm">beta: built on a prototype environment.</span>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => {
                const key = `betaBannerDismissed-${slug ?? 'global'}`;
                try { localStorage.setItem(key, '1'); } catch {}
                setShowBeta(false);
                onBetaBannerDismiss?.();
              }}
            >
              Dismiss
            </Button>
          </div>
        </div>
      )}

      
      {/* Demo Banner for static demo */}
      {isDemoPortfolio && !isDemoPreview && (
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3">
          <div className="prodfolio-container text-center">
            <div className="flex items-center justify-center gap-2">
              <Star className="h-5 w-5" />
              <span className="font-medium">This is a sample portfolio. Want to save or customize it? </span>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-white/20 border-white/40 text-white hover:bg-white/30 ml-2"
              >
                Sign up free
              </Button>
            </div>
          </div>
        </div>
      )}

      
      {/* Hero Section */}
      <div className={`hero-section bg-gradient-to-br from-gray-50 to-white ${isDemoPreview ? 'py-4' : 'py-8'} border-b border-gray-200/60 shadow-sm`}>
        <div className="prodfolio-container">
          <div className="max-w-4xl">
            <h1 className={`${isDemoPreview ? 'text-xl' : 'text-4xl md:text-5xl'} font-bold text-gray-900 mb-1 relative`}>
              {data.firstName} {data.lastName}
              <div className="h-0.5 w-12 bg-primary mt-1"></div>
            </h1>
            
            {/* About Section */}
            <div className={isDemoPreview ? 'mb-3' : 'mb-6'}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
                <TldrSection summary={data.summary} isDemoPreview={isDemoPreview} />
                
                {/* Action Buttons Row - Desktop: flex row, Mobile: stacked */}
                <div 
                  className={`w-full ${isDemoPreview ? 'lg:min-w-[300px]' : 'lg:min-w-[400px]'}`}
                  data-testid="actions-row"
                >
                  {/* Desktop: flex row with justify-between, Mobile: stacked */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                    {/* Left group: LinkedIn/Email/Resume buttons */}
                    <div className="flex flex-row gap-3 flex-wrap">
                      {data.linkedinProfile && (
                        <Button 
                          size={isDemoPreview ? "sm" : "default"}
                          className="btn-primary shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                          onClick={() => window.open(data.linkedinProfile!, '_blank')}
                        >
                          <Linkedin className={`${isDemoPreview ? 'h-3 w-3' : 'h-4 w-4'} group-hover:scale-110 transition-transform duration-300`} />
                          <span className={isDemoPreview ? 'text-xs' : 'text-sm'}>LinkedIn</span>
                        </Button>
                      )}
                      {data.contactEmail && (
                        <Button 
                          size={isDemoPreview ? "sm" : "default"}
                          variant="secondary"
                          className="shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                          onClick={() => window.location.href = `mailto:${data.contactEmail}`}
                        >
                          <Mail className={`${isDemoPreview ? 'h-3 w-3' : 'h-4 w-4'} group-hover:scale-110 transition-transform duration-300`} />
                          <span className={isDemoPreview ? 'text-xs' : 'text-sm'}>Email</span>
                        </Button>
                      )}
                      {data.resumeUrl && (
                        <Button 
                          size={isDemoPreview ? "sm" : "default"}
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary/5 shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                          onClick={() => window.open(data.resumeUrl!, '_blank')}
                        >
                          <Download className={`${isDemoPreview ? 'h-3 w-3' : 'h-4 w-4'} group-hover:scale-110 transition-transform duration-300`} />
                          <span className={isDemoPreview ? 'text-xs' : 'text-sm'}>Resume</span>
                        </Button>
                      )}
                    </div>

                    {/* Right side: Share Portfolio button - Show for published portfolios */}
                    {isPublished && !isDemoPreview && !isBuilderPreview && (
                      <div className="lg:flex-shrink-0 w-full lg:w-auto">
                        <div data-testid="share-portfolio-btn" className="w-full lg:w-auto">
                          <ShareModal 
                            portfolioUrl={window.location.href}
                            portfolioTitle={`${data.firstName} ${data.lastName}'s Portfolio`}
                            aria-label="Share portfolio"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section Divider */}
      <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px"></div>
      
      {/* Skills & Tools Cards with standardized typography */}
      <div className={`${isDemoPreview ? 'py-6' : 'py-8'} bg-muted/30`}>
        <div className="prodfolio-container">
          <div className={`grid grid-cols-1 md:grid-cols-2 ${isDemoPreview ? 'gap-4' : 'gap-6'}`}>
            <div className={`bg-card border border-border/50 rounded-lg ${isDemoPreview ? 'p-4' : 'p-6'} shadow-soft hover:shadow-lg hover:border-primary/20 hover:scale-[1.02] transition-all duration-300 group`}>
              {/* Standardized section header */}
              <h3 className={`${isDemoPreview ? (isBuilderPreview ? 'text-lg font-semibold text-gray-900 mb-3' : 'text-sm mb-2 px-2 py-1') : 'text-xl mb-4 px-3 py-1'} font-semibold text-gray-900 ${isDemoPreview && !isBuilderPreview ? 'bg-primary/5 rounded-md' : ''}`}>
                Key Skills
              </h3>
              <div className={`flex flex-wrap ${isDemoPreview ? 'gap-1.5' : 'gap-2'}`}>
                {data.skills?.map((skill, index) => (
                  <Tag key={index} text={skill} variant="blue" size={isDemoPreview ? "xs" : "sm"} />
                )) || <p className="text-sm text-gray-500">No skills listed</p>}
              </div>
            </div>
            
            <div className={`bg-card border border-border/50 rounded-lg ${isDemoPreview ? 'p-4' : 'p-6'} shadow-soft hover:shadow-lg hover:border-primary/20 hover:scale-[1.02] transition-all duration-300 group`}>
              {/* Standardized section header */}
              <h3 className={`${isDemoPreview ? (isBuilderPreview ? 'text-lg font-semibold text-gray-900 mb-3' : 'text-sm mb-2 px-2 py-1') : 'text-xl mb-4 px-3 py-1'} font-semibold text-gray-900 ${isDemoPreview && !isBuilderPreview ? 'bg-primary/5 rounded-md' : ''}`}>
                Tools & Technology
              </h3>
              <div className={`flex flex-wrap ${isDemoPreview ? 'gap-1.5' : 'gap-2'}`}>
                {data.tools?.map((tool, index) => (
                  <Tag key={index} text={tool} variant="green" size={isDemoPreview ? "xs" : "sm"} />
                )) || <p className="text-sm text-gray-500">No tools listed</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="bg-gradient-to-r from-transparent via-primary/15 to-transparent h-px"></div>

      {/* Case Studies Section */}
      <div className={`${isDemoPreview ? 'py-6' : 'py-10'} bg-background`}>
        <div className="prodfolio-container">
          {/* Case Studies header - always show in builder preview when there are case studies */}
          {data.caseStudies && data.caseStudies.length > 0 && (
            <h2 className={`${isDemoPreview ? (isBuilderPreview ? 'text-lg font-semibold text-gray-900 mb-4' : 'text-lg mb-3 px-2 py-1') : 'text-2xl mb-6 px-4 py-2'} font-bold text-gray-900 ${!isBuilderPreview ? 'bg-primary/5 rounded-md' : ''}`}>
              Case Studies
            </h2>
          )}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${isDemoPreview ? 'gap-3' : 'gap-6'}`}>
            {data.caseStudies?.slice(0, 3).map((caseStudy, index) => (
              <div 
                key={caseStudy.id}
                className="animate-fade-in transition-all duration-300 h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full">
                  <CaseStudyCard
                    title={caseStudy.title}
                    description={caseStudy.description}
                    oneLiner={caseStudy.oneLiner}
                    metrics={caseStudy.metrics || []}
                    showViewMore={true}
                    caseStudyId={caseStudy.id}
                    caseStudySlug={(caseStudy as any).slug}
                    portfolioSlug={slug}
                    onClick={() => handleCaseStudyClick(caseStudy)}
                    isDemoPreview={isDemoPreview}
                  />
                </div>
              </div>
            )) || (
              <div className="col-span-full text-center text-gray-500">
                No case studies available
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section Divider */}
      {data.personalProject && (data.personalProject.title || data.personalProject.link) && data.personalProject.show !== false && (
        <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px"></div>
      )}

      {/* Personal Build or Side Project Section */}
      {data.personalProject && (data.personalProject.title || data.personalProject.link) && data.personalProject.show !== false && (
        <div className={`${isDemoPreview ? 'py-6' : 'py-8'} bg-muted/30`}>
          <div className="prodfolio-container">
            <div className={`bg-card border border-border/50 rounded-lg ${isDemoPreview ? 'p-4' : 'p-6'} shadow-soft hover:shadow-lg hover:border-primary/20 hover:scale-[1.01] transition-all duration-300 group`}>
              <div className={`flex items-start justify-between ${isDemoPreview ? 'mb-2' : 'mb-4'}`}>
                <div>
                  {/* Personal Project header - always show in builder preview */}
                  <h3 className={`${isDemoPreview ? (isBuilderPreview ? 'text-lg font-semibold text-gray-900 mb-3' : 'text-lg mb-2 px-2 py-1') : 'text-2xl mb-3 px-4 py-2'} font-bold text-gray-900 ${!isBuilderPreview ? 'bg-primary/5 rounded-md' : ''}`}>
                    Personal Project
                  </h3>
                </div>
                {data.personalProject.link && (
                  <Button
                    size={isDemoPreview ? "sm" : "default"}
                    className="btn-primary shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    onClick={() => window.open(data.personalProject.link!, '_blank')}
                  >
                    <ExternalLink className={`${isDemoPreview ? 'h-3 w-3' : 'h-4 w-4'} group-hover:scale-110 transition-transform duration-300`} />
                    <span className={isDemoPreview ? 'text-xs' : 'text-sm'}>View Project</span>
                  </Button>
                )}
              </div>
              
              {data.personalProject.title && (
                <h4 className={`${isDemoPreview ? 'text-sm mb-2' : 'text-xl mb-3'} font-semibold text-gray-900`}>
                  {data.personalProject.title}
                </h4>
              )}
              
              {data.personalProject.description && (
                <p className={`text-gray-700 ${isDemoPreview ? 'mb-2 text-xs' : 'mb-4'} leading-relaxed`}>
                  {data.personalProject.description}
                </p>
              )}
              
              {data.personalProject.role && (
                <div className={`border-t border-gray-200 ${isDemoPreview ? 'pt-2 mb-2' : 'pt-3 mb-4'}`}>
                  <p className={`text-gray-600 ${isDemoPreview ? 'text-xs' : ''}`}>
                    <span className="font-semibold text-gray-900">Role:</span> {data.personalProject.role}
                  </p>
                </div>
              )}
              
              {data.personalProject.tags && data.personalProject.tags.length > 0 && (
                <div className={`flex flex-wrap ${isDemoPreview ? 'gap-1' : 'gap-1.5'}`}>
                  {data.personalProject.tags.map((tag, index) => (
                    <span key={index} className={`inline-flex items-center ${isDemoPreview ? 'px-1.5 py-0.5 text-xs' : 'px-2 py-1 text-xs'} rounded-md font-medium bg-blue-100 text-blue-800 border border-blue-200`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {showWatermark && (
        <div className="bg-muted/40 border-t border-border/30 mt-10">
          <div className="prodfolio-container">
            <div className="py-8 text-center">
              <a
                href="https://prodfolio.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/50 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md group"
                aria-label="Made with Prodfolio"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-medium">Made with Prodfolio</span>
                <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      )}
      
      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          isOpen={isCaseStudyModalOpen}
          onClose={closeCaseStudyModal}
          caseStudy={selectedCaseStudy}
          portfolioSlug={slug}
          portfolioTitle={`${data.firstName} ${data.lastName}`}
          contactEmail={data.contactEmail}
          contactLinkedin={data.linkedinProfile}
          resumeUrl={data.resumeUrl}
        />
      )}
    </div>
  );
});