import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaBootstrap, FaDownload, FaArrowRight } from 'react-icons/fa';
import { SiJquery } from 'react-icons/si';
import TypingEffect from './TypingEffect';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Removed heavy background effects for performance */}
      {/* <ParticleBackground /> */}
      {/* <CodeRain /> */}

      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[--color-background-custom] -z-10" style={{ background: 'var(--gradient-mesh)' }} />

      {/* Simplified Gradient Orbs - Static */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full z-10 gap-12">
        {/* Left Content */}
        <div className="w-full md:w-3/5 space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-[--color-accent]/20 text-[--color-accent] font-medium text-sm tracking-wide backdrop-blur-xl shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for New Projects
            </span>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[--color-secondary] font-medium text-lg md:text-xl tracking-wide"
            >
              Hello, I'm Valluri Rahul
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-7xl font-bold text-[--color-primary] tracking-tighter leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Full Stack{' '}
              <span className="gradient-text block md:inline">Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[--color-text-muted] text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed font-mono"
            >
              <TypingEffect
                texts={[
                  "Crafting exceptional digital experiences.",
                  "Building scalable web applications.",
                  "Transforming ideas into reality.",
                  "Specialized in React, Node.js, and Cloud."
                ]}
                speed={50}
                deleteSpeed={30}
                pauseDuration={2000}
              />
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </span>
            </a>

            <a
              href="#projects"
              className="group px-8 py-4 glass-strong rounded-xl font-bold hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 border border-[--color-border-custom] hover:border-[--color-accent]"
            >
              <span className="text-[--color-primary]">View Projects</span>
              <FaArrowRight className="text-[--color-accent] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Simplified 3D Visualization */}
        <div className="hidden md:flex w-2/5 h-[600px] items-center justify-center relative">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center perspective-container">

            {/* Central Core - Static Glow */}
            <div className="absolute w-40 h-40 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-full blur-3xl opacity-40 z-0" />

            <div className="relative z-10 w-32 h-32 glass-strong rounded-3xl border-2 border-[--color-accent]/50 flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-black gradient-text">&lt;/&gt;</span>
            </div>

            {/* Orbit Ring 1 - React & Frontend - Slower Animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 border-2 border-indigo-500/20 rounded-full flex items-center justify-center"
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 glass-strong rounded-2xl shadow-xl border border-blue-500/30"
                whileHover={{ scale: 1.2 }}
              >
                <FaReact className="text-3xl text-[#61DAFB]" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-4 glass-strong rounded-2xl shadow-xl border border-yellow-500/30"
                whileHover={{ scale: 1.2 }}
              >
                <FaJs className="text-3xl text-[#F7DF1E]" />
              </motion.div>
            </motion.div>

            {/* Orbit Ring 2 - Backend & Tools - Slower Animation */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[28rem] h-[28rem] border-2 border-purple-500/20 rounded-full flex items-center justify-center"
            >
              <motion.div
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-4 glass-strong rounded-2xl shadow-xl border border-green-500/30"
                whileHover={{ scale: 1.2 }}
              >
                <FaNodeJs className="text-3xl text-[#339933]" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-4 glass-strong rounded-2xl shadow-xl border border-purple-500/30"
                whileHover={{ scale: 1.2 }}
              >
                <FaBootstrap className="text-3xl text-[#7952B3]" />
              </motion.div>
            </motion.div>

            {/* Removed Floating Particles for Performance */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
