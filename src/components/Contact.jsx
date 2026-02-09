import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaInstagram, FaTerminal, FaCode, FaTimes, FaPhoneAlt } from 'react-icons/fa';

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

  // Professional service options
  const services = [
    "Full Stack Dev",
    "Cybersecurity",
    "Cloud Architecture",
    "AI/ML Integration",
    "Mobile Development",
    "DevOps",
    "UI/UX Design",
    "Blockchain"
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
          "_email.subject": `Dev Portfolio Inquiry: ${formData.service} from ${formData.name}`,
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

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[--color-background-custom]">
      {/* Tech Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        {/* Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Info & Context */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 font-mono text-sm mb-6">
              <FaTerminal className="text-xs" />
              <span>contact.init()</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[--color-primary] mb-6 tracking-tight leading-tight">
              Let's Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                Your Vision.
              </span>
            </h2>

            <p className="text-[--color-text-muted] text-lg mb-10 leading-relaxed max-w-lg">
              I specialize in building scalable, high-performance web applications. Whether you need a complex SaaS platform or a sleek marketing site, I write code that matters.
            </p>

            <div className="space-y-6 mb-12">
              <ContactCard
                icon={<FaEnvelope />}
                label="Email"
                value="codewithrahul23@gmail.com"
                href="mailto:codewithrahul23@gmail.com"
                accentColor="bg-blue-500"
              />
              <ContactCard
                icon={<FaMapMarkerAlt />}
                label="Location"
                value="Hyderabad, India"
                accentColor="bg-violet-500"
                href="#"
              />
              <ContactCard
                icon={<FaPhoneAlt />}
                label="Phone"
                value="+91 95052 88171"
                accentColor="bg-green-500"
                href="tel:+919505288171"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-[--color-text-muted] uppercase tracking-widest mb-4">Connect on Socials</p>
              <div className="flex gap-4">
                <SocialBtn href="https://github.com/bunnyvalluri" icon={<FaGithub />} label="GitHub" bgColor="bg-[#333]" />
                <SocialBtn href="https://www.linkedin.com/in/syntaxrahul/" icon={<FaLinkedin />} label="LinkedIn" bgColor="bg-[#0077B5]" />
                <SocialBtn href="https://www.instagram.com/syntax_bunny?igsh=MXc1enVmcnlpdW5lYg==" icon={<FaInstagram />} label="Instagram" bgColor="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative p-8 md:p-10 rounded-2xl bg-[--color-surface] border-2 border-[--color-border-custom] shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-[--color-primary]">Start a Project</h3>
                  <FaCode className="text-[--color-text-muted] text-xl opacity-50 group-hover:rotate-[360deg] transition-transform duration-500" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-[--color-text-muted] mb-3">Service Required</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: s })}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border-2 shadow-sm ${formData.service === s
                            ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                            : 'bg-[--color-background-custom] border-[--color-border-custom] text-[--color-text-secondary] hover:border-blue-500/50 hover:shadow-md'
                            }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-[--color-text-muted] mb-3">Project Budget</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {budgets.map(b => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border-2 text-center shadow-sm ${formData.budget === b
                            ? 'bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-500/30 scale-105'
                            : 'bg-[--color-background-custom] border-[--color-border-custom] text-[--color-text-secondary] hover:border-violet-500/50 hover:shadow-md'
                            }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[--color-text-muted]">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-[--color-background-custom] border-2 border-[--color-border-custom] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-[--color-text-main] placeholder:text-[--color-text-muted]/50 outline-none transition-all resize-none shadow-sm hover:border-blue-400/50"
                      placeholder="Tell me about your project goals and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-500/25 disabled:opacity-70 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[--color-surface] border border-[--color-border-custom] p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-[--color-text-muted] hover:text-[--color-primary]"
              >
                <FaTimes />
              </button>
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-3xl text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-[--color-primary] mb-2">Message Sent!</h3>
              <p className="text-[--color-text-secondary]">Thanks for reaching out. I'll get back to you within 24 hours.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Sub-components for cleaner code
const InputField = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-[--color-text-muted]">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 rounded-xl bg-[--color-background-custom] border-2 border-[--color-border-custom] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-[--color-text-main] placeholder:text-[--color-text-muted]/50 outline-none transition-all shadow-sm hover:border-blue-400/50"
      placeholder={placeholder}
    />
  </div>
);

const ContactCard = ({ icon, label, value, href, accentColor }) => {
  // Map accent colors to actual color values with background
  const colorMap = {
    'bg-blue-500': { icon: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
    'bg-violet-500': { icon: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' },
    'bg-green-500': { icon: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' }
  };

  const colors = colorMap[accentColor] || { icon: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' };

  return (
    <a
      href={href}
      className="flex items-center gap-4 p-4 rounded-xl bg-[--color-surface] border border-[--color-border-custom] hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 group"
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-500"
        style={{
          color: colors.icon,
          backgroundColor: colors.bg
        }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-[--color-text-muted] uppercase tracking-wider">{label}</p>
        <p className="text-[--color-text-main] font-medium group-hover:text-blue-500 transition-colors">{value}</p>
      </div>
    </a>
  );
};

const SocialBtn = ({ href, icon, label, bgColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center text-white hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg group`}
      aria-label={label}
    >
      <span className="group-hover:rotate-[360deg] transition-transform duration-500 inline-block text-xl">
        {icon}
      </span>
    </a>
  );
};

export default Contact;
