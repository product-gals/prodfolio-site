
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, ExternalLink, Badge } from "lucide-react";
import Tag from "@/components/Tag";
import TagInput from "@/components/TagInput";
import EditableText from "@/components/EditableText";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  oneLiner?: string;
  metrics?: Array<{
    text: string;
    type: 'positive' | 'neutral';
  }>;
}

interface ReviewPublishStepProps {
  data: {
    firstName: string;
    lastName: string;
    linkedinProfile: string;
    contactEmail?: string;
    tagline?: string;
    location?: string;
    availability?: 'full-time' | 'part-time' | 'contract' | 'not-looking';
    summary: string;
    personalProject?: {
      title: string;
      description: string;
      role: string;
      link: string;
      tags: string[];
      show?: boolean;
    };
    skills: string[];
    tools: string[];
    caseStudies: CaseStudy[];
    resumeUrl?: string;
  };
  onDataChange: (data: any) => void;
  slug: string;
  onSlugChange: (slug: string) => void;
  onPublish: () => void;
  onSyncBasicInfo?: (u: { firstName: string; lastName: string; linkedinProfile: string; tagline?: string; location?: string; availability?: 'full-time' | 'part-time' | 'contract' | 'not-looking'; }) => void;
}

const ReviewPublishStep = ({ data, onDataChange, slug, onSlugChange, onPublish, onSyncBasicInfo }: ReviewPublishStepProps) => {
  const [editMode, setEditMode] = useState<string | null>(null);
  
  const updateSummary = (summary: string) => {
    onDataChange({ ...data, summary });
    setEditMode(null);
  };

  const updatePersonalProject = (updates: Partial<typeof data.personalProject>) => {
    onDataChange({ 
      ...data, 
      personalProject: { ...data.personalProject, ...updates } 
    });
    setEditMode(null);
  };
  
  const updateCaseStudy = (id: string, updates: Partial<CaseStudy>) => {
    const updatedCaseStudies = data.caseStudies.map(cs => 
      cs.id === id ? { ...cs, ...updates } : cs
    );
    onDataChange({ ...data, caseStudies: updatedCaseStudies });
    setEditMode(null);
  };
  
  const checks = [
    { label: 'TL;DR summary', ok: (data.summary || '').trim().length > 0 },
    { label: 'At least 1 skill', ok: (data.skills || []).length > 0 },
    { label: 'At least 1 tool', ok: (data.tools || []).length > 0 },
    { label: 'At least 1 case study', ok: (data.caseStudies || []).length > 0 },
  ];
  const ready = checks.every(c => c.ok);
  const publishUrl = `${window.location.origin}/p/${slug}`;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-1">Here’s your portfolio, ready to shine! ✨</h2>
        <p className="text-gray-600 mb-4">
          Double-check your details below and make quick edits inline before you publish.
        </p>
      </div>
      
      {/* Basic Info Section */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Basic Info</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setEditMode(editMode === "basic-info" ? null : "basic-info")}
            className="text-gray-500 hover:text-prodfolio-purple"
          >
            <Edit size={16} className="mr-1" /> Edit
          </Button>
        </div>

        {editMode === "basic-info" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              value={data.firstName}
              onChange={(e) => onDataChange({ ...data, firstName: e.target.value })}
              placeholder="First name"
            />
            <Input
              value={data.lastName}
              onChange={(e) => onDataChange({ ...data, lastName: e.target.value })}
              placeholder="Last name"
            />
            <Input
              value={data.contactEmail || ''}
              onChange={(e) => onDataChange({ ...data, contactEmail: e.target.value })}
              placeholder="Contact email"
              type="email"
            />
            <Input
              value={data.tagline || ''}
              onChange={(e) => onDataChange({ ...data, tagline: e.target.value })}
              placeholder="Tagline (optional)"
            />
            <Input
              value={data.linkedinProfile}
              onChange={(e) => onDataChange({ ...data, linkedinProfile: e.target.value })}
              placeholder="LinkedIn URL"
              type="url"
            />
            <Input
              value={data.location || ''}
              onChange={(e) => onDataChange({ ...data, location: e.target.value })}
              placeholder="Location (optional)"
            />
            <select
              className="w-full p-2 border rounded-md text-sm"
              value={data.availability || 'full-time'}
              onChange={(e) => onDataChange({ ...data, availability: e.target.value })}
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="not-looking">Not currently looking</option>
            </select>

            <div className="md:col-span-2 flex justify-end gap-2">
              <Button
                size="sm"
                onClick={() => {
                  setEditMode(null);
                  onSyncBasicInfo?.({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    linkedinProfile: data.linkedinProfile,
                    tagline: data.tagline,
                    location: data.location,
                    availability: data.availability,
                  });
                }}
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <p><span className="text-gray-500">Name:</span> {data.firstName} {data.lastName}</p>
            <p><span className="text-gray-500">Email:</span> {data.contactEmail || '—'}</p>
            {data.tagline && <p><span className="text-gray-500">Tagline:</span> {data.tagline}</p>}
            <p>
              <span className="text-gray-500">LinkedIn:</span> {data.linkedinProfile ? (
                <a href={data.linkedinProfile} className="text-prodfolio-purple underline" target="_blank" rel="noreferrer">View profile</a>
              ) : '—'}
            </p>
            <p><span className="text-gray-500">Location:</span> {data.location || '—'}</p>
            <p><span className="text-gray-500">Availability:</span> {data.availability || '—'}</p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* Summary Section */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">TL;DR Summary</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setEditMode(editMode === "summary" ? null : "summary")}
              className="text-gray-500 hover:text-prodfolio-purple"
            >
              <Edit size={16} className="mr-1" /> Edit
            </Button>
          </div>
          
          {editMode === "summary" ? (
            <EditableText
              initialText={data.summary}
              onSave={updateSummary}
              placeholder="Add a brief summary about yourself..."
            />
          ) : (
            <p className="text-gray-700">{data.summary}</p>
          )}
        </div>
        
        {/* Skills & Tools Section */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Skills & Tools</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setEditMode("skills-tools")}
              className="text-gray-500 hover:text-prodfolio-purple"
            >
              <Edit size={16} className="mr-1" /> Edit
            </Button>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm text-gray-500 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <Tag key={index} text={skill} variant="blue" />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm text-gray-500 mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {data.tools.map((tool, index) => (
                <Tag key={index} text={tool} variant="green" />
              ))}
            </div>
          </div>
        </div>

        {/* Personal Project Section */}
        {data.personalProject && (data.personalProject.title || data.personalProject.link) && (
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge className="h-4 w-4 text-purple-600" />
                <h3 className="font-medium">Personal Build Project</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditMode(editMode === "personal-project" ? null : "personal-project")}
                className="text-gray-500 hover:text-prodfolio-purple"
              >
                <Edit size={16} className="mr-1" /> Edit
              </Button>
            </div>
            
            {editMode === "personal-project" ? (
              <div className="space-y-3">
                <input
                  type="text"
                  className="w-full p-2 border rounded-md text-sm"
                  value={data.personalProject.title}
                  onChange={(e) => updatePersonalProject({ title: e.target.value })}
                  placeholder="Project title"
                />
                <textarea
                  className="w-full p-2 border rounded-md text-sm min-h-[80px]"
                  value={data.personalProject.description}
                  onChange={(e) => updatePersonalProject({ description: e.target.value })}
                  placeholder="What you built and why"
                />
                <input
                  type="text"
                  className="w-full p-2 border rounded-md text-sm"
                  value={data.personalProject.role}
                  onChange={(e) => updatePersonalProject({ role: e.target.value })}
                  placeholder="Your role"
                />
                <input
                  type="text"
                  className="w-full p-2 border rounded-md text-sm"
                  value={data.personalProject.link}
                  onChange={(e) => updatePersonalProject({ link: e.target.value })}
                  placeholder="Project link"
                />
                <div>
                  <label className="block text-sm font-medium mb-1">Tags</label>
                  <TagInput
                    tags={data.personalProject.tags || []}
                    setTags={(tags) => updatePersonalProject({ tags })}
                    placeholder="Add tags like #SideProject, #VibeCoded"
                    variant="blue"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    size="sm"
                    onClick={() => setEditMode(null)}
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-purple-50 border border-purple-100 rounded-md p-3">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{data.personalProject.title}</h4>
                    {data.personalProject.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-600 p-1 h-auto"
                        onClick={() => window.open(data.personalProject.link, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{data.personalProject.description}</p>
                  {data.personalProject.role && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Role:</span> {data.personalProject.role}
                    </p>
                  )}
                  {data.personalProject.tags && data.personalProject.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {data.personalProject.tags.map((tag, index) => (
                        <Tag key={index} text={tag} variant="blue" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Case Studies Section */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Case Studies ({data.caseStudies.length})</h3>
          </div>
          
          <div className="space-y-4">
            {data.caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{caseStudy.title}</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditMode(editMode === caseStudy.id ? null : caseStudy.id)}
                    className="text-gray-500 hover:text-prodfolio-purple"
                  >
                    <Edit size={16} className="mr-1" /> Edit
                  </Button>
                </div>
                
                {editMode === caseStudy.id ? (
                  <div className="space-y-3 mb-3">
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md text-sm"
                      value={caseStudy.title}
                      onChange={(e) => updateCaseStudy(caseStudy.id, { title: e.target.value })}
                    />
                    <textarea
                      className="w-full p-2 border rounded-md text-sm min-h-[100px]"
                      value={caseStudy.description}
                      onChange={(e) => updateCaseStudy(caseStudy.id, { description: e.target.value })}
                    />
                    <div className="flex justify-end">
                      <Button
                        size="sm"
                        onClick={() => setEditMode(null)}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-700 mb-3">{caseStudy.description}</p>
                    
                    {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.metrics.map((metric, index) => (
                          metric.text ? (
                            <span 
                              key={index}
                              className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md"
                            >
                              {metric.text}
                            </span>
                          ) : null
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Resume Section */}
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Resume</h3>
          {data.resumeUrl ? (
            <p className="text-sm">
              <a href={data.resumeUrl} target="_blank" rel="noreferrer" className="text-prodfolio-purple underline">
                View resume link
              </a>
            </p>
          ) : (
            <p className="text-sm text-gray-500 italic">No resume link added (optional)</p>
          )}
        </div>
      </div>
      
      {/* Publish controls */}
      <div className="border rounded-lg p-4 space-y-4">
        <div>
          <h3 className="font-medium mb-2">Review checklist</h3>
          <ul className="space-y-1 text-sm">
            {checks.map((c, i) => (
              <li key={i} className={c.ok ? 'text-green-700' : 'text-amber-700'}>
                {c.ok ? '✓' : '•'} {c.label}
              </li>
            ))}
          </ul>
      </div>


        <div className="space-y-2">
          <label className="block text-sm font-medium">Your URL</label>
          <div className="flex gap-2">
            <span className="inline-flex items-center px-2 rounded-md border text-sm text-gray-600 bg-gray-50">
              /p/
            </span>
            <Input value={slug} onChange={(e) => onSlugChange(e.target.value.replace(/[^a-z0-9-]/g, '-').toLowerCase())} />
            <Button
              type="button"
              variant="outline"
              onClick={() => navigator.clipboard?.writeText(publishUrl)}
            >
              Copy link
            </Button>
            <Button type="button" disabled={!ready} onClick={onPublish}>
              Publish now
            </Button>
          </div>
          <p className="text-xs text-gray-500">Full link: {publishUrl}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewPublishStep;
