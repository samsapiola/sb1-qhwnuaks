import React, { useState } from 'react';
import { 
  Type, 
  RotateCcw, 
  Copy, 
  ArrowDownUp, 
  Hash, 
  Key,
  Search
} from 'lucide-react';

interface TextStats {
  characters: number;
  words: number;
  lines: number;
}

export default function TextEditor() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [stats, setStats] = useState<TextStats>({ characters: 0, words: 0, lines: 0 });

  const updateStats = (text: string) => {
    setStats({
      characters: text.length,
      words: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
      lines: text.split('\n').length
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setInput(newText);
    updateStats(newText);
    setOutput(newText); // Default behavior, can be modified based on selected transformation
  };

  const transformText = (type: string) => {
    let transformed = '';
    switch (type) {
      case 'uppercase':
        transformed = input.toUpperCase();
        break;
      case 'lowercase':
        transformed = input.toLowerCase();
        break;
      case 'capitalize':
        transformed = input.replace(/\b\w/g, char => char.toUpperCase());
        break;
      case 'reverse':
        transformed = input.split('').reverse().join('');
        break;
      default:
        transformed = input;
    }
    setOutput(transformed);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Text Transformer</h1>
          <p className="text-lg text-gray-600">Transform, analyze, and manipulate your text with ease</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Type className="w-5 h-5" />
                Input Text
              </h2>
              <button
                onClick={() => setInput('')}
                className="text-gray-500 hover:text-gray-700"
                title="Clear"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            <textarea
              value={input}
              onChange={handleInputChange}
              className="w-full h-64 p-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your text here..."
            />
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <ArrowDownUp className="w-5 h-5" />
                Output Text
              </h2>
              <button
                onClick={copyToClipboard}
                className="text-gray-500 hover:text-gray-700"
                title="Copy to clipboard"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
            <textarea
              value={output}
              readOnly
              className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-md"
              placeholder="Transformed text will appear here..."
            />
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Transformations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => transformText('uppercase')}
              className="flex items-center justify-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-md text-blue-700"
            >
              <Key className="w-4 h-4" /> UPPERCASE
            </button>
            <button
              onClick={() => transformText('lowercase')}
              className="flex items-center justify-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-md text-green-700"
            >
              <Key className="w-4 h-4" /> lowercase
            </button>
            <button
              onClick={() => transformText('capitalize')}
              className="flex items-center justify-center gap-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-md text-purple-700"
            >
              <Type className="w-4 h-4" /> Capitalize
            </button>
            <button
              onClick={() => transformText('reverse')}
              className="flex items-center justify-center gap-2 p-3 bg-orange-50 hover:bg-orange-100 rounded-md text-orange-700"
            >
              <Search className="w-4 h-4" /> Reverse
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Hash className="w-5 h-5" />
            Text Statistics
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">Characters</p>
              <p className="text-2xl font-bold">{stats.characters}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">Words</p>
              <p className="text-2xl font-bold">{stats.words}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">Lines</p>
              <p className="text-2xl font-bold">{stats.lines}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}