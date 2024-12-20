import React from 'react';
import { Shield, Lock, Eye, Server } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Privacy() {
  const { theme } = useTheme();
  
  const policies = [
    {
      icon: Shield,
      title: 'Data Protection',
      content: 'All text transformations occur locally in your browser. We never store or transmit your text data.'
    },
    {
      icon: Lock,
      title: 'No Tracking',
      content: 'We use minimal cookies only for essential functionality. No tracking or analytics cookies are used.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      content: 'Our code is open source, allowing anyone to verify our privacy and security practices.'
    },
    {
      icon: Server,
      title: 'Data Storage',
      content: 'Any preferences you set are stored locally on your device. We don\'t maintain any user databases.'
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
          <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            At Text Transform, we take your privacy seriously. Our service is designed 
            to be privacy-first, ensuring your data remains under your control at all times.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy) => (
              <div key={policy.title} className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <policy.icon className="w-8 h-8 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {policy.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}