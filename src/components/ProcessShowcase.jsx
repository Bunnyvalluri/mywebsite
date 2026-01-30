import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';

const ProcessShowcase = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      subtitle: "Understanding the Vision",
      icon: FaLightbulb,
      description: "We start by deep-diving into your requirements, business goals, and target audience to define a rock-solid technical strategy.",
      deliverables: ["Technical Specification", "Project Roadmap", "Architecture Diagram"],
      color: "blue"
    },
    {
      id: "02",
      title: "Architecture & Design",
      subtitle: "Blueprints & Systems",
      icon: FaCode,
      description: "Designing scalable system architectures and intuitive UI/UX prototypes that align with modern web standards.",
      deliverables: ["High-Fidelity Mockups", "Database Schema", "API Contract"],
      color: "purple"
    },
    {
      id: "03",
      title: "Agile Development",
      subtitle: "Sprint-Based Execution",
      icon: FaCode, // Using reusable icon or import specific ones
      description: "Iterative development with bi-weekly sprints, ensuring continuous feedback and transparent progress tracking.",
      deliverables: ["Clean, Tested Code", "CI/CD Setup", "Regular Demos"],
      color: "pink"
    },
    {
      id: "04",
      title: "Launch & Scale",
      subtitle: "Production Ready",
      icon: FaRocket,
      description: "Seamless deployment to production environments with rigorous performance testing and monitoring setup.",
      deliverables: ["Production Deployment", "Documentation", "Post-Launch Support"],
      color: "emerald"
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-[--color-background-custom] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-border-custom) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-border-custom) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[--color-accent]/10 text-[--color-accent] font-bold text-sm mb-4 tracking-wider uppercase">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[--color-primary] mb-6 tracking-tight">
            Development <span className="gradient-text">Workflow</span>
          </h2>
          <p className="text-[--color-text-muted] max-w-2xl mx-auto text-xl leading-relaxed">
            An agile, transparent application lifecycle designed to deliver high-quality software on time and within budget.
          </p>
        </motion.div>

        {/* Timeline Desktop View */}
        <div className="relative hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[--color-border-custom] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <TimelineStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Timeline Mobile View */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <TimelineCardMobile key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Desktop Timeline Step
const TimelineStep = ({ step, index }) => {
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <div className="relative z-10">
      <div className={`flex flex-col items-center ${isEven ? 'flex-col-reverse' : ''}`}>

        {/* Content Card (Top or Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`relative w-full p-6 bg-[--color-surface] border border-[--color-border-custom] rounded-2xl shadow-lg hover:border-[--color-accent] transition-all duration-300 group ${isEven ? 'mb-12' : 'mt-12'}`}
        >
          <div className="absolute -inset-px bg-gradient-to-r from-transparent via-[--color-accent] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl pointer-events-none" />

          <span className="text-5xl font-black text-[--color-border-custom]/50 absolute top-4 right-4 z-0">
            {step.id}
          </span>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-[--color-primary] mb-1">{step.title}</h3>
            <p className="text-xs font-bold text-[--color-accent] uppercase tracking-wider mb-3">{step.subtitle}</p>
            <p className="text-[--color-text-muted] text-sm leading-relaxed mb-4">
              {step.description}
            </p>

            {/* Deliverables */}
            <div className="pt-4 border-t border-[--color-border-custom]">
              <p className="text-xs font-bold text-[--color-primary] mb-2 uppercase">Deliverables:</p>
              <ul className="space-y-1">
                {step.deliverables.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[--color-text-muted]">
                    <FaCheckCircle className="text-[--color-success] text-[10px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Arrow Pointer */}
          <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[--color-surface] border-l border-t border-[--color-border-custom] transform rotate-45 ${isEven ? '-bottom-2 border-b-0 border-r-0' : '-top-2 border-l-0 border-t-0 border-b border-r'}`}></div>
        </motion.div>

        {/* Center Node */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
          viewport={{ once: true }}
          className={`w-14 h-14 rounded-full border-4 border-[--color-background-custom] bg-[--color-surface] shadow-xl flex items-center justify-center relative z-20 group cursor-pointer my-auto`}
        >
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 opacity-20 group-hover:opacity-100 transition-opacity duration-300`} />
          <Icon className={`text-xl text-[--color-primary] group-hover:text-white transition-colors duration-300 relative z-10`} />
        </motion.div>

      </div>
    </div>
  )
}

// Mobile Timeline Card
const TimelineCardMobile = ({ step, index }) => {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full bg-[--color-surface] border border-[--color-border-custom] flex items-center justify-center shrink-0 z-10`}>
          <span className="font-bold text-sm text-[--color-primary]">{step.id}</span>
        </div>
        {index !== 3 && <div className="w-0.5 flex-1 bg-[--color-border-custom] my-2" />}
      </div>

      <div className="bg-[--color-surface] border border-[--color-border-custom] rounded-xl p-6 flex-1 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="text-[--color-accent] text-xl" />
          <h3 className="text-lg font-bold text-[--color-primary]">{step.title}</h3>
        </div>
        <p className="text-[--color-text-muted] text-sm leading-relaxed mb-4">
          {step.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {step.deliverables.map((item, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-[--color-background-custom] rounded text-[--color-text-muted] border border-[--color-border-custom]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProcessShowcase;
