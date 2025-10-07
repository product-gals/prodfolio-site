
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import MetricBadge from "@/components/MetricBadge";
import { Plus, Trash, ChevronDown, ChevronUp } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  oneLiner?: string;
  metrics?: Array<{
    text: string;
    type: 'positive' | 'neutral';
  }>;
  problemBullets?: string[];
  solutionBullets?: string[];
  outcomeBullets?: string[];
}

interface CaseStudyStepProps {
  caseStudies: CaseStudy[];
  onChange: (caseStudies: CaseStudy[]) => void;
  quickFill?: boolean;
}

const CaseStudyStep = ({ caseStudies, onChange, quickFill = false }: CaseStudyStepProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(caseStudies[0]?.id || null);
  
  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const updateCaseStudy = (id: string, field: keyof CaseStudy, value: any) => {
    const updated = caseStudies.map(cs => 
      cs.id === id ? { ...cs, [field]: value } : cs
    );
    onChange(updated);
  };
  
  const addCaseStudy = () => {
    if (caseStudies.length < 3) { // Allow up to 3 case studies
      const newCaseStudy: CaseStudy = {
        id: `new-cs-${Date.now()}`,
        title: "New Case Study",
        description: "",
        metrics: [
          { text: "", type: "positive" as const }
        ]
      };
      const updated = [...caseStudies, newCaseStudy];
      onChange(updated);
      setExpandedId(newCaseStudy.id);
    }
  };
  
  const removeCaseStudy = (id: string) => {
    const updated = caseStudies.filter(cs => cs.id !== id);
    onChange(updated);
    
    // If the removed case study was expanded, expand the first one in the list
    if (expandedId === id && updated.length > 0) {
      setExpandedId(updated[0].id);
    }
  };
  
  const updateMetric = (caseStudyId: string, index: number, text: string) => {
    const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
    if (caseStudy && caseStudy.metrics) {
      const updatedMetrics = [...caseStudy.metrics];
      updatedMetrics[index] = { ...updatedMetrics[index], text };
      
      const updated = caseStudies.map(cs => 
        cs.id === caseStudyId ? { ...cs, metrics: updatedMetrics } : cs
      );
      onChange(updated);
    }
  };
  
  const addMetric = (caseStudyId: string) => {
    const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
    if (caseStudy) {
      const updatedMetrics = [...(caseStudy.metrics || []), { text: "", type: "positive" as const }];
      
      const updated = caseStudies.map(cs => 
        cs.id === caseStudyId ? { ...cs, metrics: updatedMetrics } : cs
      );
      onChange(updated);
    }
  };
  
  const removeMetric = (caseStudyId: string, index: number) => {
    const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
    if (caseStudy && caseStudy.metrics && caseStudy.metrics.length > 1) {
      const updatedMetrics = caseStudy.metrics.filter((_, i) => i !== index);
      
      const updated = caseStudies.map(cs => 
        cs.id === caseStudyId ? { ...cs, metrics: updatedMetrics } : cs
      );
      onChange(updated);
    }
  };
  
  // Compose description from PSO arrays
  const composeDescription = (p: string[], s: string[], o: string[]) => {
    const sec = (h: string, arr: string[]) => arr.length ? `${h}\n- ${arr.join("\n- ")}` : '';
    return [
      sec('Problem (what needed solving)', p),
      sec('Solution (what you did and why)', s),
      sec('Outcome (impact, metrics, or learnings)', o)
    ].filter(Boolean).join('\n\n');
  };

  const updatePSO = (id: string, key: 'problemBullets' | 'solutionBullets' | 'outcomeBullets', text: string) => {
    const lines = text.split('\n').map(l => l.replace(/^[-\s]+/, '')).filter(l => l.trim().length);
    const updated = caseStudies.map(cs => {
      if (cs.id !== id) return cs;
      const next = { ...cs, [key]: lines } as CaseStudy;
      const p = (key === 'problemBullets' ? lines : (cs.problemBullets || []));
      const s = (key === 'solutionBullets' ? lines : (cs.solutionBullets || []));
      const o = (key === 'outcomeBullets' ? lines : (cs.outcomeBullets || []));
      next.description = composeDescription(p, s, o);
      return next;
    });
    onChange(updated);
  };

  // Quick-fill example sentences (industry-neutral, under 15 words)
  const problemExamples = [
    "Low feature adoption after launch",
    "Drop-off during onboarding impacted activation rates", 
    "Lack of visibility into product usage hindered prioritization"
  ];
  const approachExamples = [
    "Conducted user interviews, refined messaging, and improved in-product guidance",
    "Simplified flow, removed friction points, and tested revised copy",
    "Implemented analytics tracking and built usage dashboards for stakeholders"
  ];
  const outcomeExamples = [
    "Increased adoption by 20% within 6 weeks",
    "Improved activation from 45% to 68%",
    "Enabled data-driven roadmap adjustments, improving release adoption"
  ];

  return (
    <div className="max-w-2xl mx-auto pb-20"> {/* Added bottom padding for scroll */}
      {/* Page header */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Featured Case Study</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Showcase your impact with a compelling story of problem-solving.
        </p>
      </div>
      
      <div className="space-y-6">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.id} className="bg-card border rounded-xl overflow-hidden shadow-sm">
            <div 
              className="flex items-center justify-between p-6 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleExpanded(caseStudy.id)}
            >
              <h3 className="text-lg font-semibold text-foreground">
                {caseStudy.title || "Untitled Case Study"}
              </h3>
              <div className="flex items-center gap-3">
                {caseStudies.length > 1 && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCaseStudy(caseStudy.id);
                    }}
                  >
                    <Trash size={16} />
                  </Button>
                )}
                {expandedId === caseStudy.id ? (
                  <ChevronUp size={20} className="text-muted-foreground" />
                ) : (
                  <ChevronDown size={20} className="text-muted-foreground" />
                )}
              </div>
            </div>
            
            {expandedId === caseStudy.id && (
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Case Study Title</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                    value={caseStudy.title}
                    onChange={(e) => updateCaseStudy(caseStudy.id, "title", e.target.value)}
                    placeholder="E.g., User Onboarding Redesign"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    One Liner <span className="text-xs text-muted-foreground">(max 140 chars)</span>
                  </label>
                  <input
                    type="text"
                    maxLength={140}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                    value={caseStudy.oneLiner || ""}
                    onChange={(e) => updateCaseStudy(caseStudy.id, "oneLiner", e.target.value)}
                    placeholder="Brief summary for portfolio preview (e.g., Redesigned onboarding flow to increase activation by 40%)"
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    {(caseStudy.oneLiner || "").length}/140 characters
                  </div>
                </div>
                

                {/* PSO helper sections */}

                <div>
<label className="block text-sm font-medium mb-1">Problem</label>
<p className="text-gray-600 text-xs mb-2">Tell the beginning of your story, what made you start?</p>
<Textarea
  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-prodfolio-purple/30 min-h-[90px]"
  value={(caseStudy as any).problemBullets?.join('\n') || ''}
  onChange={(e) => updatePSO(caseStudy.id, 'problemBullets', e.target.value)}
  placeholder="Enter your problem description..."
/>
{quickFill && (
  <div className="mt-2 flex flex-wrap gap-2">
    {problemExamples.map((ex, i) => (
      <Button key={i} type="button" variant="secondary" size="sm" className="rounded-full" onClick={() => updatePSO(caseStudy.id, 'problemBullets', ex)}>
        {ex}
      </Button>
    ))}
  </div>
)}
                </div>

                <div>
<label className="block text-sm font-medium mb-1">Approach</label>
<p className="text-gray-600 text-xs mb-2">Tell how you approached the problem, what changes did you make and how?</p>
<Textarea
  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-prodfolio-purple/30 min-h-[90px]"
  value={(caseStudy as any).solutionBullets?.join('\n') || ''}
  onChange={(e) => updatePSO(caseStudy.id, 'solutionBullets', e.target.value)}
  placeholder="Enter your approach description..."
/>
{quickFill && (
  <div className="mt-2 flex flex-wrap gap-2">
    {approachExamples.map((ex, i) => (
      <Button key={i} type="button" variant="secondary" size="sm" className="rounded-full" onClick={() => updatePSO(caseStudy.id, 'solutionBullets', ex)}>
        {ex}
      </Button>
    ))}
  </div>
)}
                </div>

                <div>
<label className="block text-sm font-medium mb-1">Outcome (Story)</label>
<p className="text-gray-600 text-xs mb-2">Tell the ending of your story — what changed after your solution? Focus on the qualitative result and any learnings.</p>
<Textarea
  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-prodfolio-purple/30 min-h-[90px]"
  value={(caseStudy as any).outcomeBullets?.join('\n') || ''}
  onChange={(e) => updatePSO(caseStudy.id, 'outcomeBullets', e.target.value)}
  placeholder="Enter your outcome description..."
/>
{quickFill && (
  <div className="mt-2 flex flex-wrap gap-2">
    {outcomeExamples.map((ex, i) => (
      <Button key={i} type="button" variant="secondary" size="sm" className="rounded-full" onClick={() => updatePSO(caseStudy.id, 'outcomeBullets', ex)}>
        {ex}
      </Button>
    ))}
  </div>
)}
                </div>
                
                {/* Visual separator between Outcome and Key Metrics */}
                <div className="border-t border-gray-200 my-6"></div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Key Metrics (Proof)</label>
                  <p className="text-gray-600 text-sm mb-2">
                    List measurable results that show your impact — adoption %, revenue growth, time saved, etc.
                  </p>
                  
                  <div className="space-y-2">
                    {caseStudy.metrics?.map((metric, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="text"
                          className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-prodfolio-purple/30"
                          value={metric.text}
                          onChange={(e) => updateMetric(caseStudy.id, index, e.target.value)}
                          placeholder="E.g., +40% User Engagement"
                        />
                        {caseStudy.metrics && caseStudy.metrics.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-red-600"
                            onClick={() => removeMetric(caseStudy.id, index)}
                          >
                            <Trash size={16} />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 text-xs"
                    onClick={() => addMetric(caseStudy.id)}
                  >
                    <Plus size={14} className="mr-1" /> Add Another Metric
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Add new case study button - now allows up to 3 */}
      {caseStudies.length < 3 && (
        <Button 
          variant="outline" 
          onClick={addCaseStudy}
          className="flex items-center gap-2 mt-6"
        >
          <Plus size={16} /> Add Case Study ({caseStudies.length + 1}/3)
        </Button>
      )}
      
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-md mt-6">
        <p className="text-sm text-amber-800">
          Focus on measurable results — what changed because of your work?
        </p>
      </div>
    </div>
  );
};

export default CaseStudyStep;
