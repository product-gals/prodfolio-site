import TagInput from "@/components/TagInput";
interface SkillsToolsStepProps {
  skills: string[];
  tools: string[];
  onSkillsChange: (skills: string[]) => void;
  onToolsChange: (tools: string[]) => void;
}
const SkillsToolsStep = ({
  skills,
  tools,
  onSkillsChange,
  onToolsChange
}: SkillsToolsStepProps) => {
  // Master list of skills for suggestions
  const allSkills = ["Product Strategy", "User Research", "Roadmapping", "Data Analysis", "A/B Testing", "Stakeholder Management", "Market Research", "Wireframing", "Agile Development", "User Stories", "Competitive Analysis", "Backlog Prioritization"];

  // Master list of tools for suggestions  
  const allTools = ["Figma", "Jira", "Google Analytics", "SQL", "Amplitude", "Notion", "Miro", "Excel", "Trello", "Productboard", "Mixpanel", "Tableau"];

  // Generate dynamic suggestions (max 3, excluding already selected items)
  const getSkillSuggestions = () => {
    const available = allSkills.filter(skill => !skills.map(s => s.toLowerCase()).includes(skill.toLowerCase()));
    return available.slice(0, 3);
  };
  const getToolSuggestions = () => {
    const available = allTools.filter(tool => !tools.map(t => t.toLowerCase()).includes(tool.toLowerCase()));
    return available.slice(0, 3);
  };
  const addSuggestion = (suggestion: string, currentList: string[], onChange: (newList: string[]) => void) => {
    // Case-insensitive duplicate check and max limit check
    const existingItems = currentList.map(item => item.toLowerCase());
    if (!existingItems.includes(suggestion.toLowerCase()) && currentList.length < 10) {
      onChange([...currentList, suggestion]);
    }
  };
  const maxItemsMessage = (type: string) => <p className="text-sm text-amber-600 mt-2">Maximum 10 {type} reached. Remove some to add more.</p>;
  return <div className="max-w-4xl mx-auto h-full overflow-y-auto pb-20">
      {/* Standardized step title - 30px / 1.2 line-height */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Skills & Tools</h2>
        <p className="text-base text-gray-600 leading-relaxed">Add your key skills and the tools you use most.</p>
      </div>

      {/* Scrollable content area with proper spacing */}
      <div className="space-y-4 pb-6">
        {/* Skills Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          {/* Section label - 20px / 1.3 line-height */}
          <h3 className="text-l font-semibold text-gray-900 mb-4 leading-tight">Key Skills</h3>
          {/* Helper text - 16px / 1.5, muted color */}
          <p className="text-base text-gray-600 mb-4 leading-relaxed">Add skills that showcase your product management expertise</p>
          
          <TagInput tags={skills} setTags={onSkillsChange} placeholder="Type a skill and press Enter" maxTags={10} testId="skills-chip" />
          
          {skills.length >= 10 && maxItemsMessage("skills")}
          
          {/* Skills suggestions with consistent 16px gaps */}
          <div className="mt-4 space-y-3">
            <p className="text-sm font-medium text-gray-700">Suggestions:</p>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {getSkillSuggestions().map(skill => <button key={skill} onClick={() => addSuggestion(skill, skills, onSkillsChange)} className="px-3 py-1.5 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300 transition-colors flex-shrink-0" data-testid="skills-suggestion">
                  + {skill}
                </button>)}
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          {/* Section label - 20px / 1.3 line-height */}
          <h3 className="text-l font-semibold text-gray-900 mb-4 leading-tight">Tools & Technology</h3>
          {/* Helper text - 16px / 1.5, muted color */}
          <p className="text-base text-gray-600 mb-4 leading-relaxed">Add tools and technologies you're proficient with</p>
          
          <TagInput tags={tools} setTags={onToolsChange} placeholder="Type a tool and press Enter" maxTags={10} testId="tools-chip" />
          
          {tools.length >= 10 && maxItemsMessage("tools")}
          
          {/* Tools suggestions with consistent spacing */}
          <div className="mt-4 space-y-3">
            <p className="text-sm font-medium text-gray-700">Suggestions:</p>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {getToolSuggestions().map(tool => <button key={tool} onClick={() => addSuggestion(tool, tools, onToolsChange)} className="px-3 py-1.5 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300 transition-colors flex-shrink-0" data-testid="tools-suggestion">
                  + {tool}
                </button>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SkillsToolsStep;