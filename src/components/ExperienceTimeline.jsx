import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const ExperienceCard = ({ experience, index, isLeft }) => {
  return (
    <div className={`flex items-center justify-between mb-16 w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Spacer for centering */}
      <div className="hidden md:block w-5/12" />

      {/* Center Line Node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[--color-surface] border-4 border-[--color-accent] z-10 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
        <experience.icon className="text-[--color-accent] text-lg" />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-[calc(100%-60px)] md:w-5/12 ml-16 md:ml-0 p-6 glass-strong rounded-2xl border border-[--color-border-custom] hover:border-[--color-accent] transition-colors group relative overflow-hidden"
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <div className="relative z-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[--color-accent]/10 text-[--color-accent] mb-2">
            {experience.period}
          </span>
          <h3 className="text-xl font-bold text-[--color-text-main] mb-1">{experience.role}</h3>
          <h4 className="text-[--color-secondary] font-medium mb-4">{experience.company}</h4>
          <p className="text-[--color-text-muted] text-sm leading-relaxed mb-4">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-[--color-surface] border border-[--color-border-custom] rounded text-[--color-text-muted]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      id: 1,
      role: "Senior Full Stack Engineer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      description: "Leading a team of 5 developers to build scalable microservices architecture. Improved system performance by 40% and reduced deployment time by 60%.",
      skills: ["React", "Node.js", "Kubernetes", "AWS"],
      icon: FaBriefcase
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2023",
      description: "Developed and maintained multiple client-facing web applications. Implemented real-time features using WebSockets and optimized database queries.",
      skills: ["Vue.js", "Django", "PostgreSQL", "Redis"],
      icon: FaCode
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Creative Agency",
      period: "2019 - 2021",
      description: "Collaborated with designers to implement pixel-perfect user interfaces. Assisted in migrating legacy codebases to modern frameworks.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      icon: FaGraduationCap
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[--color-background-main] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[--color-primary] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-[--color-text-muted] max-w-2xl mx-auto">
            A timeline of my growth, learning, and contributions in the tech world.
          </p>
        </motion.div>

        <div ref={ref} className="relative mt-10">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[--color-border-custom] -translate-x-1/2" />

          {/* Animated Vertical Line Fill */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-[--color-accent] to-purple-500 -translate-x-1/2 origin-top"
            style={{ scaleY, height: '100%' }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
