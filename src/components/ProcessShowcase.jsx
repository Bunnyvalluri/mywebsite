import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';

const ProcessShowcase = () => {
  const processes = [
    {
      number: '01',
      icon: FaLightbulb,
      title: 'Discovery & Planning',
      description: 'Understanding your vision, goals, and requirements through detailed consultation and research.',
      deliverables: ['Project Roadmap', 'Technical Specifications', 'Timeline & Milestones'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '02',
      icon: FaCode,
      title: 'Design & Development',
      description: 'Crafting pixel-perfect designs and writing clean, scalable code with best practices.',
      deliverables: ['UI/UX Design', 'Frontend Development', 'Backend Architecture'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '03',
      icon: FaCheckCircle,
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing across devices and browsers to ensure flawless performance.',
      deliverables: ['Cross-browser Testing', 'Performance Optimization', 'Security Audit'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      icon: FaRocket,
      title: 'Launch & Support',
      description: 'Smooth deployment and ongoing support to ensure your success.',
      deliverables: ['Deployment', 'Documentation', 'Maintenance & Updates'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[--color-background-custom] relative overflow-hidden">
      {/* Animated Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[--color-primary] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            My <span className="gradient-text">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[--color-text-muted] max-w-2xl mx-auto text-lg"
          >
            A proven methodology that delivers exceptional results every time.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="relative group perspective-container"
              >
                {/* Animated Connecting Line */}
                {index < processes.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[--color-accent] to-transparent -z-10 origin-left"
                  >
                    {/* Animated Dot */}
                    <motion.div
                      animate={{
                        x: [0, 100, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[--color-accent] rounded-full"
                    />
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card-premium card-3d hover-lift-3d p-6 rounded-2xl h-full relative overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${process.color}`}
                  />

                  {/* Number Badge with Animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 text-6xl font-black text-[--color-accent]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {process.number}
                  </motion.div>

                  {/* Animated Icon */}
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.2,
                      type: "spring"
                    }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1
                    }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center text-white mb-4 shadow-xl relative z-10`}
                  >
                    <Icon className="text-2xl" />
                    {/* Pulsing Ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${process.color}`}
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold text-[--color-primary] mb-3 group-hover:gradient-text transition-all relative z-10"
                  >
                    {process.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-[--color-text-muted] text-sm mb-4 leading-relaxed relative z-10"
                  >
                    {process.description}
                  </motion.p>

                  {/* Deliverables with Staggered Animation */}
                  <div className="space-y-2 relative z-10">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                      viewport={{ once: true }}
                      className="text-xs font-bold text-[--color-accent] uppercase tracking-wide"
                    >
                      Deliverables:
                    </motion.p>
                    {process.deliverables.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + 0.7 + idx * 0.1
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-xs text-[--color-text-main]"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.2
                          }}
                          className="w-1.5 h-1.5 rounded-full bg-[--color-success]"
                        />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessShowcase;
