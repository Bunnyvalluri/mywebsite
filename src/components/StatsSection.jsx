import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiAward, FiTrendingUp, FiCoffee, FiGithub } from 'react-icons/fi';
import { AnimatedCounter, BentoGridItem } from './AnimatedComponents';

const StatsSection = () => {
  const stats = [
    {
      icon: <FiCode />,
      value: 15,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Production-ready applications',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiUsers />,
      value: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Based on project feedback',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiAward />,
      value: 5,
      suffix: '+',
      label: 'Certifications',
      description: 'Industry recognized',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiTrendingUp />,
      value: 99.9,
      suffix: '%',
      label: 'Uptime',
      description: 'Application reliability',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <FiCoffee />,
      value: 1000,
      suffix: '+',
      label: 'Cups of Coffee',
      description: 'Fueling innovation',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      icon: <FiGithub />,
      value: 500,
      suffix: '+',
      label: 'Commits',
      description: 'This year alone',
      gradient: 'from-indigo-500 to-violet-500'
    }
  ];

  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Cloud Services', level: 75 },
    { name: 'DevOps', level: 70 },
  ];

  return (
    <section className="py-20 bg-[--color-surface] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-border-custom) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-border-custom) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition duration-500 rounded-2xl"
                style={{ backgroundImage: `linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))` }}
              />

              <div className="relative bg-[--color-background-custom] rounded-2xl p-6 border border-[--color-border-custom] h-full transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white`}>
                    {React.cloneElement(stat.icon, { className: 'text-2xl' })}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-black text-[--color-primary]" style={{ fontFamily: 'var(--font-display)' }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-lg font-semibold text-[--color-primary]">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-[--color-secondary]">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[--color-background-custom] rounded-2xl p-8 border border-[--color-border-custom]"
        >
          <h3 className="text-2xl font-bold text-[--color-primary] mb-8 text-center">
            Expertise Breakdown
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[--color-primary]">{skill.name}</span>
                  <span className="text-sm text-[--color-secondary]">{skill.level}%</span>
                </div>

                <div className="h-3 bg-[--color-border-custom] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
