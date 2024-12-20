import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        {submitted ? (
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl text-center`}>
            <Send className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              Thank you for reaching out. We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-200'
                  }`}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-medium">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  required
                  rows={4}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-200'
                  }`}
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}