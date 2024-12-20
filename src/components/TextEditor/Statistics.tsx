import React from 'react';
import { Hash, AlignJustify, Clock } from 'lucide-react';
import { TextStats } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface StatisticsProps {
  stats: TextStats;
}

export default function Statistics({ stats }: StatisticsProps) {
  const { theme } = useTheme();

  const cards = [
    { 
      icon: Hash, 
      label: 'Characters', 
      value: stats.characters,
      gradient: 'from-blue-500 to-indigo-500'
    },
    { 
      icon: AlignJustify, 
      label: 'Words', 
      value: stats.words,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Clock, 
      label: 'Read Time', 
      value: `${Math.max(1, Math.ceil(stats.words / 200))}m`,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className={`backdrop-blur-lg rounded-2xl shadow-lg p-6 transition-all
      ${theme === 'dark' 
        ? 'bg-gray-800/90 shadow-purple-900/20' 
        : 'bg-white/80 shadow-black/5'}`}>
      <h2 className={`text-lg font-medium mb-4
        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Statistics
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {cards.map(({ icon: Icon, label, value, gradient }) => (
          <div key={label} 
               className={`p-4 rounded-xl bg-gradient-to-r ${gradient}`}>
            <div className="flex items-center gap-2 mb-1">
              <Icon className="w-4 h-4 text-white" />
              <p className="text-sm text-white/90">{label}</p>
            </div>
            <p className="text-2xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}