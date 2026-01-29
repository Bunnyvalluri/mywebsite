import React from 'react';
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
            Bridging <span className="gradient-text">Code</span> & <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>Design</span>
          </h2>
          <p className="text-xl text-[--color-secondary] max-w-2xl mx-auto">
            Combining technical expertise with creative vision to build products that are both functional and beautiful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Developer Side */}
          <div className="relative group perspective-container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-8 relative overflow-visible border-blue-500/20 bg-blue-50/50 dark:bg-blue-900/10">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <FiCode className="text-8xl text-blue-500" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-[--color-primary] mb-4 flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><FiCode /></span>
                    The Developer
                  </h3>
                  <p className="text-[--color-secondary] mb-8 leading-relaxed">
                    Architecting robust, scalable solutions with clean code. Focused on performance, security, and seamless functionality.
                  </p>

                  <div className="space-y-3 mb-8">
                    {['Clean Architecture', 'API Integration', 'Performance Op.', 'Security First'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[--color-secondary]">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <ShimmerButton href="#contact" className="w-full sm:w-auto text-sm group-hover:scale-105 transition-transform">
                    Start Coding <FiArrowRight className="ml-2 inline" />
                  </ShimmerButton>
                </div>

                {/* Floating 3D Character - Developer */}
                <motion.div
                  className="hidden md:block absolute -right-20 -top-24 w-64 h-64 lg:w-80 lg:h-80 pointer-events-none"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src="/assets/3d/developer.png"
                    alt="3D Developer Character"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </motion.div>

                {/* Mobile Image */}
                <div className="md:hidden mt-8 flex justify-center">
                  <img
                    src="/assets/3d/developer.png"
                    alt="3D Developer Character"
                    className="w-48 h-48 object-contain filter drop-shadow-xl"
                  />
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Designer Side */}
          <div className="relative group perspective-container mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-8 relative overflow-visible border-pink-500/20 bg-pink-50/50 dark:bg-pink-900/10">
                <div className="absolute top-0 left-0 p-4 opacity-10">
                  <FiPenTool className="text-8xl text-pink-500" />
                </div>

                <div className="relative z-10 lg:pl-4"> {/* Added padding left for desktop to separate from image overlap if needed, though layout handles it */}
                  {/* Floating 3D Character - Designer (Left side for variety on desktop) */}
                  <motion.div
                    className="hidden md:block absolute -left-24 -bottom-12 w-64 h-64 lg:w-80 lg:h-80 pointer-events-none z-20"
                    animate={{
                      y: [0, 20, 0],
                      rotate: [0, -2, 0]
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <img
                      src="/assets/3d/designer.png"
                      alt="3D Designer Character"
                      className="w-full h-full object-contain filter drop-shadow-2xl"
                    />
                  </motion.div>

                  <div className="lg:ml-32"> {/* Offset content to make room for character on left */}
                    <h3 className="text-3xl font-bold text-[--color-primary] mb-4 flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-pink-500/10 text-pink-500"><FiPenTool /></span>
                      The Designer
                    </h3>
                    <p className="text-[--color-secondary] mb-8 leading-relaxed">
                      Crafting intuitive user experiences with pixel-perfect precision. Prioritizing aesthetics, accessibility, and user delight.
                    </p>

                    <div className="space-y-3 mb-8">
                      {['UI/UX Design', 'Visual Identity', 'Motion Graphics', 'Design Systems'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[--color-secondary]">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <ShimmerButton href="#contact" className="w-full sm:w-auto text-sm bg-gradient-to-r from-pink-500 to-orange-400 group-hover:scale-105 transition-transform">
                      Start Designing <FiArrowRight className="ml-2 inline" />
                    </ShimmerButton>
                  </div>

                  {/* Mobile Image */}
                  <div className="md:hidden mt-8 flex justify-center">
                    <img
                      src="/assets/3d/designer.png"
                      alt="3D Designer Character"
                      className="w-48 h-48 object-contain filter drop-shadow-xl"
                    />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements for atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
          <motion.div
            className="absolute top-20 left-[10%] text-4xl text-blue-500/20 font-mono font-bold"
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            {"</>"}
          </motion.div>
          <motion.div
            className="absolute bottom-40 right-[10%] text-4xl text-pink-500/20 font-bold"
            animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          >
            {"#"}
          </motion.div>
          <motion.div
            className="absolute top-40 right-[20%] w-8 h-8 rounded-full bg-purple-500/10"
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

      </div>
    </section>
  );
};

export default ThreeDCharacterShowcase;
