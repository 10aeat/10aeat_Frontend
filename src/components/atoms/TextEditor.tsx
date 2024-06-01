'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface TextEditorProps {
  placeholder: string;
  onChange: (value: string) => void;
}

export default function TextEditor({ placeholder, onChange }: TextEditorProps) {
  const [editorValue, setEditorValue] = useState('');

  const handleChange = (value: string) => {
    setEditorValue(value);
    onChange(value);
  };

  return (
    <div className="text-editor">
      <ReactQuill 
        value={editorValue} 
        onChange={handleChange} 
        placeholder={placeholder} 
        modules={{
          toolbar: [
            ['bold', 'underline', 'strike', 'blockquote', 'clean'],
            [{ 'color': [] }],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link', 'image'],            
          ],
        }}
        className="w-[840px]"
      />
    </div>
  );
}