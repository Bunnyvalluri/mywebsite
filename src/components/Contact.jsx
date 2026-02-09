import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaInstagram, FaPhoneAlt, FaTimes, FaMagic } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    budget: '$1k - $5k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Colorful services with specific gradient borders/bg
  const services = [
    { id: "Web Development", color: "from-blue-400 to-cyan-400" },
    { id: "Mobile App", color: "from-purple-400 to-pink-400" },
    { id: "UI/UX Design", color: "from-orange-400 to-red-400" },
    { id: "Consulting", color: "from-green-400 to-emerald-400" },
    { id: "Other", color: "from-gray-400 to-slate-400" }
  ];

  const budgets = ["< $1k", "$1k - $5k", "$5k - $10k", "$10k+"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://submit-form.com/RRB6NqsxA?_redirect=false', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          "_email.subject": `New Inquiry: ${formData.service} from ${formData.name}`,
        })
      });

      if (response.ok) {
        setFormData({ name: '', email: '', service: 'Web Development', budget: '$1k - $5k', message: '' });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        console.error('Submission error:', data);
        alert('There was an issue sending your message. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectService = (service) => {
    setFormData({ ...formData, service });
  };

  const selectBudget = (budget) => {
    setFormData({ ...formData, budget });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-500">
      {/* Dynamic Colorful Background - Light & Dark Mode Compatible */}
      <div className="absolute inset-0 bg-[--color-background-custom] transition-colors duration-500"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card border border-white/20 dark:border-white/10 mb-8 shadow-xl backdrop-blur-md bg-white/5"
          >
            <FaMagic className="text-yellow-400 animate-spin-slow" />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">Open for Collaboration</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-[--color-primary] mb-6 tracking-tight relative inline-block">
            Let's create <br className="hidden md:block" />
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Magic Together</span>
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-400 opacity-40" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.00025 5.50002C2.00025 5.50002 48.0003 12.0001 100 5.50002C152 0.500021 200 4 200 4"></path></svg>
            </span>
          </h2>
          <p className="text-[--color-text-muted] max-w-2xl mx-auto text-xl leading-relaxed font-light">
            Ready to transform your ideas into reality? I combine <span className="text-[--color-accent] font-semibold">technical expertise</span> with <span className="text-pink-500 font-semibold">creative design</span> to build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Contact Cards & Info - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-[2.5rem] overflow-hidden group"
            >
              {/* Card Background with Mesh Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/5 dark:to-white/0 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-none transition-all duration-300"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-[--color-primary] mb-8">Contact Info</h3>

                <div className="space-y-6">
                  {/* Email Card */}
                  <a href="mailto:codewithrahul23@gmail.com" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 group/item border border-transparent hover:border-white/20">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover/item:scale-110 transition-transform duration-300">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-[--color-text-muted] font-bold uppercase tracking-wider mb-1">Email</p>
                      <p className="text-[--color-text-main] font-bold text-lg break-all group-hover/item:text-blue-500 transition-colors">codewithrahul23@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone Card */}
                  <a href="tel:+919505288171" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 group/item border border-transparent hover:border-white/20">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover/item:scale-110 transition-transform duration-300">
                      <FaPhoneAlt size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-[--color-text-muted] font-bold uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-[--color-text-main] font-bold text-lg group-hover/item:text-green-500 transition-colors">+91 95052 88171</p>
                    </div>
                  </a>

                  {/* Location Card */}
                  <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 group/item border border-transparent hover:border-white/20">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover/item:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-[--color-text-muted] font-bold uppercase tracking-wider mb-1">Location</p>
                      <p className="text-[--color-text-main] font-bold text-lg">Hyderabad, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-[--color-border-custom]/50">
                  <h4 className="text-sm font-black text-[--color-text-muted] uppercase tracking-widest mb-6">Socials</h4>
                  <div className="flex gap-4">
                    <SocialLink href="https://www.linkedin.com/in/syntaxrahul/" icon={<FaLinkedin />} label="LinkedIn" color="#0077b5" />
                    <SocialLink href="https://github.com/bunnyvalluri" icon={<FaGithub />} label="GitHub" color="#2b3137" textColor="#fff" />
                    <SocialLink href="https://www.instagram.com/syntax_bunny?igsh=MXc1enVmcnlpdW5lYg==" icon={<FaInstagram />} label="Instagram" color="#E1306C" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Form - Spans 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            {/* Form Container with Glassmorphism */}
            <div className="relative rounded-[2.5rem] bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-2xl p-8 md:p-12 overflow-hidden">
              {/* Decorative Corner Gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-[100%] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-[100%] pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-[--color-text-muted] ml-1 uppercase tracking-wider group-focus-within:text-[--color-accent] transition-colors">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-[--color-background-custom] border-2 border-transparent focus:border-[--color-accent] focus:bg-[--color-surface] outline-none transition-all font-semibold text-[--color-text-main] placeholder:text-[--color-text-muted]/30 shadow-inner"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-[--color-text-muted] ml-1 uppercase tracking-wider group-focus-within:text-[--color-accent] transition-colors">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-[--color-background-custom] border-2 border-transparent focus:border-[--color-accent] focus:bg-[--color-surface] outline-none transition-all font-semibold text-[--color-text-main] placeholder:text-[--color-text-muted]/30 shadow-inner"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-bold text-[--color-text-muted] ml-1 uppercase tracking-wider">I'm interested in...</label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => selectService(s.id)}
                        className={`px-5 py-3 rounded-xl text-sm font-bold border-2 transition-all duration-300 relative overflow-hidden group ${formData.service === s.id
                            ? `bg-gradient-to-r ${s.color} text-white border-transparent shadow-lg transform scale-105`
                            : 'bg-[--color-surface] text-[--color-text-secondary] border-[--color-border-custom] hover:border-[--color-accent]/50'
                          }`}
                      >
                        <span className="relative z-10">{s.id}</span>
                        {formData.service !== s.id && (
                          <div className={`absolute inset-0 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        )}
                        {formData.service !== s.id && (
                          <span className="relative z-10 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300 absolute inset-0 flex items-center justify-center">{s.id}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-bold text-[--color-text-muted] ml-1 uppercase tracking-wider">Project Budget</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => selectBudget(b)}
                        className={`px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all duration-300 ${formData.budget === b
                            ? 'bg-[--color-primary] text-[--color-background-custom] border-[--color-primary] shadow-lg transform scale-105'
                            : 'bg-[--color-surface] text-[--color-text-secondary] border-[--color-border-custom] hover:border-[--color-primary] hover:text-[--color-primary]'
                          }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-[--color-text-muted] ml-1 uppercase tracking-wider group-focus-within:text-[--color-accent] transition-colors">Tell me about your project</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-[--color-background-custom] border-2 border-transparent focus:border-[--color-accent] focus:bg-[--color-surface] outline-none transition-all font-medium text-[--color-text-main] placeholder:text-[--color-text-muted]/30 shadow-inner resize-none"
                    placeholder="Describe your goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%_auto] hover:bg-[position:right_center] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Magic...</span>
                    </>
                  ) : (
                    <>
                      <span>Start Collaboration</span>
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[9999] bg-white/90 dark:bg-black/90 border border-green-500/20 p-6 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] flex items-center gap-5 max-w-sm backdrop-blur-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-3xl shadow-lg shadow-green-500/30 animate-[bounce_1s_infinite]">
              <FaCheckCircle />
            </div>
            <div>
              <h4 className="font-black text-[--color-primary] text-lg mb-1">Inquiry Sent!</h4>
              <p className="text-sm font-medium text-[--color-text-secondary]">I'll be in touch very soon.</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-auto text-[--color-text-muted] hover:text-[--color-text-main] p-2 bg-transparent hover:bg-black/5 rounded-full transition-colors"
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes custom-bounce {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

const SocialLink = ({ href, icon, label, color, textColor = "white" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-2xl glass border border-[--color-border-custom] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2"
    style={{
      backgroundColor: 'var(--color-surface)',
      color: color
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = color;
      e.currentTarget.style.color = textColor;
      e.currentTarget.style.borderColor = color;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'var(--color-surface)';
      e.currentTarget.style.color = color;
      e.currentTarget.style.borderColor = 'var(--color-border-custom)';
    }}
    aria-label={label}
  >
    <span className="text-xl">{icon}</span>
  </a>
);

export default Contact;
