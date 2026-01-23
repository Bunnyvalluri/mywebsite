import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Senior Product Manager, TechCorp",
      quote: "Rahul's attention to detail and technical expertise in frontend development is exceptional. His work on our cloud security platform exceeded expectations, delivering both performance and user experience.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Chen",
      role: "Lead Developer, StartupHub",
      quote: "Working with Rahul on our React project was a pleasure. He brings creative solutions to complex problems and maintains clean, maintainable code throughout.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Design Lead, CreativeStudio",
      quote: "Rahul's ability to blend design aesthetics with technical implementation sets him apart. The animations he created were smooth, performant, and visually stunning.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-[--color-background-custom] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-primary] mb-4">What People Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center p-8 bg-[--color-surface] rounded-2xl border border-[--color-border-custom] shadow-sm"
              >
                <div className="text-[--color-accent] text-4xl mb-6 opacity-30">
                  <FaQuoteLeft />
                </div>

                <p className="text-xl md:text-2xl text-[--color-text-main] italic font-light mb-8 max-w-2xl leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex gap-1 text-yellow-400 mb-4 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div>
                  <h4 className="font-bold text-[--color-primary] text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-[--color-secondary]">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[--color-accent] w-8' : 'bg-[--color-border-custom] hover:bg-[--color-secondary]'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
