import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    // Initial call
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Progress Bar - Always Visible */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[--color-surface]/30 z-[9998]">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 origin-left shadow-lg shadow-purple-500/50"
          style={{
            width: `${scrollProgress}%`,
            transition: 'width 0.1s ease-out'
          }}
          initial={{ width: 0 }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </motion.div>
      </div>

      {/* Circular Progress Indicator with Scroll to Top */}
      <div className="fixed bottom-8 right-8 z-[9998] hidden md:block">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="relative w-12 h-12"
        >
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="var(--color-border-custom)"
              strokeWidth="3"
              fill="none"
              opacity="0.3"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
              style={{
                transition: 'stroke-dashoffset 0.15s ease-out',
                filter: 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.5))'
              }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {scrollProgress > 20 ? (
              // Scroll to Top Button
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-10 h-10 glass-strong rounded-full flex items-center justify-center hover:bg-[--color-accent]/20 transition-all cursor-pointer group shadow-lg"
                aria-label="Scroll to top"
              >
                <svg
                  className="w-4 h-4 text-[--color-accent] group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            ) : (
              // Percentage Display
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                {Math.round(scrollProgress)}%
              </motion.span>
            )}
          </div>

          {/* Pulsing Ring on Hover */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[--color-accent] opacity-0 group-hover:opacity-50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default ScrollProgressIndicator;
