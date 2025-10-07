import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MetricBadge from "@/components/MetricBadge";
import { ArrowLeft, ExternalLink, Linkedin, Download } from "lucide-react";

type MetricType = {
  text: string;
  type: 'positive' | 'negative' | 'neutral';
};

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  oneLiner?: string;
  content?: string;
  slug?: string;
  metrics?: MetricType[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy;
  portfolioSlug?: string;
  portfolioTitle?: string;
  contactEmail?: string;
  contactLinkedin?: string;
  resumeUrl?: string;
}

const CaseStudyModal = ({
  isOpen,
  onClose,
  caseStudy,
  portfolioSlug,
  portfolioTitle,
  contactEmail,
  contactLinkedin,
  resumeUrl
}: CaseStudyModalProps) => {
  
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

  const openInNewTab = () => {
    if (portfolioSlug && caseStudy.slug) {
      window.open(`/p/${portfolioSlug}/case-study/${caseStudy.slug}`, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sticky top-0 bg-white z-10 pb-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900">
              {caseStudy.title}
            </DialogTitle>
            <div className="flex items-center gap-2">
              {portfolioSlug && caseStudy.slug && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openInNewTab}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open in Tab
                </Button>
              )}
            </div>
          </div>
          
          {/* Contact actions */}
          <div className="flex items-center gap-3 pt-2">
            {contactLinkedin && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(contactLinkedin, '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            )}
            {contactEmail && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`mailto:${contactEmail}`, '_blank')}
              >
                ✉️ Email
              </Button>
            )}
            {resumeUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(resumeUrl, '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            )}
          </div>
        </DialogHeader>

        <div className="pt-6">
          {caseStudy.oneLiner && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {caseStudy.oneLiner}
            </p>
          )}

          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {caseStudy.metrics.map((metric, index) => (
                <MetricBadge key={index} type={metric.type}>
                  {metric.text}
                </MetricBadge>
              ))}
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {caseStudy.content ? (
              renderContent(caseStudy.content)
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">
                  Detailed case study content coming soon.
                </p>
                <p className="text-gray-600">
                  {caseStudy.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;