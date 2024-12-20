import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function CookieConsent() {
  const { theme } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    } shadow-lg p-4 md:p-6`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="w-6 h-6 text-purple-600" />
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
          >
            Accept
          </button>
          <button
            onClick={() => setShow(false)}
            className={`px-6 py-2 rounded-lg font-medium border ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            } hover:opacity-80 transition-opacity`}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}