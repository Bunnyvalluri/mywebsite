import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

const ErrorState = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-[--color-surface] border border-red-500/20 rounded-xl">
      <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4 text-red-500">
        <FaExclamationTriangle className="text-xl" />
      </div>
      <h3 className="text-lg font-bold text-[--color-primary] mb-2">Error Loading Data</h3>
      <p className="text-[--color-text-muted] text-sm mb-6 max-w-xs">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-[--color-surface] border border-[--color-border-custom] hover:border-[--color-accent] text-[--color-primary] rounded-lg text-sm font-medium transition-all"
        >
          <FaRedo className="text-xs" /> Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
