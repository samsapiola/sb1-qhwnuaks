import React from 'react';
import Header from './Header';
import TextArea from './TextArea';
import TransformTools from './TransformTools';
import Statistics from './Statistics';
import ThemeToggle from '../ThemeToggle';
import { transformText } from '../../utils/textTransforms';
import { calculateStats } from '../../utils/textStats';
import { useTheme } from '../../context/ThemeContext';
import type { TransformType } from '../../types';

export default function TextEditor() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [stats, setStats] = React.useState(calculateStats(''));
  const { theme } = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setInput(newText);
    setOutput(newText);
    setStats(calculateStats(newText));
  };

  const handleTransform = (type: TransformType) => {
    const transformed = transformText(input, type);
    setOutput(transformed);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300
      ${theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
        : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ThemeToggle />
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TextArea
            label="Input"
            value={input}
            onChange={handleInputChange}
            onClear={() => setInput('')}
            placeholder="Enter your text here..."
          />
          <TextArea
            label="Output"
            value={output}
            readOnly
            onCopy={copyToClipboard}
            placeholder="Transformed text will appear here..."
          />
        </div>

        <div className="space-y-6">
          <TransformTools onTransform={handleTransform} />
          <Statistics stats={stats} />
        </div>
      </div>
    </div>
  );
}