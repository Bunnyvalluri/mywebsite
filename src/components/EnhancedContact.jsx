import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle } from 'react-icons/fi';
import { SpotlightCard, ShimmerButton } from './AnimatedComponents';

// Form submission endpoint
const FORM_ENDPOINT = 'https://submit-form.com/RRB6NqsxA';

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'vallurirahul@example.com',
      href: 'mailto:vallurirahul@example.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXXXXXXX',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: 'https://maps.google.com',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/valluri-rahul', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/valluri-rahul', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/valluri-rahul', label: 'Twitter' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    // Let the form submit naturally to submit-form.com
    setIsSubmitting(true);
  };

  return (
    <section id="contact" className="py-20 bg-[--color-background-custom] relative overflow-hidden">
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
            <FiSend className="text-[--color-accent]" />
            <span className="text-sm font-medium text-[--color-secondary]">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[--color-primary] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Let's Work <span className="gradient-text">Together</span>
          </h2>

          <p className="text-xl text-[--color-secondary] max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="h-full">
              <form action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden field for redirect after submission */}
                <input type="hidden" name="_redirect" value="https://valluri-rahul-portfolio.vercel.app/?success=true" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[--color-primary] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[--color-surface] border border-[--color-border-custom] text-[--color-text-main] focus:outline-none focus:ring-2 focus:ring-[--color-accent] transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[--color-primary] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[--color-surface] border border-[--color-border-custom] text-[--color-text-main] focus:outline-none focus:ring-2 focus:ring-[--color-accent] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[--color-primary] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[--color-surface] border border-[--color-border-custom] text-[--color-text-main] focus:outline-none focus:ring-2 focus:ring-[--color-accent] transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[--color-primary] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl bg-[--color-surface] border border-[--color-border-custom] text-[--color-text-main] focus:outline-none focus:ring-2 focus:ring-[--color-accent] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-8 py-4 bg-[--color-accent] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FiCheckCircle />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </SpotlightCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <div className="relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />

                    <div className="relative bg-[--color-surface] rounded-2xl p-6 border border-[--color-border-custom] transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${info.gradient} text-white`}>
                          <info.icon className="text-2xl" />
                        </div>
                        <div>
                          <p className="text-sm text-[--color-secondary] mb-1">{info.label}</p>
                          <p className="text-lg font-semibold text-[--color-primary]">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[--color-surface] rounded-2xl p-6 border border-[--color-border-custom]"
            >
              <h3 className="text-xl font-bold text-[--color-primary] mb-4">
                Connect on Social Media
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative p-4 rounded-xl glass border border-[--color-border-custom] text-[--color-secondary] hover:text-[--color-accent] transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                    <div className="absolute inset-0 rounded-xl bg-[--color-accent]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary] rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <h3 className="text-xl font-bold">Currently Available</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities. Let's create something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;
