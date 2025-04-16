'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-900">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Introduction</h2>
                <p className="mb-4">
                  This Privacy Policy explains how AI Fact Checker ("we", "us", or "our") collects, uses, and shares your 
                  information when you use our website and services.
                </p>
                <p>
                  We take your privacy seriously and are committed to protecting your personal information. Please read this 
                  policy carefully to understand our practices regarding your data.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
                <p className="mb-4">
                  When you use our fact-checking service, we may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Content you submit for fact-checking:</span> This includes any text, articles, 
                    or statements you submit through our service for analysis.
                  </li>
                  <li>
                    <span className="font-medium">Usage data:</span> Information about how you interact with our website, including 
                    the features you use, the time spent on the site, and pages visited.
                  </li>
                  <li>
                    <span className="font-medium">Device information:</span> Information about your device, such as IP address, 
                    browser type, operating system, and device identifiers.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our fact-checking service</li>
                  <li>Improve and optimize our AI algorithms and models</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Detect and prevent fraud, spam, and abuse</li>
                  <li>Respond to your inquiries and provide customer support</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Data Retention</h2>
                <p>
                  We retain the content you submit for fact-checking for a limited period to provide our service and improve our AI models. 
                  You can request deletion of your content by contacting us at privacy@example.com.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at 
                  privacy@example.com.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  policy on this page and updating the "Last Updated" date.
                </p>
                <p className="mt-4">
                  Last Updated: April 16, 2025
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 