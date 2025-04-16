import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">AI Fact Checker</h3>
            <p className="text-gray-400 text-sm">
              Combating misinformation with cutting-edge AI technology.
              Our tool helps you verify the credibility of news articles and statements in real-time.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://github.com/yourusername/AI-Fake-News-Detector" target="_blank" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-dark-600 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AI Fact Checker. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 