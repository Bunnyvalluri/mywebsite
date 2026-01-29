import React from 'react';
import { motion } from 'framer-motion';
import {
  AnimatedBeam,
  ShimmerButton,
  FloatingCard,
  GradientBorderCard,
  SpotlightCard,
  AnimatedCounter,
  AnimatedProgressBar,
  MagneticButton,
  RevealText,
  BentoGridItem
} from './AnimatedComponents';
import { FiZap, FiStar, FiTrendingUp, FiCode } from 'react-icons/fi';

/**
 * Component Showcase - Demonstrates all new animated components
 * This is for demonstration purposes. You can use individual components in your actual pages.
 */
const ComponentShowcase = () => {
  return (
    <section className="py-20 bg-[--color-background-custom]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[--color-primary] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Component <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-xl text-[--color-secondary]">
            Explore all the new professional components
          </p>
        </div>

        {/* Animated Beam */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[--color-primary] mb-4">Animated Beam</h3>
          <div className="bg-[--color-surface] rounded-2xl p-8 border border-[--color-border-custom]">
            <AnimatedBeam className="w-full mb-4" delay={0} />
            <AnimatedBeam className="w-3/4 mb-4" delay={0.5} />
            <AnimatedBeam className="w-1/2" delay={1} />
          </div>
        </div>

        {/* Buttons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[--color-primary] mb-4">Buttons</h3>
          <div className="bg-[--color-surface] rounded-2xl p-8 border border-[--color-border-custom]">
            <div className="flex flex-wrap gap-4">
              <ShimmerButton>Shimmer Button</ShimmerButton>
              <MagneticButton className="px-8 py-4 bg-[--color-accent] text-white font-semibold rounded-2xl">
                Magnetic Button
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[--color-primary] mb-4">Card Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Floating Card */}
            <FloatingCard>
              <div className="bg-[--color-surface] rounded-2xl p-6 border border-[--color-border-custom]">
                <h4 className="text-xl font-bold text-[--color-primary] mb-2">Floating Card</h4>
                <p className="text-[--color-secondary]">Hover to see 3D tilt effect</p>
              </div>
            </FloatingCard>

            {/* Gradient Border Card */}
            <GradientBorderCard>
              <h4 className="text-xl font-bold text-[--color-primary] mb-2">Gradient Border</h4>
              <p className="text-[--color-secondary]">Animated gradient border on hover</p>
            </GradientBorderCard>

            {/* Spotlight Card */}
            <SpotlightCard>
              <h4 className="text-xl font-bold text-[--color-primary] mb-2">Spotlight Card</h4>
              <p className="text-[--color-secondary]">Move cursor to see spotlight effect</p>
            </SpotlightCard>
          </div>
        </div>

        {/* Animated Counters */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[--color-primary] mb-4">Animated Counters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 15, suffix: '+', label: 'Projects' },
              { value: 99, suffix: '%', label: 'Satisfaction' },
              { value: 1000, suffix: '+', label: 'Commits' },
              { value: 5, suffix: '+', label: 'Years' }
            ].map((stat, i) => (
              <div key={i} className="bg-[--color-surface] rounded-2xl p-6 border border-[--color-border-custom] text-center">
                <div className="text-4xl font-black text-[--color-accent] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[--color-secondary]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[--color-primary] mb-4">Animated Progress Bars</h3>
          <div className="bg-[--color-surface] rounded-2xl p-8 border border-[--color-border-custom] space-y-6">
            <AnimatedProgressBar value={95} label="React" color="var(--color-accent)" />
            <AnimatedProgressBar value={90} label="JavaScript" color="var(--color-success)" />
            <AnimatedProgressBar value={85} label="Node.js" color="var(--color-accent-secondary)" />
            <AnimatedProgressBar value={80} label="CSS" color="var(--color-info)" />
          </div>
        </div>

        {/* Reveal Text */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[--color-primary] mb-4">Reveal Text Animation</h3>
          <div className="bg-[--color-surface] rounded-2xl p-8 border border-[--color-border-custom]">
            <RevealText
              text="This text reveals word by word with smooth animations"
              className="text-3xl font-bold text-[--color-primary]"
            />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[--color-primary] mb-4">Bento Grid Items</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BentoGridItem
              icon={<FiZap />}
              title="Fast Performance"
              description="Optimized for speed with 60fps animations"
              gradient={true}
            />
            <BentoGridItem
              icon={<FiStar />}
              title="Premium Design"
              description="Enterprise-level aesthetics and interactions"
              gradient={true}
            />
            <BentoGridItem
              icon={<FiTrendingUp />}
              title="Scalable"
              description="Built with best practices for growth"
              gradient={true}
            />
            <BentoGridItem
              icon={<FiCode />}
              title="Clean Code"
              description="Maintainable and well-documented"
              gradient={true}
            />
          </div>
        </div>

        {/* Usage Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary] rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">How to Use These Components</h3>
          <div className="space-y-2 text-white/90">
            <p>1. Import the components you need from <code className="bg-white/20 px-2 py-1 rounded">AnimatedComponents.jsx</code></p>
            <p>2. Use them in your existing components or pages</p>
            <p>3. Customize with props and className</p>
            <p>4. Check <code className="bg-white/20 px-2 py-1 rounded">PROFESSIONAL_ENHANCEMENTS.md</code> for full documentation</p>
          </div>
          <div className="mt-6">
            <ShimmerButton className="bg-white text-[--color-accent]">
              View Documentation
            </ShimmerButton>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ComponentShowcase;
