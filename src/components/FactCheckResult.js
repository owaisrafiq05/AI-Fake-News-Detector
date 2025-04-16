import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const resultIcons = {
  true: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
  false: <XCircleIcon className="h-6 w-6 text-red-500" />,
  misleading: <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />,
  unverified: <InformationCircleIcon className="h-6 w-6 text-gray-400" />
};

const resultColors = {
  true: 'bg-green-900/20 border-green-700',
  false: 'bg-red-900/20 border-red-700',
  misleading: 'bg-yellow-900/20 border-yellow-700',
  unverified: 'bg-gray-800/40 border-gray-700'
};

const resultLabels = {
  true: 'True',
  false: 'False',
  misleading: 'Misleading',
  unverified: 'Unverified'
};

export default function FactCheckResult({ result }) {
  if (!result) return null;
  
  const { status, text, explanation, sources } = result;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`card ${resultColors[status]} mb-6`}
    >
      <div className="flex items-center gap-3 mb-4">
        {resultIcons[status]}
        <h3 className="text-xl font-semibold">{resultLabels[status]}</h3>
      </div>
      
      <div className="mb-4">
        <h4 className="text-gray-300 font-medium mb-2">Claim:</h4>
        <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-300">
          {text}
        </blockquote>
      </div>
      
      <div className="mb-4">
        <h4 className="text-gray-300 font-medium mb-2">Analysis:</h4>
        <p className="text-gray-400">
          {explanation}
        </p>
      </div>
      
      {sources && sources.length > 0 && (
        <div>
          <h4 className="text-gray-300 font-medium mb-2">Sources:</h4>
          <ul className="space-y-2">
            {sources.map((source, index) => (
              <li key={index} className="text-sm">
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 hover:underline"
                >
                  {source.name || source.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
} 