import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt,
  FaJs, FaGitAlt, FaDocker, FaAws, FaDatabase, FaFigma
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase,
  SiTypescript, SiNextdotjs, SiExpress, SiRedux
} from 'react-icons/si';

const TechStackShowcase = () => {
  const techCategories = [
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', icon: FaReact, level: 85, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, level: 80, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, color: '#06B6D4' },
        { name: 'HTML5', icon: FaHtml5, level: 45, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
      ]
    },
    {
      category: 'Backend',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs, level: 85, color: '#339933' },
        { name: 'Express', icon: SiExpress, level: 40, color: '#000000' },
        { name: 'Python', icon: FaPython, level: 30, color: '#3776AB' },
      ]
    },
    {
      category: 'Database & Cloud',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 35, color: '#4169E1' },
        { name: 'Firebase', icon: SiFirebase, level: 80, color: '#FFCA28' },
        { name: 'AWS', icon: FaAws, level: 70, color: '#FF9900' },
      ]
    },
    {
      category: 'Tools & Others',
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, level: 75, color: '#2496ED' },
        { name: 'Figma', icon: FaFigma, level: 85, color: '#F24E1E' },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-[--color-background-custom] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[--color-primary] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Tech Stack
          </h2>
          <p className="text-[--color-text-muted] max-w-2xl mx-auto text-lg">
            Cutting-edge technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="perspective-container"
            >
              <div className="card-premium card-3d hover-lift-3d p-8 rounded-2xl">
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}>
                    {category.category}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="space-y-6">
                  {category.technologies.map((tech, techIndex) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        {/* Tech Name & Icon */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.6 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center"
                              style={{ color: tech.color }}
                            >
                              <Icon className="text-xl" />
                            </motion.div>
                            <span className="font-semibold text-[--color-primary]">{tech.name}</span>
                          </div>
                          <span className="text-sm font-bold text-[--color-accent]">{tech.level}%</span>
                        </div>

                        {/* Skill Bar */}
                        <div className="h-2 bg-[--color-surface] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: catIndex * 0.1 + techIndex * 0.05, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[--color-text-muted] text-sm">
            Always learning and exploring new technologies to stay ahead of the curve
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackShowcase;
