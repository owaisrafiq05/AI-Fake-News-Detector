import { useState } from 'react';
import { MagnifyingGlassIcon, DocumentTextIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function FactCheckForm({ onSubmit, isLoading }) {
  const [text, setText] = useState('');
  const [textLength, setTextLength] = useState(0);
  const MAX_LENGTH = 5000;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onSubmit(text);
    }
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_LENGTH) {
      setText(value);
      setTextLength(value.length);
    }
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const truncatedText = clipboardText.slice(0, MAX_LENGTH);
      setText(truncatedText);
      setTextLength(truncatedText.length);
    } catch (err) {
      console.error('Failed to read clipboard: ', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="text-input" className="mb-2 text-gray-300 font-medium">
            Enter news article, statement, or claim to fact-check
          </label>
          <div className="relative">
            <textarea
              id="text-input"
              value={text}
              onChange={handleTextChange}
              placeholder="Paste or type the text you want to verify..."
              className="input-field w-full h-40 resize-none"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={handlePaste}
              className="absolute top-2 right-2 text-gray-400 hover:text-white p-1 rounded-md hover:bg-dark-600 transition-colors duration-200"
              title="Paste from clipboard"
              disabled={isLoading}
            >
              <DocumentTextIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-end mt-1">
            <span className={`text-xs ${textLength > MAX_LENGTH * 0.9 ? 'text-yellow-500' : 'text-gray-400'}`}>
              {textLength}/{MAX_LENGTH}
            </span>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className={`btn-primary flex items-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading || !text.trim()}
          >
            {isLoading ? (
              <>
                <ArrowPathIcon className="h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <MagnifyingGlassIcon className="h-5 w-5" />
                Verify Facts
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
} 