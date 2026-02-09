import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppleLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate fast loading for "instant" feel
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Slight delay before exit
          return 100;
        }
        // Accelerate progress for "snappy" feel
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[--color-background-custom]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-64 max-w-[80%]">
        {/* Minimalist Progress Bar */}
        <div className="h-1 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[--color-primary]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Optional: Subtle Quote or Status */}

      </div>
    </motion.div>
  );
};

export default AppleLoader;
