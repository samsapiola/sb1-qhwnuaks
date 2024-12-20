import React from 'react';
import { Code2, PenTool, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  
  const userTypes = [
    {
      icon: Code2,
      title: 'Developers',
      description: 'Format code, manipulate strings, and handle text transformations efficiently'
    },
    {
      icon: PenTool,
      title: 'Writers',
      description: 'Clean up text, count words, and ensure consistent formatting'
    },
    {
      icon: GraduationCap,
      title: 'Students',
      description: 'Analyze text, format citations, and prepare documents'
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">About Text Transform</h1>
        
        <div className={`p-8 rounded-2xl mb-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            We believe in making text manipulation accessible, efficient, and secure for everyone. 
            Our tool is built with privacy in mind - all transformations happen right in your browser, 
            ensuring your text never leaves your device.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {userTypes.map((type) => (
              <div key={type.title} className="text-center">
                <type.icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <h3 className="font-semibold mb-2">{type.title}</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}