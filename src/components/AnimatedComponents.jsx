import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Animated Beam Component (Magic UI inspired)
export const AnimatedBeam = ({ className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`h-0.5 bg-gradient-to-r from-transparent via-[--color-accent] to-transparent ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut"
      }}
    />
  );
};

// Shimmer Button (Aceternity UI inspired)
export const ShimmerButton = ({ children, className = '', onClick, href }) => {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary]" />
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

// Floating Card (3D Tilt Effect)
export const FloatingCard = ({ children, className = '' }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        y: 0,
        scale: 1
      }}
      whileHover={{
        y: -5,
        scale: 1.02
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Gradient Border Card
export const GradientBorderCard = ({ children, className = '' }) => {
  return (
    <div className={`relative group p-[1px] rounded-2xl overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[--color-accent] via-purple-500 to-[--color-accent] opacity-50 group-hover:opacity-100 transition-opacity duration-200 animate-gradient-fast" />
      <div className="relative bg-[--color-surface] rounded-2xl h-full">
        {children}
      </div>
    </div>
  );
};

// Spotlight Card (Aceternity UI inspired)
export const SpotlightCard = ({ children, className = '' }) => {
  const divRef = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-2xl border border-[--color-border-custom] bg-[--color-surface] overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-200"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--color-accent-secondary) 0%, transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// Animated Counter
export const AnimatedCounter = ({ value, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

// Animated Progress Bar
export const AnimatedProgressBar = ({ value, label, color = 'var(--color-accent)' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      {label && (
        <div className="flex justify-between text-sm">
          <span className="font-medium text-[--color-text-main]">{label}</span>
          <span className="text-[--color-secondary]">{value}%</span>
        </div>
      )}
      <div className="h-2 bg-[--color-border-custom] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Magnetic Button (Interactive hover effect)
export const MagneticButton = ({ children, className = '', onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`relative ${className}`}
    >
      {children}
    </motion.button>
  );
};

// Reveal Text Animation
export const RevealText = ({ text, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Particle Background
export const ParticleBackground = ({ particleCount = 50 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
    />
  );
};

// Bento Grid Item (Modern layout component)
export const BentoGridItem = ({
  title,
  description,
  icon,
  className = '',
  gradient = false
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl border border-[--color-border-custom] bg-[--color-surface] p-6 transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-[--color-accent]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className="relative z-10">
        {icon && (
          <div className="mb-4 text-4xl text-[--color-accent]">
            {icon}
          </div>
        )}

        {title && (
          <h3 className="text-xl font-bold text-[--color-primary] mb-2">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-[--color-secondary] leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default {
  AnimatedBeam,
  ShimmerButton,
  FloatingCard,
  GradientBorderCard,
  SpotlightCard,
  AnimatedCounter,
  AnimatedProgressBar,
  MagneticButton,
  RevealText,
  ParticleBackground,
  BentoGridItem,
};
