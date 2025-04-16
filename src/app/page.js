'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FactCheckForm from '@/components/FactCheckForm';
import FactCheckResult from '@/components/FactCheckResult';
import Loader from '@/components/Loader';

// This is a mock function that simulates API call to the backend
// Will be replaced with actual API call when backend is ready
const mockFactCheck = async (text) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2500));
  
  // For demo purposes, return a mock result
  return {
    status: ['true', 'false', 'misleading', 'unverified'][Math.floor(Math.random() * 4)],
    text: text.slice(0, 150) + (text.length > 150 ? '...' : ''),
    explanation: "This is a simulated AI analysis response. In the final implementation, this would contain a detailed analysis of the submitted text, explaining why it was classified as true, false, misleading, or unverified.",
    sources: [
      {
        name: "Example Source 1",
        url: "https://example.com/source1"
      },
      {
        name: "Example Source 2",
        url: "https://example.com/source2"
      }
    ]
  };
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (text) => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const factCheckResult = await mockFactCheck(text);
      setResult(factCheckResult);
    } catch (error) {
      console.error('Error checking facts:', error);
      // Handle error state here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-900">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        <section id="fact-check" className="py-16 bg-dark-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Check The Facts</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Paste any news article, social media post, or statement to get an instant analysis of its factual accuracy.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <FactCheckForm onSubmit={handleSubmit} isLoading={isLoading} />
              
              <div className="mt-8">
                {isLoading ? (
                  <Loader text="Analyzing facts... This may take a moment" />
                ) : (
                  result && <FactCheckResult result={result} />
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust indicators section */}
        <section className="py-12 bg-dark-800">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-8">Trusted by Fact-Checkers and Journalists</h2>
              
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                {/* These would be replaced with actual partner logos */}
                <div className="h-10 w-24 bg-gray-500 rounded-md"></div>
                <div className="h-10 w-32 bg-gray-500 rounded-md"></div>
                <div className="h-10 w-28 bg-gray-500 rounded-md"></div>
                <div className="h-10 w-36 bg-gray-500 rounded-md"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
