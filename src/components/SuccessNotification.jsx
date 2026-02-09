import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const SuccessNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if URL has success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShow(true);

      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setShow(false);
      }, 5000);

      // Clean up URL without reloading
      window.history.replaceState({}, '', window.location.pathname);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-full max-w-md px-4"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-50"></div>

            {/* Notification card */}
            <div className="relative bg-[--color-surface] border-2 border-green-500/30 rounded-2xl shadow-2xl p-4 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                {/* Success icon with animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 400, damping: 15 }}
                  className="flex-shrink-0"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg font-bold text-[--color-primary] mb-1"
                  >
                    Message Sent Successfully! 🎉
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-[--color-text-secondary] leading-relaxed"
                  >
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </motion.p>
                </div>

                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setShow(false)}
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-[--color-background-custom] hover:bg-red-500/10 text-[--color-text-muted] hover:text-red-500 transition-all duration-200 flex items-center justify-center group"
                  aria-label="Close notification"
                >
                  <FaTimes className="text-sm group-hover:rotate-90 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* Progress bar */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 5, ease: 'linear' }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl origin-left"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessNotification;
