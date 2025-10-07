
import { useState, useEffect } from "react";
import { Edit, Save, X, PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetricBadge from "@/components/MetricBadge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import TagInput from "@/components/TagInput";

type MetricType = {
  text: string;
  type: 'positive' | 'negative' | 'neutral';
};

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  metrics?: MetricType[];
  content?: string;
}

interface CaseStudyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudyId: string;
}

const CaseStudyDialog = ({ isOpen, onClose, caseStudyId }: CaseStudyDialogProps) => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [editedMetrics, setEditedMetrics] = useState<MetricType[]>([]);
  const [newMetric, setNewMetric] = useState("");
  const [newMetricType, setNewMetricType] = useState<'positive' | 'negative' | 'neutral'>('positive');

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      
      // Load case studies from published data
      let caseStudies: CaseStudy[] = [];
      caseStudies = [
        {
          id: "cs1",
          title: "Product Feature Redesign: User Onboarding",
          description: "Led the redesign of the user onboarding flow based on comprehensive user research and behavior analytics. Improved completion rates and increased feature adoption by 45%, while reducing drop-off rates by 20%.",
          content: "## The Challenge\n\nThe existing onboarding flow was causing a high drop-off rate of 35%, with only 50% of new users completing the process. User feedback indicated confusion and frustration with the multi-step process.\n\n## My Approach\n\n1. Conducted user interviews and analyzed behavioral data to identify pain points\n2. Created user journey maps to visualize the current experience\n3. Designed low-fidelity wireframes for a simplified onboarding flow\n4. Built interactive prototypes and conducted usability testing\n5. Collaborated with engineering to implement the new design\n\n## Results\n\n- Increased onboarding completion rate by 25%\n- Improved feature adoption by 45%\n- Reduced drop-off rate by 20%\n- Positive feedback from user satisfaction surveys",
          metrics: [
            { text: "+45% Feature Adoption", type: "positive" },
            { text: "-20% Drop-off Rate", type: "positive" }
          ]
        }
      ];
      
      // Find the case study by ID
      const foundCaseStudy = caseStudies.find(cs => cs.id === caseStudyId);
      
      if (foundCaseStudy) {
        setCaseStudy(foundCaseStudy);
        setEditedTitle(foundCaseStudy.title);
        setEditedDescription(foundCaseStudy.description);
        setEditedContent(foundCaseStudy.content || "");
        setEditedMetrics(foundCaseStudy.metrics || []);
      }
      
      setLoading(false);
    } else {
      setIsEditing(false);
    }
  }, [caseStudyId, isOpen]);

  const handleSaveChanges = () => {
    if (caseStudy) {
      // In a real app, this would save to an API
      setCaseStudy({
        ...caseStudy,
        title: editedTitle,
        description: editedDescription,
        content: editedContent,
        metrics: editedMetrics
      });
      setIsEditing(false);
    }
  };

  const handleAddMetric = () => {
    if (newMetric.trim()) {
      setEditedMetrics([...editedMetrics, { text: newMetric, type: newMetricType }]);
      setNewMetric("");
    }
  };

  const handleRemoveMetric = (index: number) => {
    const updatedMetrics = [...editedMetrics];
    updatedMetrics.splice(index, 1);
    setEditedMetrics(updatedMetrics);
  };

  const renderContent = () => {
    if (isEditing && caseStudy) {
      return (
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <Textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="w-full p-2 border rounded-md"
              rows={3}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Key Results</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {editedMetrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-1">
                  <MetricBadge type={metric.type}>
                    {metric.text}
                  </MetricBadge>
                  <button 
                    onClick={() => handleRemoveMetric(index)}
                    className="p-1 rounded-full hover:bg-gray-200"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2 items-center mt-3">
              <select
                value={newMetricType}
                onChange={(e) => setNewMetricType(e.target.value as 'positive' | 'negative' | 'neutral')}
                className="border rounded-md p-2"
              >
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
                <option value="neutral">Neutral</option>
              </select>
              <input
                type="text"
                value={newMetric}
                onChange={(e) => setNewMetric(e.target.value)}
                placeholder="e.g. +45% Feature Adoption"
                className="border rounded-md p-2 flex-1"
                onKeyDown={(e) => e.key === 'Enter' && handleAddMetric()}
              />
              <Button size="sm" onClick={handleAddMetric}>
                <PlusCircle size={16} className="mr-1" /> Add Metric
              </Button>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Content (Markdown supported)</label>
            <Textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full p-2 border rounded-md font-mono"
              rows={15}
            />
          </div>
        </div>
      );
    }
    
    return (
      <div className="p-6">
        <p className="text-prodfolio-text-secondary text-lg mb-6">{caseStudy?.description}</p>
        
        {caseStudy?.metrics && caseStudy.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {caseStudy.metrics.map((metric, index) => (
              <MetricBadge key={index} type={metric.type}>
                {metric.text}
              </MetricBadge>
            ))}
          </div>
        )}

        {caseStudy?.content && (
          <div className="prose max-w-none">
            {caseStudy.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-xl font-semibold mt-8 mb-4">{paragraph.substring(3)}</h2>;
              } else if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-5 mb-4">
                    {paragraph.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx} className="mb-1">{item.substring(2)}</li>
                    ))}
                  </ul>
                );
              } else if (/^\d+\./.test(paragraph)) {
                return (
                  <ol key={idx} className="list-decimal pl-5 mb-4">
                    {paragraph.split('\n').map((item, itemIdx) => {
                      const match = item.match(/^\d+\.\s(.+)/);
                      return match ? <li key={itemIdx} className="mb-1">{match[1]}</li> : null;
                    })}
                  </ol>
                );
              } else {
                return <p key={idx} className="mb-4">{paragraph}</p>;
              }
            })}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-0">
        <DialogHeader className="sticky top-0 z-10 bg-white border-b shadow-sm p-6">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-prodfolio-text">
              {isEditing ? "Edit Case Study" : (loading ? "Loading..." : caseStudy?.title)}
            </DialogTitle>
            <div className="flex items-center gap-2">
              {!loading && caseStudy && (
                isEditing ? (
                  <Button className="btn-primary" onClick={handleSaveChanges}>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                ) : (
                  <Button className="btn-primary" onClick={() => setIsEditing(true)}>
                    <Edit className="mr-2 h-4 w-4" /> Edit Case Study
                  </Button>
                )
              )}
              <Button 
                variant="ghost" 
                className="p-2 h-10 w-10"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {loading ? (
          <div className="p-6 text-center text-prodfolio-text-secondary">Loading...</div>
        ) : !caseStudy ? (
          <div className="p-6 text-center">
            <div className="text-prodfolio-text text-xl mb-4">Case study not found</div>
          </div>
        ) : (
          renderContent()
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyDialog;
