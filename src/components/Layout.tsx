import React from 'react';
import { Link } from 'react-router-dom';
import { Type } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import CookieConsent from './CookieConsent';
import { useTheme } from '../context/ThemeContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Editor', path: '/editor' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const footerLinks = [
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Sitemap', path: '/sitemap' }
  ];

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${
        theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
      } backdrop-blur-lg border-b ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Type className="w-6 h-6 text-purple-600" />
              <span className="font-bold text-xl">Text Transform</span>
            </Link>
            
            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium hover:text-purple-600 transition-colors ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className={`${
        theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-600'
      } border-t ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Type className="w-5 h-5 text-purple-600" />
              <span className="font-medium">© 2024 Text Transform</span>
            </div>
            <div className="flex gap-6">
              {footerLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:text-purple-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
}