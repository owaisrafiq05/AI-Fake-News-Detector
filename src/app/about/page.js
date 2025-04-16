'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-900">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header section */}
        <section className="py-16 bg-dark-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl font-bold text-white mb-6">About AI Fact Checker</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We're on a mission to combat misinformation by empowering people with AI-powered 
                fact-checking tools that are accessible to everyone.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-16 bg-dark-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300 mb-4">
                    In today's digital world, misinformation spreads at unprecedented speeds across social media 
                    and news platforms. This erosion of trust makes it increasingly difficult for users to 
                    discern what's true from what's false.
                  </p>
                  <p className="text-gray-300">
                    We've built an AI-powered tool that automatically detects and verifies factual claims in text content, 
                    providing users with timely alerts and credible sources to make informed decisions.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-4">Our Technology</h2>
                  <p className="text-gray-300 mb-4">
                    Our system leverages state-of-the-art Natural Language Processing models to parse input text,
                    identify verifiable factual claims, and distinguish them from opinions or subjective statements.
                  </p>
                  <p className="text-gray-300">
                    We compare these claims against a curated set of trusted sources through our fact-matching engine,
                    providing confidence ratings and direct references to help you understand the whole picture.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-16 bg-dark-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-semibold text-white mb-2">How accurate is the fact-checking?</h3>
                  <p className="text-gray-300">
                    Our AI system is designed to provide high accuracy in identifying and verifying claims. However, like any AI system, 
                    it's not infallible. We recommend using our tool as a starting point for fact verification rather than the final word.
                    We always provide references to our sources so you can verify the information yourself.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-xl font-semibold text-white mb-2">What sources do you use?</h3>
                  <p className="text-gray-300">
                    We use a diverse range of reputable sources including established news organizations, academic journals, 
                    scientific databases, and credible fact-checking organizations. We're committed to political neutrality
                    and prioritize factual accuracy above all else.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-xl font-semibold text-white mb-2">How does the AI detect claims?</h3>
                  <p className="text-gray-300">
                    Our AI uses advanced natural language processing techniques to parse text and identify statements 
                    that make verifiable factual assertions. It's trained to distinguish between opinions ("I think taxes are too high") 
                    and factual claims ("The federal income tax rate increased by 2% last year").
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 