import { useState, useEffect, lazy, Suspense } from 'react';
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
const Hero = lazy(() => import('./components/Hero'));
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
import AppleLoader from './components/AppleLoader';

// Enhanced lazy load components (optional - can be swapped in)
// const EnhancedHero = lazy(() => import('./components/EnhancedHero'));
// const StatsSection = lazy(() => import('./components/StatsSection'));
// const EnhancedProjects = lazy(() => import('./components/EnhancedProjects'));
// const EnhancedTestimonials = lazy(() => import('./components/EnhancedTestimonials'));
// const EnhancedContact = lazy(() => import('./components/EnhancedContact'));
const ThreeDCharacterShowcase = lazy(() => import('./components/ThreeDCharacterShowcase'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
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
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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

      {/* Loading Screen */}
      <Suspense fallback={null}>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      </Suspense>

      {/* Cinematic Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500">

        {/* LIGHT MODE: Professional Engineering Grid + Aurora */}
        <div className="absolute inset-0 dark:hidden">
          {/* Technical Grid Pattern - Static and Performant */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Subtle Breathing Aurora - Only on Desktop */}
          <div className="hidden md:block absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-indigo-100/50 via-transparent to-blue-100/50 animate-spin-slow opacity-60"></div>

          {/* Mobile Static Gradient - Lighter */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white/50"></div>
        </div>

        {/* DARK MODE: vivid Cyberpunk Blobs */}
        <div className="hidden dark:block opacity-20">
          {/* Only animate on Desktop */}
          <div className="hidden md:block absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[--color-accent] blur-[120px] animate-pulse-slow"></div>
          <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[--color-success] blur-[120px] animate-pulse-slow delay-1000"></div>
          <div className="hidden md:block absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-purple-500 blur-[100px] animate-blob"></div>

          {/* Mobile Static Glow - Optimized */}
          <div className="md:hidden absolute top-0 left-0 w-full h-1/2 bg-[--color-accent]/10 blur-[80px]"></div>
          <div className="md:hidden absolute bottom-0 right-0 w-full h-1/2 bg-[--color-success]/10 blur-[80px]"></div>
        </div>
      </div>

      <Suspense fallback={null}>
        <MagneticCursor />
      </Suspense>

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
            <Suspense fallback={<ComponentSkeleton variant="hero" />}>
              <Hero />
            </Suspense>
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

          {/* Services Section */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton variant="grid" />}>
              <Services />
            </Suspense>
          </ErrorBoundary>

          {/* 3D Character Showcase */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton height="500px" />}>
              <ThreeDCharacterShowcase />
            </Suspense>
          </ErrorBoundary>

          {/* Process Showcase */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<ComponentSkeleton height="500px" />}>
              <ProcessShowcase />
            </Suspense>
          </ErrorBoundary>

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
