import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaInstagram, FaPhoneAlt, FaTimes } from 'react-icons/fa';

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

  const services = ["Web Development", "Mobile App", "UI/UX Design", "Consulting", "Other"];
  const budgets = ["< $1k", "$1k - $5k", "$5k - $10k", "$10k+"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Append ?_redirect=false to prevent Formspark from redirecting to their success page
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
          _email.subject: `New Inquiry: ${formData.service} from ${formData.name}`, // Custom subject for email
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
  <section id="contact" className="py-24 bg-[--color-background-custom] relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[--color-accent]/5 rounded-full blur-3xl -z-10"></div>
    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[--color-accent-secondary]/5 rounded-full blur-3xl -z-10"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[--color-border-custom] mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-[--color-secondary]">Available for new projects</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-[--color-primary] mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          Let's <span className="gradient-text">Collaborate</span>
        </h2>
        <p className="text-[--color-text-muted] max-w-2xl mx-auto text-lg leading-relaxed">
          Have a project in mind? I specialize in building scalable, robust software solutions.
          Fill out the form below to get started.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Contact Info & Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="card-premium p-8 rounded-3xl border border-[--color-border-custom] bg-[--color-surface]">
            <h3 className="text-2xl font-bold text-[--color-primary] mb-6">Contact Details</h3>

            <div className="space-y-6">
              <a href="mailto:codewithrahul23@gmail.com" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[--color-background-custom] transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-[--color-text-muted] font-medium mb-1">Email Me</p>
                  <p className="text-[--color-text-main] font-semibold text-lg break-all">codewithrahul23@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919505288171" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[--color-background-custom] transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-[--color-text-muted] font-medium mb-1">Call Me</p>
                  <p className="text-[--color-text-main] font-semibold text-lg">+91 95052 88171</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[--color-background-custom] transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-[--color-text-muted] font-medium mb-1">Location</p>
                  <p className="text-[--color-text-main] font-semibold text-lg">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[--color-border-custom]">
              <h4 className="text-sm font-bold text-[--color-text-muted] uppercase tracking-wider mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <SocialLink href="https://www.linkedin.com/in/syntaxrahul/" icon={<FaLinkedin />} label="LinkedIn" color="#0077b5" />
                <SocialLink href="https://github.com/bunnyvalluri" icon={<FaGithub />} label="GitHub" color="#2b3137" textColor="#fff" />
                <SocialLink href="https://www.instagram.com/syntax_bunny?igsh=MXc1enVmcnlpdW5lYg==" icon={<FaInstagram />} label="Instagram" color="#E1306C" />
              </div>
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[--color-primary] to-[--color-secondary] text-white shadow-xl relative overflow-hidden hidden lg:block">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <FaPaperPlane className="text-4xl text-white/20 mb-4" />
            <blockquote className="text-lg font-medium italic mb-4">
              "Quality is not an act, it is a habit. Let's build software that stands the test of time."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">VR</div>
              <div>
                <p className="font-bold">Valluri Rahul</p>
                <p className="text-sm text-white/70">Full Stack Engineer</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-premium p-8 md:p-10 rounded-3xl border border-[--color-border-custom] shadow-2xl bg-[--color-surface] relative"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-[--color-primary] ml-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[--color-background-custom] border border-[--color-border-custom] text-[--color-text-main] focus:border-[--color-accent] focus:ring-4 focus:ring-[--color-accent]/10 outline-none transition-all placeholder:text-[--color-text-muted]/50 font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-[--color-primary] ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[--color-background-custom] border border-[--color-border-custom] text-[--color-text-main] focus:border-[--color-accent] focus:ring-4 focus:ring-[--color-accent]/10 outline-none transition-all placeholder:text-[--color-text-muted]/50 font-medium"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-[--color-primary] ml-1">Service Required</label>
              <div className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => selectService(s)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 ${formData.service === s
                        ? 'bg-[--color-primary] text-white border-[--color-primary] shadow-lg shadow-[--color-primary]/20 transform scale-105'
                        : 'bg-[--color-background-custom] text-[--color-text-muted] border-[--color-border-custom] hover:border-[--color-accent] hover:text-[--color-accent]'
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-[--color-primary] ml-1">Project Budget (USD)</label>
              <div className="flex flex-wrap gap-3">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => selectBudget(b)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 ${formData.budget === b
                        ? 'bg-[--color-accent] text-white border-[--color-accent] shadow-lg shadow-[--color-accent]/20 transform scale-105'
                        : 'bg-[--color-background-custom] text-[--color-text-muted] border-[--color-border-custom] hover:border-[--color-accent] hover:text-[--color-accent]'
                      }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-[--color-primary] ml-1">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-5 py-4 rounded-xl bg-[--color-background-custom] border border-[--color-border-custom] text-[--color-text-main] focus:border-[--color-accent] focus:ring-4 focus:ring-[--color-accent]/10 outline-none transition-all placeholder:text-[--color-text-muted]/50 font-medium resize-none"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-white font-bold rounded-xl shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-[position:right_center] disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending Proposal...</span>
                </>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-[--color-text-muted]">
              I usually respond within 24 hours.
            </p>
          </form>
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
          className="fixed bottom-8 right-8 z-[9999] bg-[--color-surface] border border-green-500/20 p-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm backdrop-blur-xl"
          style={{ boxShadow: '0 20px 50px -12px rgba(0, 255, 0, 0.15)' }}
        >
          <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-2xl animate-[bounce_1s_infinite]">
            <FaCheckCircle />
          </div>
          <div>
            <h4 className="font-bold text-[--color-primary] text-lg">Inquiry Sent!</h4>
            <p className="text-sm text-[--color-text-muted]">I'll review your details and get back to you shortly.</p>
          </div>
          <button
            onClick={() => setShowPopup(false)}
            className="ml-auto text-[--color-text-muted] hover:text-[--color-text-main] p-2"
          >
            <FaTimes />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
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
