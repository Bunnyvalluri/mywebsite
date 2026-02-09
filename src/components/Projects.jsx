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
              className={`px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${activeFilter === filter
                ? 'btn-filter-active'
                : 'btn-filter-inactive'
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
                <div className="card-premium card-3d hover-lift-3d rounded-2xl overflow-hidden h-full flex flex-col depth-shadow bg-[--color-surface] border border-[--color-border-custom]">
                  {/* Project Visual */}
                  <div className="h-48 relative flex items-center justify-center overflow-hidden group-hover:h-52 transition-all duration-500">
                    {/* Project Image Background */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0f0f16] via-transparent to-transparent opacity-90`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay`}></div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 glass-strong rounded-full text-[10px] font-bold text-white backdrop-blur-xl shadow-lg border border-white/10 uppercase tracking-wider">
                      Featured Project
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex-1 flex flex-col relative z-20">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10 text-white shadow-inner`}>
                          <motion.div whileHover={{ rotate: 15 }} className="relative z-10">
                            {/* Small Icon */}
                            {/* Create a smaller version of the icon for the header */}
                            <div className="text-xl opacity-90">
                              {project.icon.props.className.includes("Fa") ? project.icon : <FaCloud />}
                            </div>
                          </motion.div>
                        </div>
                        <h3 className="text-xl font-bold text-[--color-primary] group-hover:text-[--color-accent] transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-[--color-text-muted] text-sm leading-relaxed line-clamp-3 mb-4 h-16">
                        {project.description}
                      </p>

                      {/* Tech Stack - Minimal */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-[--color-background-custom] rounded-md text-xs font-medium text-[--color-text-secondary] border border-[--color-border-custom]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-[--color-border-custom]/50">
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[--color-primary] text-[--color-background-custom] rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-indigo-500/20"
                      >
                        <FaExternalLinkAlt size={12} /> Visit Site
                      </a>
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[--color-surface] text-[--color-primary] border border-[--color-border-custom] rounded-lg font-semibold text-sm hover:bg-[--color-border-custom] transition-all duration-300"
                      >
                        <FaGithub size={14} /> Source
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
