import { useLocation } from "react-router-dom";
import { generateUniqueSlug } from "@/lib/slugUtils";
import { useState, useEffect, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Check, X } from "lucide-react";
// BasicInfoStep removed from flow
import SummaryStep from "./builder/SummaryStep";
import PersonalProjectStep from "./builder/PersonalProjectStep";
import SkillsToolsStep from "./builder/SkillsToolsStep";
import CaseStudyStep from "./builder/CaseStudyStep";
import ResumeUploadStep from "./builder/ResumeUploadStep";
import ContactStep from "./builder/ContactStep";
import { PortfolioRenderer } from "@/components/portfolio/PortfolioRenderer";
import { analytics } from "@/lib/analytics";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  metrics?: Array<{
    text: string;
    type: 'positive' | 'neutral';
  }>;
}
interface PersonalProject {
  title: string;
  description: string;
  role: string;
  link: string;
  tags: string[];
  show?: boolean;
}
interface PortfolioBuilderProps {
  initialData: {
    firstName: string;
    lastName: string;
    linkedinProfile: string;
    contactEmail?: string;
    summary: string;
    tagline?: string;
    location?: string;
    availability?: 'full-time' | 'part-time' | 'contract' | 'not-looking';
    personalProject?: PersonalProject;
    skills: string[];
    tools: string[];
    caseStudies: CaseStudy[];
  };
  onClose: () => void;
  onComplete: (data: {
    firstName: string;
    lastName: string;
    linkedinProfile: string;
    contactEmail?: string;
    summary: string;
    personalProject?: PersonalProject;
    skills: string[];
    tools: string[];
    caseStudies: CaseStudy[];
  }) => void;
  onDataUpdate?: (data: {
    firstName: string;
    lastName: string;
    linkedinProfile: string;
    contactEmail?: string;
    summary: string;
    personalProject?: PersonalProject;
    skills: string[];
    tools: string[];
    caseStudies: CaseStudy[];
  }) => void;
  isDemo?: boolean;
  mode?: 'new' | 'edit';
  onUserUpdate?: (updates: any) => void;
}
const steps = [{
  id: 1,
  name: "Upload Resume"
}, {
  id: 2,
  name: "TL;DR Intro"
}, {
  id: 3,
  name: "Skills & Tools"
}, {
  id: 4,
  name: "Case Study"
}, {
  id: 5,
  name: "Side Project"
}, {
  id: 6,
  name: "Contact / LinkedIn"
}];
const PortfolioBuilder = ({
  initialData,
  onClose,
  onComplete,
  onDataUpdate,
  isDemo = false,
  mode = 'edit',
  onUserUpdate
}: PortfolioBuilderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    linkedinProfile: initialData.linkedinProfile || "",
    contactEmail: (initialData as any).contactEmail || "",
    summary: initialData.summary || "",
    tagline: initialData.tagline || "",
    location: initialData.location || "",
    availability: (initialData as any).availability || "full-time",
    personalProject: initialData.personalProject || {
      title: "",
      description: "",
      role: "",
      link: "",
      tags: [],
      show: true
    },
    skills: initialData.skills && initialData.skills.length > 0 ? initialData.skills : ["Product Strategy", "User Research", "Roadmapping"],
    tools: initialData.tools && initialData.tools.length > 0 ? initialData.tools : ["Figma", "Jira", "Google Analytics"],
    caseStudies: initialData.caseStudies || [],
    resumeUrl: (initialData as any).resumeUrl || ""
  });

  // Draft + autosave state
  const [draftId, setDraftId] = useState<string | null>(() => {
    if (mode === 'new') return null;
    const existing = sessionStorage.getItem('portfolioDraftId');
    if (existing) return existing;
    const id = globalThis.crypto && 'randomUUID' in globalThis.crypto ? (globalThis.crypto as any).randomUUID() : Math.random().toString(36).slice(2);
    sessionStorage.setItem('portfolioDraftId', id);
    return id;
  });
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  // REMOVED: beta flag check - always false
  const [slug, setSlug] = useState<string>(() => {
    const base = `${(initialData.firstName || '').trim()} ${(initialData.lastName || '').trim()}`.trim();
    return base ? base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'my-portfolio';
  });
  const [quickFillMode, setQuickFillMode] = useState(false);
  const [previewLayout, setPreviewLayout] = useState<'none' | 'split'>('split');
  const [shareOpen, setShareOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>("");

  // Analytics for new portfolio flow
  useEffect(() => {
    if (mode === 'new') {
      analytics.track('portfolio.new.started');
    }
  }, [mode]);

  // Load user profile data (always load to ensure publish uses real data)
  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        // Load authenticated user profile
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user?.id) return;

        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', session.user.id)
          .maybeSingle();

        if (profileData) {
          // Split name into first and last name
          const nameParts = (profileData.name || '').trim().split(' ');
          const firstName = nameParts[0] || '';
          const lastName = nameParts.slice(1).join(' ') || '';

          setFormData(prev => ({
            ...prev,
            firstName: firstName || prev.firstName,
            lastName: lastName || prev.lastName,
            linkedinProfile: profileData.linkedin_url || prev.linkedinProfile,
            contactEmail: profileData.email || prev.contactEmail,
          }));

          // Update slug with user's name only for new portfolios
          if (mode === 'new' && (firstName || lastName)) {
            const newSlug = `${firstName} ${lastName}`.trim()
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
            if (newSlug) {
              setSlug(newSlug);
            }
          }
        }
      } catch (error) {
        // Silently handle profile loading errors
      }
    };

    loadUserProfile();
  }, [mode]);

  // Prefill on first load for new portfolios
  useEffect(() => {
    try {
      if (mode !== 'new') return;
      const flagKey = 'portfolioPrefillApplied';
      if (sessionStorage.getItem(flagKey)) return;
      const isEmpty = !formData.summary && (formData.skills?.length ?? 0) === 0 && (formData.tools?.length ?? 0) === 0 && (formData.caseStudies?.length ?? 0) === 0 && !formData.personalProject?.title && !formData.personalProject?.description;
      if (!isEmpty) return;
      const prefilledCaseStudy = {
        id: `prefill-cs-${Date.now()}`,
        title: "Streamlined onboarding",
        description: "Problem: Users dropped at step two; unclear value.\n\nApproach: Mapped journey, interviewed 8 users, prototyped and A/B tested.\n\nOutcome: +28% completion, NPS +12, faster time‑to‑value.",
        metrics: [{
          text: "+28% onboarding completion",
          type: "positive" as const
        }, {
          text: "NPS +12",
          type: "neutral" as const
        }],
        problemBullets: ["Users dropped at step two; unclear value"],
        solutionBullets: ["Mapped journey, interviewed 8 users; prototyped and A/B tested"],
        outcomeBullets: ["+28% completion; NPS +12; faster time‑to‑value"]
      } as any;
      setFormData(prev => ({
        ...prev,
        summary: "Product‑minded PM who ships outcomes. I align teams, validate rigorously, and move metrics.",
        skills: ["Product Strategy", "User Research", "Data Analysis", "Roadmapping"],
        tools: ["Figma", "Jira", "SQL", "Amplitude"],
        caseStudies: [prefilledCaseStudy],
        personalProject: {
          ...(prev.personalProject || {}),
          title: "Feedback Loops",
          description: "Built a lightweight feedback app to shorten idea→insight cycles; learned quickly from real use.",
          role: prev.personalProject?.role || "PM",
          link: prev.personalProject?.link || "",
          tags: prev.personalProject?.tags || [],
          show: prev.personalProject?.show !== false
        }
      }));
      sessionStorage.setItem(flagKey, '1');
    } catch {}
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (mode === 'new' || !draftId) return; // disable autosave in NEW mode
    const handle = setTimeout(() => {
      try {
        setSaving(true);
        const payload = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          linkedinProfile: formData.linkedinProfile,
          contactEmail: (formData as any).contactEmail,
          summary: formData.summary,
          tagline: (formData as any).tagline,
          location: (formData as any).location,
          availability: (formData as any).availability,
          personalProject: formData.personalProject,
          skills: formData.skills,
          tools: formData.tools,
          caseStudies: formData.caseStudies,
          resumeUrl: (formData as any).resumeUrl
        };
        localStorage.setItem(`portfolioDraft-${draftId}`, JSON.stringify(payload));
        setSavedAt(new Date());
      } finally {
        setSaving(false);
      }
    }, 3000);
    return () => clearTimeout(handle);
  }, [formData, draftId, mode]);
  const timeAgo = () => {
    if (!savedAt) return '—';
    const diff = Math.floor((Date.now() - savedAt.getTime()) / 1000);
    const m = Math.floor(diff / 60);
    const s = diff % 60;
    const mm = m.toString();
    const ss = s.toString().padStart(2, '0');
    return `${mm}:${ss}`;
  };

  // Debounced live preview data with memoization
  const buildPreviewPayload = useCallback(() => ({
    firstName: formData.firstName,
    lastName: formData.lastName,
    linkedinProfile: formData.linkedinProfile,
    contactEmail: (formData as any).contactEmail,
    summary: formData.summary,
    personalProject: formData.personalProject,
    skills: formData.skills,
    tools: formData.tools,
    caseStudies: formData.caseStudies,
    resumeUrl: (formData as any).resumeUrl
  }), [formData]);
  const [debouncedPreviewData, setDebouncedPreviewData] = useState(buildPreviewPayload());
  useEffect(() => {
    // Shorter debounce for instant TL;DR updates
    const t = setTimeout(() => setDebouncedPreviewData(buildPreviewPayload()), 100);
    return () => clearTimeout(t);
  }, [buildPreviewPayload]);

  // Progress indicator calculation
  const progress = currentStep / steps.length * 100;

  // Handle form data updates with useCallback
  const updateFormData = useCallback((field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Auto-save demo data effect
  useEffect(() => {
    if (isDemo && onDataUpdate) {
      onDataUpdate({
        firstName: formData.firstName,
        lastName: formData.lastName,
        linkedinProfile: formData.linkedinProfile,
        contactEmail: (formData as any).contactEmail,
        summary: formData.summary,
        personalProject: formData.personalProject,
        skills: formData.skills,
        tools: formData.tools,
        caseStudies: formData.caseStudies
      });
    }
  }, [formData, isDemo, onDataUpdate]);

  // Navigation functions
  const goToNextStep = () => {
    setCurrentStep(s => {
      const next = Math.min(s + 1, steps.length);
      analytics.track('builder_step_viewed', {
        step: next
      });
      return next;
    });
  };
  const goToPrevStep = () => {
    setCurrentStep(s => {
      const prev = Math.max(s - 1, 1);
      analytics.track('builder_step_viewed', {
        step: prev
      });
      return prev;
    });
  };

  // Handle portfolio submission (Publish at footer)
  const handleSubmit = async () => {
    analytics.track('publish_clicked', {
      slug
    });

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      linkedinProfile: formData.linkedinProfile,
      contactEmail: (formData as any).contactEmail,
      summary: formData.summary,
      tagline: (formData as any).tagline,
      location: (formData as any).location,
      availability: (formData as any).availability,
      personalProject: formData.personalProject,
      skills: formData.skills,
      tools: formData.tools,
      caseStudies: formData.caseStudies,
      resumeUrl: (formData as any).resumeUrl
    };

    try {
      // Generate case study title
      const title = `${formData.firstName} ${formData.lastName}`.trim() || "Product Portfolio";
      
      // Prepare case study data with slugs
      const caseStudiesWithSlugs = formData.caseStudies.map((cs, index) => {
        const existingSlugs = formData.caseStudies.slice(0, index).map(c => 
          (c as any).slug || generateUniqueSlug(c.title)
        );
        
        return {
          ...cs,
          slug: (cs as any).slug || generateUniqueSlug(cs.title, existingSlugs),
          content: (cs as any).content || cs.description // Include content for detailed view
        };
      });
      
      // Get user initials for cover
      const initials = `${formData.firstName?.[0] || ''}${formData.lastName?.[0] || ''}`.toUpperCase();

      // Get current authenticated user for owner_id
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) {
        throw new Error('Authentication failed');
      }
      if (!user?.id) {
        throw new Error('Please log in to publish your portfolio');
      }

      // Upsert to database
      const { error } = await supabase
        .from('portfolios')
        .upsert({
          owner_id: user.id, // Use authenticated user ID
          title,
          slug,
          tldr: formData.summary,
          case_problem: caseStudiesWithSlugs[0]?.description?.split('\n\n')[0]?.replace('Problem: ','') || '',
          case_approach: caseStudiesWithSlugs[0]?.description?.split('\n\n')[1]?.replace('Approach: ','') || '',
          case_outcome: caseStudiesWithSlugs[0]?.description?.split('\n\n')[2]?.replace('Outcome: ','') || '',
          case_studies: caseStudiesWithSlugs,
          contact_email: (formData as any).contactEmail,
          contact_linkedin: formData.linkedinProfile,
          resume_url: (formData as any).resumeUrl,
          is_published: true,
          view_count: 0,
          cover: initials
        }, {
          onConflict: 'slug'
        });

      if (error) throw error;

      // Keep localStorage for backward compatibility with updated case studies
      const payloadWithSlugs = {
        ...payload,
        caseStudies: caseStudiesWithSlugs
      };
      localStorage.setItem(`publishedPortfolio-${slug}`, JSON.stringify(payloadWithSlugs));
      
      const url = `${window.location.origin}/p/${slug}`;
      navigator.clipboard?.writeText(url).catch(() => {});
      
      analytics.track('publish_success', {
        slug
      });

      toast({
        title: 'Portfolio published successfully!',
        description: 'Link copied to clipboard'
      });

      setShareUrl(url);
      setShareOpen(true);
      window.open(url, '_blank');
      onComplete(payload);
      
    } catch (error) {
      toast({
        title: 'Publish failed',
        description: 'Please try again.',
        variant: 'destructive'
      });
    }
  };

  // Always use the single full-page layout
  return <div className="min-h-screen flex flex-col bg-white">
      {/* Full-width header */}
      <div className="h-16 border-b bg-white flex items-center justify-between px-6">
        <button onClick={onClose} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          
          
        </button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {mode === 'new' || !draftId ? 'Not saved' : saving ? 'Autosaving…' : `Autosaved • ${timeAgo()} ago`}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm">Quick Examples</span>
            <Switch checked={quickFillMode} onCheckedChange={setQuickFillMode} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Preview</span>
            <Switch checked={previewLayout === 'split'} onCheckedChange={v => setPreviewLayout(v ? 'split' : 'none')} />
          </div>
          <Button variant="outline" onClick={() => {
          const payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            linkedinProfile: formData.linkedinProfile,
            contactEmail: (formData as any).contactEmail,
            summary: formData.summary,
            tagline: (formData as any).tagline,
            location: (formData as any).location,
            availability: (formData as any).availability,
            personalProject: formData.personalProject,
            skills: formData.skills,
            tools: formData.tools,
            caseStudies: formData.caseStudies,
            resumeUrl: (formData as any).resumeUrl
          };
          if (!draftId) {
            const newId = globalThis.crypto && 'randomUUID' in globalThis.crypto ? (globalThis.crypto as any).randomUUID() : Math.random().toString(36).slice(2);
            setDraftId(newId);
            try {
              sessionStorage.setItem('portfolioDraftId', newId);
            } catch {}
            analytics.track('portfolio.new.saved', {
              draftId: newId
            });
            localStorage.setItem(`portfolioDraft-${newId}`, JSON.stringify(payload));
          } else {
            localStorage.setItem(`portfolioDraft-${draftId}`, JSON.stringify(payload));
          }
          onComplete(payload);
          onClose();
        }}>
            Save & Exit
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={20} />
          </Button>
        </div>
      </div>

      {/* Banner spanning both columns with reduced height */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200 px-6 py-2">
        <p className="text-xs text-orange-700 text-center font-medium">Hit Publish to save your portfolio! </p>
      </div>

      {/* Enhanced progress bar */}
      <div className="h-1 bg-muted relative">
        <div className="h-full bg-gradient-to-r from-primary via-primary to-primary/80 transition-all duration-700 ease-out" style={{
        width: `${progress}%`
      }} />
        <div className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" style={{
        left: `${Math.max(0, progress - 8)}%`
      }} />
      </div>

      {/* Enhanced step indicators */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          {steps.map((step, index) => <div key={step.id} className="flex items-center">
              <button type="button" onClick={() => {
            setCurrentStep(step.id);
            analytics.track('builder_step_viewed', {
              step: step.id
            });
          }} className={`flex flex-col items-center focus:outline-none transition-all duration-200 hover:scale-105 ${step.id === currentStep ? "text-primary" : step.id < currentStep ? "text-green-600" : "text-muted-foreground"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-200 ${step.id === currentStep ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : step.id < currentStep ? "bg-green-100 text-green-700 shadow-sm" : "bg-muted text-muted-foreground"}`}>
                  {step.id < currentStep ? <Check size={18} /> : <span className="font-semibold">{step.id}</span>}
                </div>
                <span className={`text-xs font-medium text-center leading-tight ${step.id === currentStep ? "text-primary" : ""}`}>
                  {step.name}
                </span>
              </button>
              {index < steps.length - 1 && <div className={`w-16 h-0.5 mx-4 transition-colors duration-300 ${step.id < currentStep ? "bg-green-300" : "bg-muted"}`} />}
            </div>)}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex min-h-0">
        {/* Editor panel */}
        <div className={`${previewLayout === 'split' ? 'w-[58%] border-r' : 'w-full'} bg-white flex-1 relative`}>
          <div className="absolute inset-0 overflow-y-auto">
            <div className="min-h-full px-6 py-6 max-w-2xl mx-auto">
              {currentStep === 1 && <ResumeUploadStep resumeUrl={(formData as any).resumeUrl} onChange={url => updateFormData("resumeUrl", url)} />}
              {currentStep === 2 && <SummaryStep summary={formData.summary} onChange={value => updateFormData("summary", value)} quickFill={quickFillMode} />}
              {currentStep === 3 && <SkillsToolsStep skills={formData.skills} tools={formData.tools} onSkillsChange={skills => updateFormData("skills", skills)} onToolsChange={tools => updateFormData("tools", tools)} />}
              {currentStep === 4 && <CaseStudyStep caseStudies={formData.caseStudies} onChange={caseStudies => updateFormData("caseStudies", caseStudies)} quickFill={quickFillMode} />}
              {currentStep === 5 && <PersonalProjectStep project={formData.personalProject} onChange={project => updateFormData("personalProject", project)} quickFill={quickFillMode} />}
              {currentStep === 6 && <ContactStep linkedinProfile={formData.linkedinProfile} contactEmail={(formData as any).contactEmail} onChange={updates => {
              updateFormData("linkedinProfile", updates.linkedinProfile);
              if (updates.contactEmail !== undefined) {
                updateFormData("contactEmail", updates.contactEmail);
              }
            }} />}
            </div>
          </div>
          
          {/* Sticky bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t">
            <div className="px-6 py-4 flex justify-between items-center">
              <Button variant="outline" onClick={goToPrevStep} disabled={currentStep === 1} className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back
              </Button>
              
              <div className="flex gap-4">
                {currentStep === steps.length ? <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white px-6">
                    Publish Portfolio
                  </Button> : <Button onClick={goToNextStep} className="px-6">
                    Next
                  </Button>}
              </div>
            </div>
          </div>
        </div>
        
        {/* Preview panel - narrower and smaller font */}
        {previewLayout === 'split' && <div className="w-[42%] bg-gray-50 flex-1">
            <div className="overflow-y-auto min-h-full">
              {/* Preview top padding to align with form */}
              <div className="px-6 py-4 min-h-full">
                <div className="bg-white rounded-lg shadow-sm border min-h-full">
                  <PortfolioRenderer data={debouncedPreviewData} isDemoPreview={true} isBuilderPreview={true} />
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
export default PortfolioBuilder;