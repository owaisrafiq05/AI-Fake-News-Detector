import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-dark-800/80 backdrop-blur-md border-b border-dark-600 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <GlobeAltIcon className="h-8 w-8 text-primary-500" />
          <span className="text-white font-semibold text-xl">AI Fact Checker</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            href="https://github.com/yourusername/AI-Fake-News-Detector" 
            target="_blank"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
} 