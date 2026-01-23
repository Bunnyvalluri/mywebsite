import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const ScrollProgressIndicator = () => {
  const [showButton, setShowButton] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Optimize state updates to avoid re-renders on every scroll tick
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const val = Math.round(latest * 100);
    if (val !== percentage) {
      setPercentage(val);
    }

    if (latest > 0.2 && !showButton) {
      setShowButton(true);
    } else if (latest <= 0.2 && showButton) {
      setShowButton(false);
    }
  });

  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = useTransform(scaleX, [0, 1], [circumference, 0]);

  return (
    <>
      {/* Top Progress Bar - Always Visible */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[--color-surface]/30 z-[9998]">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 origin-left shadow-lg shadow-purple-500/50"
          style={{ scaleX }}
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
              strokeDasharray={`${circumference}`}
              style={{ strokeDashoffset }}
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
            {showButton ? (
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
                {percentage}%
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
