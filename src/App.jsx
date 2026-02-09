import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './components/Header';
import MagneticCursor from './components/MagneticCursor';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import {
  ComponentSkeleton,
  ErrorFallback,
  optimizeFontLoading
} from './components/LazyLoadWrapper';

// Lazy load components for better performance
// Standard components - Using original versions
// Hero is critical - load eagerly
import Hero from './components/Hero';
// ... other lazy imports
const Stats = lazy(() => import('./components/Stats'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const ProcessShowcase = lazy(() => import('./components/ProcessShowcase'));
const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const ClientLogos = lazy(() => import('./components/ClientLogos'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const LiveChat = lazy(() => import('./components/LiveChat'));


// Enhanced lazy load components (commented out)
// const EnhancedHero = lazy(() => import('./components/EnhancedHero'));
// const StatsSection = lazy(() => import('./components/StatsSection'));
// const EnhancedProjects = lazy(() => import('./components/EnhancedProjects'));
// const EnhancedTestimonials = lazy(() => import('./components/EnhancedTestimonials'));
// const EnhancedContact = lazy(() => import('./components/EnhancedContact'));
const ThreeDCharacterShowcase = lazy(() => import('./components/ThreeDCharacterShowcase'));

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Optimize font loading on mount
  useEffect(() => {
    optimizeFontLoading();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      // Update Favicon to Dark Mode version
      const link = document.querySelector("link[rel~='icon']");
      if (link) link.href = '/favicon-dark.svg?v=3';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      // Update Favicon to Light Mode version
      const link = document.querySelector("link[rel~='icon']");
      if (link) link.href = '/favicon.svg?v=2';
    }
  }, [darkMode]);

  // Disable Inspect Element and Right Click
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
      }
    };

    const handleDoubleClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dblclick', handleDoubleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dblclick', handleDoubleClick);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-[--color-background-custom] text-[--color-text-main] min-h-screen font-sans selection:bg-[--color-accent] selection:text-white transition-colors duration-300 relative overflow-hidden select-none">



      {/* Simplified Background - Performance Optimized */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* LIGHT MODE: Simple Static Gradient */}
        <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/30"></div>

        {/* DARK MODE: Simple Static Gradient */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-[--color-background-custom] via-purple-950/10 to-[--color-background-custom]"></div>
      </div>

      {/* Disabled for Performance - Uncomment if needed */}
      {/* <Suspense fallback={null}>
        <MagneticCursor />
      </Suspense> */}

      <Suspense fallback={null}>
        <ScrollProgressIndicator />
      </Suspense>

      <Suspense fallback={null}>
        <LiveChat />
      </Suspense>

      <div className="relative z-10">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />

        <main>
          {/* Hero Section - Critical, load immediately */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Hero />
          </ErrorBoundary>

          {/* Stats Section */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton height="300px" />}>
              <Stats />
            </Suspense>
          </ErrorBoundary>

          {/* About Section */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton height="600px" />}>
              <About />
            </Suspense>
          </ErrorBoundary>

          {/* Services Section - Hidden for original view */}
          {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton variant="grid" />}>
              <Services />
            </Suspense>
          </ErrorBoundary> */}

          {/* 3D Character Showcase */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton height="500px" />}>
              <ThreeDCharacterShowcase />
            </Suspense>
          </ErrorBoundary>

          {/* Process Showcase - Hidden for original view */}
          {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton height="500px" />}>
              <ProcessShowcase />
            </Suspense>
          </ErrorBoundary> */}

          {/* Projects Section */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton variant="grid" />}>
              <Projects />
            </Suspense>
          </ErrorBoundary>

          {/* Client Logos */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton height="200px" />}>
              <ClientLogos />
            </Suspense>
          </ErrorBoundary>

          {/* Certifications */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton variant="grid" />}>
              <Certifications />
            </Suspense>
          </ErrorBoundary>

          {/* Testimonials */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton variant="card" />}>
              <Testimonials />
            </Suspense>
          </ErrorBoundary>

          {/* Contact Section */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton height="600px" />}>
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </main>

        {/* Footer */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<ComponentSkeleton height="300px" />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
