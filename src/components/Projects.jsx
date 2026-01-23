import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCloud, FaLeaf, FaMagic, FaStar, FaUsers, FaTachometerAlt, FaCheckCircle, FaFilter } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Cloud Guard",
      subtitle: "Cloud Security Posture Management Platform",
      description: "A comprehensive cloud security solution that helps developers and businesses monitor, analyze, and improve their cloud infrastructure security posture. Built with React and modern security frameworks.",
      tags: ["React", "Node.js", "JavaScript", "Bootstrap"],
      category: ["React", "Full Stack"],
      metrics: [
        { icon: FaTachometerAlt, label: "99.9% Uptime", value: "99.9%" },
        { icon: FaUsers, label: "Active Users", value: "500+" },
        { icon: FaStar, label: "Performance", value: "60fps" }
      ],
      features: [
        "Real-time security monitoring",
        "Automated compliance checks",
        "Custom alert configurations",
        "Detailed analytics dashboard"
      ],
      links: {
        demo: "https://cloud-guard-rho.vercel.app/",
        code: "https://github.com/Bunnyvalluri/CloudGuard.git"
      },
      icon: <FaCloud className="text-6xl text-white opacity-90 group-hover:scale-110 transition-transform duration-500" />,
      gradient: "from-blue-600 to-slate-800",
      overlay: "bg-blue-900/20",
      image: "/cloud-guard.png"
    },
    {
      title: "3D Butterfly Animation",
      subtitle: "Interactive CSS & JavaScript Animation",
      description: "An immersive 3D animation experience showcasing advanced CSS transforms and JavaScript animation techniques. Features realistic butterfly movements with smooth, physics-based animations.",
      tags: ["HTML5", "CSS3", "JavaScript", "Animation"],
      category: ["Frontend", "Animation"],
      metrics: [
        { icon: FaTachometerAlt, label: "Frame Rate", value: "60fps" },
        { icon: FaStar, label: "Load Time", value: "<1s" },
        { icon: FaUsers, label: "Interactions", value: "1000+" }
      ],
      features: [
        "3D CSS transformations",
        "Physics-based animations",
        "Responsive design",
        "Touch-enabled interactions"
      ],
      links: {
        demo: "https://bunnyvalluri.github.io/Butterfly-animation/",
        code: "https://github.com/Bunnyvalluri/Butterfly-animation.git"
      },
      icon: <FaMagic className="text-6xl text-white opacity-90 group-hover:rotate-12 transition-transform duration-500" />,
      gradient: "from-purple-500 to-pink-600",
      overlay: "bg-purple-900/20",
      image: "/butterfly.png"
    },
    {
      title: "Green Quest",
      subtitle: "Environmental Awareness & Action Platform",
      description: "An engaging web application promoting environmental sustainability through gamification and community challenges. Users can track eco-friendly actions and connect with like-minded individuals.",
      tags: ["React", "JavaScript", "Bootstrap", "Node.js"],
      category: ["React", "Full Stack"],
      metrics: [
        { icon: FaUsers, label: "Community", value: "200+" },
        { icon: FaStar, label: "Challenges", value: "50+" },
        { icon: FaCheckCircle, label: "Completion", value: "85%" }
      ],
      features: [
        "Gamification system",
        "Community challenges",
        "Progress tracking",
        "Social sharing features"
      ],
      links: {
        demo: "https://green-quest-2-0.vercel.app/",
        code: "https://github.com/Bunnyvalluri/GreenQuest_2.0.git"
      },
      icon: <FaLeaf className="text-6xl text-white opacity-90 group-hover:text-green-200 transition-colors duration-500" />,
      gradient: "from-emerald-500 to-teal-700",
      overlay: "bg-green-900/20",
      image: "/green-quest.png"
    }
  ];

  const filters = ["All", "React", "Frontend", "Full Stack", "Animation"];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category?.includes(activeFilter) || project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[--color-primary] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[--color-secondary] max-w-2xl mx-auto text-lg">
            Some of my recent work focusing on security, interactivity, and sustainability.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${activeFilter === filter
                  ? 'bg-[--color-accent] text-white border-[--color-accent] shadow-lg shadow-indigo-500/30 ring-2 ring-indigo-500/20'
                  : 'glass text-[--color-text-muted] border-[--color-border-custom] hover:border-[--color-accent] hover:text-[--color-primary]'
                }`}
            >
              {activeFilter === filter && <FaFilter size={10} />}
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group perspective-container"
              >
                <div className="card-premium card-3d hover-lift-3d rounded-2xl overflow-hidden h-full flex flex-col depth-shadow">
                  {/* Project Visual */}
                  <div className="h-56 relative flex items-center justify-center overflow-hidden">
                    {/* Project Image Background */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>

                    {/* Floating Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="relative z-10">
                        {project.icon}
                      </motion.div>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 glass-strong rounded-full text-xs font-bold text-white backdrop-blur-xl shadow-lg">
                      Featured
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 p-4 bg-[--color-surface] border-y border-[--color-border-custom]">
                    {project.metrics.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={idx} className="text-center">
                          <MetricIcon className="text-[--color-accent] mx-auto mb-1 text-base" />
                          <div className="text-sm font-bold text-[--color-primary]">{metric.value}</div>
                          <div className="text-xs text-[--color-secondary] truncate">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[--color-primary] mb-2 group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>
                      <p className="text-[--color-accent] font-semibold text-sm mb-3">{project.subtitle}</p>
                      <p className="text-[--color-text-muted] text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-[--color-primary] mb-2 uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-[--color-text-main] text-xs"
                          >
                            <FaCheckCircle className="text-[--color-success] flex-shrink-0 mt-0.5 text-xs" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 glass rounded-lg text-xs font-medium text-[--color-text-main] border border-[--color-border-custom] hover:border-[--color-accent] transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
                      >
                        <FaExternalLinkAlt size={12} /> Live Demo
                      </a>
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 glass-strong rounded-xl font-bold text-sm border border-[--color-border-custom] hover:border-[--color-accent] text-[--color-primary] hover:-translate-y-1 transition-all duration-300"
                      >
                        <FaGithub size={14} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
