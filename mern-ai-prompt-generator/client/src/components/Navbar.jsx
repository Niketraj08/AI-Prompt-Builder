import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Layout, History } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="AI Prompt Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold tracking-tight">AI Prompt Builder</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/generate" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Generate</Link>
            <Link to="/#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</Link>
            <Link to="/#templates" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Templates</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">History</Link>
            <Link 
              to="/generate" 
              className="px-4 py-2 rounded-full text-sm font-medium button-gradient shadow-lg shadow-blue-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
