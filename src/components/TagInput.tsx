
import { useState, KeyboardEvent } from 'react';
import { Plus } from "lucide-react";
import { Button } from '@/components/ui/button';
import Tag from './Tag';

interface TagInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
  placeholder?: string;
  variant?: "default" | "blue" | "green" | "yellow";
  maxTags?: number;
  testId?: string;
}

const TagInput: React.FC<TagInputProps> = ({ 
  tags, 
  setTags, 
  placeholder = "Add a tag...",
  variant = "default",
  maxTags,
  testId
}) => {
  const [input, setInput] = useState('');
  const reachedMaxTags = maxTags ? tags.length >= maxTags : false;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() && !reachedMaxTags) {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmedInput = input.trim();
    // Case-insensitive duplicate check
    const existingTags = tags.map(tag => tag.toLowerCase());
    if (trimmedInput && !existingTags.includes(trimmedInput.toLowerCase()) && !reachedMaxTags) {
      setTags([...tags, trimmedInput]);
      setInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <Tag 
            key={`${tag}-${index}`} 
            text={tag} 
            variant={variant} 
            onRemove={() => removeTag(tag)}
            data-testid={testId}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={reachedMaxTags ? `Maximum ${maxTags} tags reached` : placeholder}
          className="border rounded-md px-3 py-2 flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50"
          disabled={reachedMaxTags}
        />
        <Button
          size="sm"
          variant="outline"
          type="button"
          onClick={addTag}
          disabled={!input.trim() || reachedMaxTags}
          className="flex items-center gap-1"
        >
          <Plus size={16} /> Add
        </Button>
      </div>
    </div>
  );
};

export default TagInput;
