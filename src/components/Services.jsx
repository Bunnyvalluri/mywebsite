import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaRocket, FaReact, FaNodeJs, FaDatabase, FaPaintBrush, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Frontend Architecture",
      badge: "User Centric",
      description: "Building scalable, accessible, and performant user interfaces using modern React ecosystems.",
      features: [
        "Component-Driven Development",
        "Performance Optimization (Core Web Vitals)",
        "Progressive Web Apps (PWA)",
        "Accessible Interactions (WCAG 2.1)"
      ],
      tech: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS"],
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-600/5 to-cyan-500/5"
    },
    {
      icon: FaShieldAlt,
      title: "Backend & Security",
      badge: "Robust & Secure",
      description: "Designing secure, high-concurrency server-side systems and RESTful API architectures.",
      features: [
        "Microservices Architecture",
        "Secure Authentication (OAuth2/JWT)",
        "Database Design & Optimization",
        "Automated CI/CD Pipelines"
      ],
      tech: ["Node.js", "Express", "PostgreSQL/MongoDB", "Docker"],
      gradient: "from-violet-600 to-purple-500",
      bgGradient: "from-violet-600/5 to-purple-500/5"
    },
    {
      icon: FaRocket,
      title: "Full-Stack Solutions",
      badge: "End-to-End",
      description: "Delivering complete digital products from concept to cloud deployment with ongoing support.",
      features: [
        "Product Discovery & Strategy",
        "Agile Development Process",
        "Cloud Infrastructure Setup (AWS)",
        "Real-time Analytics Integration"
      ],
      tech: ["Vercel/AWS", "Github Actions", "Monitoring", "Analytics"],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/5 to-teal-500/5"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[--color-surface]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[--color-accent]/10 text-[--color-accent] font-bold text-sm mb-4 tracking-wider uppercase">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[--color-primary] mb-6 tracking-tight">
            Engineering Excellence
          </h2>
          <p className="text-[--color-text-muted] max-w-3xl mx-auto text-xl leading-relaxed">
            We deliver enterprise-grade software solutions that combine technical precision with business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-[--color-background-custom] border border-[--color-border-custom] hover:border-[--color-accent] rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 flex flex-col relative overflow-hidden">

        {/* Subtle Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Header */}
        <div className="relative z-10 mb-8 flex items-start justify-between">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}>
            <Icon className="text-2xl" />
          </div>
          <span className="px-3 py-1 rounded-full bg-[--color-surface] border border-[--color-border-custom] text-xs font-bold text-[--color-primary] tracking-wide uppercase">
            {service.badge}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1">
          <h3 className="text-2xl font-bold text-[--color-primary] mb-3 group-hover:text-[--color-accent] transition-colors">
            {service.title}
          </h3>
          <p className="text-[--color-text-muted] leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Features List */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-[--color-primary] mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-[--color-accent] rounded-full"></span>
              Core Capabilities
            </h4>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[--color-text-main] text-sm">
                  <FaCheckCircle className="text-[--color-success] text-sm flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer - Tech Stack */}
        <div className="relative z-10 pt-6 border-t border-[--color-border-custom]">
          <div className="flex flex-wrap gap-2">
            {service.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[--color-surface] text-[--color-text-muted] text-xs font-medium border border-[--color-border-custom] group-hover:border-[--color-accent]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default Services;
