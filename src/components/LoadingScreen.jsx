import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => onLoadingComplete(), 200);
          }, 200);
          return 100;
        }
        // Much faster loading: increments between 10 and 40 (avg 25), causing ~4 steps
        return prev + Math.random() * 30 + 10;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (isComplete) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[--color-background-custom] flex items-center justify-center"
    >
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto relative">
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-4 border-transparent border-t-[--color-accent] rounded-full"
            />
            {/* Inner Circle */}
            <div className="absolute inset-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
                R
              </span>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-[--color-primary] mb-4"
        >
          Loading Portfolio
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-[--color-surface] rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/20 animate-shimmer" />
          </motion.div>
        </div>

        {/* Progress Percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[--color-text-muted] mt-4 text-sm"
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
