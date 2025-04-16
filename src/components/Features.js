import { 
  ShieldCheckIcon, 
  MagnifyingGlassIcon, 
  DocumentCheckIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <MagnifyingGlassIcon className="h-8 w-8 text-primary-500" />,
    title: "Claim Detection",
    description: "Our AI identifies factual claims in text, distinguishing them from opinions and subjective statements."
  },
  {
    icon: <DocumentCheckIcon className="h-8 w-8 text-primary-500" />,
    title: "Fact Verification",
    description: "Claims are verified against trusted sources, providing confidence ratings and references."
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-primary-500" />,
    title: "Real-Time Analysis",
    description: "Get instant results without lengthy wait times, helping you make informed decisions quickly."
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-primary-500" />,
    title: "Trustworthy Sources",
    description: "Our verification system relies on respected news sites, scientific databases, and established fact-checkers."
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our advanced AI-powered system helps you separate fact from fiction through a sophisticated analysis process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:bg-dark-700 transition-colors duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 