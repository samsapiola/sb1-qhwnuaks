import React from 'react';
import { ArrowRight, Type, Shield, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: Zap,
      title: 'Instant Transformations',
      description: 'Transform your text in real-time with powerful tools'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your text never leaves your browser - complete privacy guaranteed'
    },
    {
      icon: Users,
      title: 'Built for Everyone',
      description: 'Perfect for developers, writers, and content creators'
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Simplify Text, Enhance Productivity
          </h1>
          <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Your all-in-one text editor for formatting, analyzing, and transforming text effortlessly
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/editor"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Try it Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className={`px-8 py-3 rounded-full font-medium border-2 flex items-center gap-2
                ${theme === 'dark' ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'}`}
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`p-6 rounded-2xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}
            >
              <feature.icon className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}