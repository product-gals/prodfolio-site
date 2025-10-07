
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EditableTextProps {
  initialText: string;
  onSave: (text: string) => void;
  className?: string;
  placeholder?: string;
}

const EditableText = ({ 
  initialText, 
  onSave, 
  className = "",
  placeholder = "Click to edit..."
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleSave = () => {
    onSave(text);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setText(initialText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={className}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none mb-2"
          rows={4}
          autoFocus
          placeholder={placeholder}
        />
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => setIsEditing(true)} 
      className={`cursor-pointer ${className} ${!text.trim() ? "text-gray-400 italic" : ""} hover:bg-gray-50 p-2 rounded-md transition-colors`}
    >
      {text.trim() ? text : placeholder}
    </div>
  );
};

export default EditableText;
