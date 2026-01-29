import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiQuote } from 'react-icons/fi';

const EnhancedTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Inc.',
      image: '/testimonials/sarah.jpg',
      rating: 5,
      text: 'Working with Rahul was an absolute pleasure. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The project was delivered ahead of schedule with exceptional quality.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      image: '/testimonials/michael.jpg',
      rating: 5,
      text: 'Rahul\'s technical expertise and problem-solving skills are outstanding. He built our entire frontend architecture from scratch, implementing best practices and creating a scalable solution that exceeded our expectations.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Creative Studios',
      image: '/testimonials/emily.jpg',
      rating: 5,
      text: 'The collaboration was seamless! Rahul has a great eye for design and was able to bring our vision to life with pixel-perfect precision. His code is clean, maintainable, and follows industry best practices.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Founder',
      company: 'InnovateLab',
      image: '/testimonials/david.jpg',
      rating: 5,
      text: 'Exceptional work! Rahul not only delivered a high-quality product but also provided valuable insights that improved our overall user experience. His communication throughout the project was clear and professional.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'GrowthCo',
      image: '/testimonials/lisa.jpg',
      rating: 5,
      text: 'Our website performance improved dramatically after Rahul\'s optimization work. Load times decreased by 60%, and user engagement increased significantly. Highly recommend his services!',
      gradient: 'from-indigo-500 to-violet-500'
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        size={20}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-[--color-background-custom] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[--color-accent]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[--color-accent-secondary]/20 rounded-full blur-3xl" />
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
            <FiQuote className="text-[--color-accent]" />
            <span className="text-sm font-medium text-[--color-secondary]">Client Testimonials</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[--color-primary] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            What Clients <span className="gradient-text">Say</span>
          </h2>

          <p className="text-xl text-[--color-secondary] max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it - hear from clients who've experienced the difference
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="relative"
            >
              <div className="group relative">
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${testimonials[activeIndex].gradient} rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition duration-500`} />

                <div className="relative bg-[--color-surface] rounded-3xl p-8 md:p-12 border border-[--color-border-custom]">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 opacity-10">
                    <FiQuote className="text-8xl text-[--color-accent]" />
                  </div>

                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-xl md:text-2xl text-[--color-text-main] leading-relaxed mb-8 italic">
                      "{testimonials[activeIndex].text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeIndex].gradient} flex items-center justify-center text-white text-2xl font-bold`}>
                        {testimonials[activeIndex].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[--color-primary]">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-[--color-secondary]">
                          {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-4 rounded-xl glass border border-[--color-border-custom] hover:glass-strong text-[--color-primary] transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                      ? 'w-8 bg-[--color-accent]'
                      : 'w-2 bg-[--color-border-custom] hover:bg-[--color-accent]/50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-4 rounded-xl glass border border-[--color-border-custom] hover:glass-strong text-[--color-primary] transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonial Grid (Small Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary] rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

              <div className="relative bg-[--color-surface] rounded-2xl p-6 border border-[--color-border-custom] h-full">
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-sm text-[--color-secondary] mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-[--color-primary] text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-[--color-secondary]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
