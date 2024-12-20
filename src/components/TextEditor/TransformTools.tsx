import React from 'react';
import { Key, Type, Search, AlignLeft, Wand2 } from 'lucide-react';
import { TransformType } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface TransformToolsProps {
  onTransform: (type: TransformType) => void;
}

export default function TransformTools({ onTransform }: TransformToolsProps) {
  const { theme } = useTheme();
  
  const tools = [
    { type: 'uppercase', icon: Key, label: 'UPPERCASE', gradient: 'from-blue-500 to-indigo-500' },
    { type: 'lowercase', icon: Key, label: 'lowercase', gradient: 'from-green-500 to-emerald-500' },
    { type: 'capitalize', icon: Type, label: 'Capitalize', gradient: 'from-purple-500 to-pink-500' },
    { type: 'reverse', icon: Search, label: 'Reverse', gradient: 'from-orange-500 to-red-500' },
    { type: 'trim', icon: Wand2, label: 'Trim', gradient: 'from-pink-500 to-rose-500' }
  ] as const;

  return (
    <div className={`backdrop-blur-lg rounded-2xl shadow-lg p-6 transition-all
      ${theme === 'dark' 
        ? 'bg-gray-800/90 shadow-purple-900/20' 
        : 'bg-white/80 shadow-black/5'}`}>
      <h2 className={`text-lg font-medium mb-4
        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Transform
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {tools.map(({ type, icon: Icon, label, gradient }) => (
          <button
            key={type}
            onClick={() => onTransform(type)}
            className={`flex items-center justify-center gap-2 p-3 
                      bg-gradient-to-r ${gradient}
                      rounded-xl text-white
                      transition-all duration-300 transform 
                      hover:scale-105 hover:shadow-lg
                      active:scale-95`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}