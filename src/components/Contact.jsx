import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaInstagram, FaPhoneAlt, FaTimes } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
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
    <section id="contact" className="py-20 bg-[--color-background-custom] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[--color-primary] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Get In Touch</h2>
          <p className="text-[--color-text-muted] max-w-2xl mx-auto text-lg">
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[--color-primary]">Contact Information</h3>
              <p className="text-[--color-text-main] leading-relaxed">
                Whether you're looking for a full stack engineer or want to collaborate on a project, I'd love to hear from you.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4 text-[--color-text-main]">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-[--color-accent] flex-shrink-0 shadow-lg">
                    <FaEnvelope size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-[--color-text-muted] font-medium">Email</p>
                    <a href="mailto:codewithrahul23@gmail.com" className="font-semibold hover:text-[--color-accent] transition-colors break-all">codewithrahul23@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[--color-text-main]">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-[--color-accent] flex-shrink-0 shadow-lg">
                    <FaPhoneAlt size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-[--color-text-muted] font-medium">Phone</p>
                    <a href="tel:+919505288171" className="font-semibold hover:text-[--color-accent] transition-colors">+91-9505288171</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[--color-text-main]">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-[--color-accent] flex-shrink-0 shadow-lg">
                    <FaMapMarkerAlt size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-[--color-text-muted] font-medium">Location</p>
                    <p className="font-semibold">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-bold text-[--color-primary] mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <SocialLink
                  href="https://www.linkedin.com/in/syntaxrahul/"
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                  color="#0077b5"
                />
                <SocialLink
                  href="https://github.com/bunnyvalluri"
                  icon={<FaGithub />}
                  label="GitHub"
                  color="#2b3137"
                  textColor="#ffffff"
                />
                <SocialLink
                  href="https://www.instagram.com/syntax_bunny?igsh=MXc1enVmcnlpdW5lYg=="
                  icon={<FaInstagram />}
                  label="Instagram"
                  color="#E1306C"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card-premium p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[--color-text-main] mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-[--color-border-custom] text-[--color-text-main] focus:border-[--color-accent] focus:ring-2 focus:ring-[--color-accent]/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[--color-text-main] mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-[--color-border-custom] text-[--color-text-main] focus:border-[--color-accent] focus:ring-2 focus:ring-[--color-accent]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[--color-text-main] mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass border border-[--color-border-custom] text-[--color-text-main] focus:border-[--color-accent] focus:ring-2 focus:ring-[--color-accent]/20 outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[--color-text-main] mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl glass border border-[--color-border-custom] text-[--color-text-main] focus:border-[--color-accent] focus:ring-2 focus:ring-[--color-accent]/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Popup Notification */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-[--color-surface] border border-[--color-success] p-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-[--color-success] text-2xl">
              <FaCheckCircle />
            </div>
            <div>
              <h4 className="font-bold text-[--color-primary]">Message Sent!</h4>
              <p className="text-sm text-[--color-secondary]">Thanks for reaching out! I'll get back to you soon.</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-auto text-[--color-secondary] hover:text-[--color-primary]"
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
