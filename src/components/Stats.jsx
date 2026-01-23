import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaCode, FaProjectDiagram, FaUsers, FaTrophy } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: FaCode,
      value: 3,
      suffix: '+',
      label: 'Projects Completed',
      color: '#3B82F6'
    },
    {
      icon: FaUsers,
      value: 5,
      suffix: '+',
      label: 'Happy Clients',
      color: '#10B981'
    },
    {
      icon: FaProjectDiagram,
      value: 6,
      suffix: '+',
      label: 'Months Experience',
      color: '#F59E0B'
    },
    {
      icon: FaTrophy,
      value: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      color: '#8B5CF6'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[--color-accent]/10 to-[--color-success]/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[--color-accent] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[--color-success] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-primary] mb-4">
            Achievements & Impact
          </h2>
          <p className="text-[--color-secondary] max-w-2xl mx-auto">
            Delivering excellence through numbers that matter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = stat.icon;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(stat.value);
    }
  }, [isInView, motionValue, stat.value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="bg-[--color-surface] rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-[--color-border-custom] group"
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:shadow-lg transition-shadow"
        style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
      >
        <Icon className="text-3xl" />
      </motion.div>

      <div className="text-4xl md:text-5xl font-bold text-[--color-primary] mb-2">
        <span ref={ref}>0</span>
        <span>{stat.suffix}</span>
      </div>

      <p className="text-[--color-secondary] font-medium">
        {stat.label}
      </p>
    </motion.div>
  );
};

export default Stats;
