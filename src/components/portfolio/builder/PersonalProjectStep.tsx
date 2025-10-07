import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TagInput from "@/components/TagInput";
import { Switch } from "@/components/ui/switch";

interface PersonalProject {
  title: string;
  description: string;
  role: string;
  link: string;
  tags: string[];
  show?: boolean;
}

interface PersonalProjectStepProps {
  project: PersonalProject;
  onChange: (project: PersonalProject) => void;
  quickFill?: boolean;
}

const PersonalProjectStep = ({ project, onChange, quickFill = false }: PersonalProjectStepProps) => {
  const updateProject = (field: keyof PersonalProject, value: any) => {
    onChange({
      ...project,
      [field]: value
    });
  };

  const roleExamples = ["PM", "Solo Creator", "Lead Developer", "Collaborator", "Designer & Developer"];
  
  return (
    <div className="max-w-2xl mx-auto pb-20"> {/* Added bottom padding for scroll */}
      {/* Page header */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Side Project</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Showcase your initiative and creativity beyond your day job.
        </p>
      </div>

      <div className="bg-card border rounded-xl p-6 shadow-sm space-y-6">
        {/* Visibility toggle */}
        <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
          <div>
            <p className="text-sm font-semibold text-foreground">Include in portfolio</p>
            <p className="text-xs text-muted-foreground">Toggle off to hide without deleting</p>
          </div>
          <Switch
            checked={project.show !== false}
            onCheckedChange={(v) => updateProject("show", Boolean(v))}
          />
        </div>

        <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Project Title</label>
          <Input
            value={project.title}
            onChange={(e) => updateProject("title", e.target.value)}
            placeholder="Keep it short and punchy - e.g., 'TaskFlow Mobile App'"
            className="w-full"
          />
        </div>

<div>
  <label className="block text-sm font-medium mb-2">What you built and why</label>
  <Textarea
    value={project.description}
    onChange={(e) => updateProject("description", e.target.value)}
    placeholder="1-2 sentence summary - e.g., 'Built a task management app to solve my own productivity issues. Used React Native and focused on minimal, distraction-free design.'"
    className="w-full h-24 resize-none"
  />
  {quickFill && (
    <div className="mt-2 flex flex-wrap gap-2">
      {[
        "Designed and launched a lightweight task-tracking tool to validate a mobile-first workflow concept.",
        "Built a public resource hub for early-career PMs, attracting 1,000+ monthly users in the first quarter.",
        "Automated a feedback collection process, improving analysis speed and saving 3+ hours per week."
      ].map((ex) => (
        <button
          key={ex}
          type="button"
          onClick={() => updateProject("description", ex)}
          className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          {ex}
        </button>
      ))}
    </div>
  )}
</div>

        <div>
          <label className="block text-sm font-medium mb-2">Your role</label>
          <Input
            value={project.role}
            onChange={(e) => updateProject("role", e.target.value)}
            placeholder="e.g., Solo Creator, PM, Collaborator"
            className="w-full"
          />
          <div className="mt-2">
            <p className="text-xs text-gray-500 mb-1">Quick suggestions:</p>
            <div className="flex flex-wrap gap-1">
              {roleExamples.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => updateProject("role", example)}
                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Project Link</label>
          <Input
            value={project.link}
            onChange={(e) => updateProject("link", e.target.value)}
            placeholder="https://... (live demo, GitHub, or case study)"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tags (Optional)</label>
          <TagInput
            tags={project.tags}
            setTags={(tags) => updateProject("tags", tags)}
            placeholder="Add tags like #SideProject, #VibeCoded, #BuiltInPublic"
            variant="blue"
          />
        </div>
      </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Pro tip:</strong> Personal projects show initiative and passion beyond your day job. 
            Even a simple weekend build can demonstrate your curiosity and drive to hiring managers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectStep;