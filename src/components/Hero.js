import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-dark-900 py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-br from-primary-600/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              AI-Powered <span className="text-primary-400">Fact Checking</span> for Truth in Media
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our advanced AI tool analyzes news articles, social media posts, and claims in real-time 
              to help you distinguish fact from fiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#fact-check"
                className="btn-primary text-center"
              >
                Try It Now
              </a>
              <a 
                href="/about"
                className="btn-secondary text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-[360px] h-[360px] md:w-[450px] md:h-[450px]">
              <Image
                src="/hero-image.svg"
                alt="AI Fact Checking Illustration"
                className="object-contain"
                priority
                width={450}
                height={450}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 