import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaRocket, FaReact, FaNodeJs, FaDatabase, FaPaintBrush, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Building responsive, performant web applications with modern frameworks and best practices.",
      skills: [
        { icon: FaReact, name: "React & Next.js" },
        { icon: FaPaintBrush, name: "UI/UX Implementation" },
        { icon: FaMobile, name: "Responsive Design" },
        { icon: FaChartLine, name: "Performance Optimization" }
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: FaRocket,
      title: "Full Stack Solutions",
      description: "End-to-end application development from database design to deployment and maintenance.",
      skills: [
        { icon: FaNodeJs, name: "Node.js & Express" },
        { icon: FaDatabase, name: "Database Design" },
        { icon: FaShieldAlt, name: "API Development" },
        { icon: FaRocket, name: "Cloud Deployment" }
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: FaPaintBrush,
      title: "UI/UX Design Implementation",
      description: "Transforming designs into pixel-perfect, interactive experiences with smooth animations.",
      skills: [
        { icon: FaPaintBrush, name: "Design Systems" },
        { icon: FaCode, name: "Component Libraries" },
        { icon: FaMobile, name: "Mobile-First Approach" },
        { icon: FaChartLine, name: "Accessibility (A11y)" }
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-[--color-surface]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[--color-primary] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            What I Do
          </h2>
          <p className="text-[--color-text-muted] max-w-2xl mx-auto text-lg">
            Specialized services to bring your digital vision to life with cutting-edge technology and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group perspective-container"
    >
      <div className="card-premium card-3d hover-lift-3d rounded-2xl p-8 overflow-hidden h-full relative depth-shadow">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-xl animate-glow`}
          >
            <Icon className="text-4xl" />
          </motion.div>

          {/* Title & Description */}
          <h3 className="text-2xl font-bold text-[--color-primary] mb-4 group-hover:gradient-text transition-all">
            {service.title}
          </h3>
          <p className="text-[--color-text-muted] mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Skills List */}
          <div className="space-y-3">
            {service.skills.map((skill, idx) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-[--color-text-main] hover:text-[--color-accent] transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                    <SkillIcon className="text-base" />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
