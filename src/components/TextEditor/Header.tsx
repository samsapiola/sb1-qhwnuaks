import React from 'react';
import { Type } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const { theme } = useTheme();
  
  return (
    <div className="mb-12 text-center">
      <h1 className={`text-5xl font-bold tracking-tight mb-3 
        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
        bg-clip-text text-transparent`}>
        <span className="inline-block">
          <Type className="w-10 h-10 mb-1 inline-block mr-3" />
          Text Editor
        </span>
      </h1>
      <p className={`text-xl font-light max-w-2xl mx-auto
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        Transform your text with precision and elegance
      </p>
    </div>
  );
}