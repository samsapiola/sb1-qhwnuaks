import React from 'react';
import { RotateCcw, Copy } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface TextAreaProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClear?: () => void;
  onCopy?: () => void;
  readOnly?: boolean;
  placeholder: string;
  label: string;
}

export default function TextArea({
  value,
  onChange,
  onClear,
  onCopy,
  readOnly,
  placeholder,
  label
}: TextAreaProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`backdrop-blur-lg rounded-2xl shadow-lg p-6 transition-all
      ${theme === 'dark' 
        ? 'bg-gray-800/90 shadow-purple-900/20' 
        : 'bg-white/80 shadow-black/5'}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-lg font-medium
          ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {label}
        </h2>
        <div className="flex gap-2">
          {onClear && (
            <button
              onClick={onClear}
              className={`hover:text-purple-500 transition-colors
                ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
              title="Clear"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          )}
          {onCopy && (
            <button
              onClick={onCopy}
              className={`hover:text-purple-500 transition-colors
                ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
              title="Copy to clipboard"
            >
              <Copy className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      <textarea
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full h-64 p-4 rounded-xl transition-all text-lg leading-relaxed
          focus:ring-2 focus:ring-purple-500 focus:border-transparent
          ${theme === 'dark'
            ? 'bg-gray-900/50 border-gray-700 text-gray-100 placeholder-gray-500'
            : 'bg-white/50 border-gray-200 text-gray-800 placeholder-gray-400'}`}
        placeholder={placeholder}
        style={{ resize: 'none' }}
      />
    </div>
  );
}