import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Home, Info, Mail, Shield, Tool } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Sitemap() {
  const { theme } = useTheme();
  
  const sections = [
    {
      title: 'Main',
      icon: Home,
      links: [
        { name: 'Home', path: '/' },
        { name: 'Text Editor', path: '/editor' }
      ]
    },
    {
      title: 'Information',
      icon: Info,
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Legal',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Sitemap</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
            >
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`block p-2 rounded hover:bg-purple-100 hover:text-purple-700 transition-colors ${
                        theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-purple-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}