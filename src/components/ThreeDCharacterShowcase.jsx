import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPenTool, FiArrowRight } from 'react-icons/fi';
import { ShimmerButton, SpotlightCard } from './AnimatedComponents';

const ThreeDCharacterShowcase = () => {
  return (
    <section className="py-24 bg-[--color-background-custom] overflow-hidden relative">
      {/* Background Decor items */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[--color-accent]/10 text-[--color-accent] text-sm font-semibold mb-4 border border-[--color-accent]/20">
            Workflow & Collaborators
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[--color-primary] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="gradient-text">Code</span> + <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>Design</span>
          </h2>
          <p className="text-xl text-[--color-secondary] max-w-2xl mx-auto">
            A seamless fusion of technical logic and creative expression.
          </p>
        </motion.div>

        <div className="space-y-12">

          {/* Developer Card - Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-0 border-blue-500/20 bg-blue-50/30 dark:bg-blue-900/10 overflow-hidden">
              <div className="flex flex-col-reverse md:flex-row items-center">
                {/* Text Content */}
                <div className="w-full md:w-3/5 p-8 md:p-12 z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-blue-500/10 text-blue-500 shadow-sm">
                      <FiCode size={24} />
                    </span>
                    <h3 className="text-3xl font-bold text-[--color-primary]">The Developer</h3>
                  </div>

                  <p className="text-lg text-[--color-secondary] mb-8 leading-relaxed">
                    Building the backbone of modern web applications. I focus on writing clean, scalable code that powers complex functionalities with ease. Performance, security, and architecture are my priorities.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {['React Ecosystem', 'Node.js Backend', 'Cloud Architect', 'Security First'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-[--color-primary]">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <ShimmerButton href="#contact" className="w-full md:w-auto">
                    Start Coding <FiArrowRight className="ml-2 inline" />
                  </ShimmerButton>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto min-h-[300px] flex items-center justify-center bg-gradient-to-br from-blue-100/50 to-transparent dark:from-blue-900/20">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full flex items-center justify-center p-6"
                  >
                    {/* Abstract BG Shape */}
                    <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl scale-75" />

                    <img
                      src="/assets/3d/developer.png"
                      alt="Developer Character"
                      className="w-auto h-full max-h-[350px] object-contain relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Designer Card - Image Left (Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-0 border-pink-500/20 bg-pink-50/30 dark:bg-pink-900/10 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center">

                {/* Image Content */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto min-h-[300px] flex items-center justify-center bg-gradient-to-br from-pink-100/50 to-transparent dark:from-pink-900/20">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full flex items-center justify-center p-6"
                  >
                    {/* Abstract BG Shape */}
                    <div className="absolute inset-0 bg-pink-500/5 rounded-full blur-3xl scale-75" />

                    <img
                      src="/assets/3d/designer.png"
                      alt="Designer Character"
                      className="w-auto h-full max-h-[350px] object-contain relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-3/5 p-8 md:p-12 z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-pink-500/10 text-pink-500 shadow-sm">
                      <FiPenTool size={24} />
                    </span>
                    <h3 className="text-3xl font-bold text-[--color-primary]">The Designer</h3>
                  </div>

                  <p className="text-lg text-[--color-secondary] mb-8 leading-relaxed">
                    Crafting intuitive interfaces that delight users. I believe in design that works, combining aesthetics with usability principles to create engaging digital experiences.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {['UI/UX Design', 'Design Systems', 'Interactive Prototyping', 'Accessibility'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-[--color-primary]">
                        <div className="w-2 h-2 rounded-full bg-pink-500" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <ShimmerButton href="#contact" className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-orange-400 border-none">
                    Start Designing <FiArrowRight className="ml-2 inline" />
                  </ShimmerButton>
                </div>

              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ThreeDCharacterShowcase;
