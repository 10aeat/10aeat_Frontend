import React from 'react';

interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, value, onChange }) => {
  return (
    <textarea 
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 w-full rounded"
    ></textarea>
  );
};

export default TextArea;