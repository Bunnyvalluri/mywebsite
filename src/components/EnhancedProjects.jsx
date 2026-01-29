import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiStar, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi';
import { SpotlightCard, AnimatedCounter, GradientBorderCard } from './AnimatedComponents';

const EnhancedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = ['All', 'React', 'Full Stack', 'Frontend', 'Web Apps'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A comprehensive e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
      image: '/projects/ecommerce.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      github: 'https://github.com/valluri-rahul/ecommerce',
      demo: 'https://demo.example.com',
      metrics: {
        users: '10K+',
        uptime: '99.9%',
        performance: '95',
        stars: 234
      },
      gradient: 'from-blue-500 to-purple-600',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'React',
      description: 'Collaborative task management platform with real-time updates, drag-and-drop interface, and team collaboration features.',
      image: '/projects/taskmanager.jpg',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/valluri-rahul/task-manager',
      demo: 'https://demo.example.com',
      metrics: {
        users: '5K+',
        uptime: '99.5%',
        performance: '92',
        stars: 156
      },
      gradient: 'from-green-500 to-teal-600',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'Beautiful weather application with interactive maps, 7-day forecasts, and location-based weather alerts.',
      image: '/projects/weather.jpg',
      tags: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      github: 'https://github.com/valluri-rahul/weather-app',
      demo: 'https://demo.example.com',
      metrics: {
        users: '3K+',
        uptime: '99.8%',
        performance: '98',
        stars: 89
      },
      gradient: 'from-cyan-500 to-blue-600',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      category: 'Web Apps',
      description: 'Analytics dashboard for social media management with real-time metrics, post scheduling, and engagement tracking.',
      image: '/projects/social.jpg',
      tags: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/valluri-rahul/social-dashboard',
      demo: 'https://demo.example.com',
      metrics: {
        users: '8K+',
        uptime: '99.7%',
        performance: '94',
        stars: 178
      },
      gradient: 'from-pink-500 to-rose-600',
      featured: true
    },
    {
      id: 5,
      title: 'Portfolio Builder',
      category: 'React',
      description: 'No-code portfolio builder with drag-and-drop interface, customizable templates, and one-click deployment.',
      image: '/projects/portfolio.jpg',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/valluri-rahul/portfolio-builder',
      demo: 'https://demo.example.com',
      metrics: {
        users: '12K+',
        uptime: '99.9%',
        performance: '96',
        stars: 312
      },
      gradient: 'from-violet-500 to-purple-600',
      featured: true
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'Web Apps',
      description: 'Comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.',
      image: '/projects/fitness.jpg',
      tags: ['React', 'Firebase', 'Chart.js', 'PWA'],
      github: 'https://github.com/valluri-rahul/fitness-tracker',
      demo: 'https://demo.example.com',
      metrics: {
        users: '6K+',
        uptime: '99.6%',
        performance: '93',
        stars: 145
      },
      gradient: 'from-orange-500 to-red-600',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[--color-background-custom] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[--color-accent]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[--color-accent-secondary]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[--color-border-custom] mb-6"
          >
            <FiCode className="text-[--color-accent]" />
            <span className="text-sm font-medium text-[--color-secondary]">Featured Work</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[--color-primary] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Projects & <span className="gradient-text">Case Studies</span>
          </h2>

          <p className="text-xl text-[--color-secondary] max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of production-ready applications, each built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeFilter === filter
                  ? 'bg-[--color-accent] text-white shadow-lg shadow-[--color-accent]/50'
                  : 'glass border border-[--color-border-custom] text-[--color-secondary] hover:glass-strong hover:text-[--color-primary]'
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <SpotlightCard className="h-full group cursor-pointer">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />

                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FiCode className="text-6xl text-[--color-border-custom]" />
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-center p-6 gap-4"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                      >
                        <FiGithub className="text-white text-xl" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                      >
                        <FiExternalLink className="text-white text-xl" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-[--color-primary] group-hover:text-[--color-accent] transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary] text-white rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-[--color-secondary] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <FiUsers className="text-[--color-accent]" />
                        <span className="text-[--color-secondary]">
                          <AnimatedCounter value={parseInt(project.metrics.users)} suffix="K+" />
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FiTrendingUp className="text-[--color-success]" />
                        <span className="text-[--color-secondary]">{project.metrics.uptime} uptime</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FiZap className="text-[--color-warning]" />
                        <span className="text-[--color-secondary]">{project.metrics.performance} score</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FiStar className="text-[--color-accent]" />
                        <span className="text-[--color-secondary]">
                          <AnimatedCounter value={project.metrics.stars} /> stars
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-[--color-surface] border border-[--color-border-custom] text-[--color-secondary] rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <GradientBorderCard className="inline-block">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[--color-primary] mb-2">
                  Want to see more?
                </h3>
                <p className="text-[--color-secondary]">
                  Check out my GitHub for additional projects and contributions
                </p>
              </div>
              <a
                href="https://github.com/valluri-rahul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-8 py-4 bg-[--color-accent] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2"
              >
                <FiGithub />
                View GitHub
              </a>
            </div>
          </GradientBorderCard>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedProjects;
