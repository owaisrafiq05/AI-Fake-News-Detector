import { PulseLoader } from 'react-spinners';

export default function Loader({ text = 'Processing' }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <PulseLoader 
        color="#36a6f6" 
        size={15}
        margin={6}
        speedMultiplier={0.8}
      />
      <p className="mt-6 text-gray-300 animate-pulse">{text}</p>
    </div>
  );
} 