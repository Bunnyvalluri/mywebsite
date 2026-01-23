import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import ProcessShowcase from './components/ProcessShowcase';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MagneticCursor from './components/MagneticCursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import LiveChat from './components/LiveChat';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Disable Right Click & DevTools
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-[--color-background-custom] text-[--color-text-main] min-h-screen font-sans selection:bg-[--color-accent] selection:text-white transition-colors duration-300 relative overflow-hidden select-none">

      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

      {/* Cinematic Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500">

        {/* LIGHT MODE: Professional Engineering Grid + Aurora */}
        <div className="absolute inset-0 dark:hidden">
          {/* Technical Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Subtle Breathing Aurora */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-indigo-100/50 via-transparent to-blue-100/50 animate-spin-slow opacity-60"></div>
        </div>

        {/* DARK MODE: vivid Cyberpunk Blobs */}
        <div className="hidden dark:block opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[--color-accent] blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[--color-success] blur-[120px] animate-pulse-slow delay-1000"></div>
          <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-purple-500 blur-[100px] animate-blob"></div>
        </div>
      </div>

      <MagneticCursor />
      <ScrollProgressIndicator />
      <LiveChat />

      <div className="relative z-10">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <ProcessShowcase />
          <Projects />
          <ClientLogos />
          <Certifications />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
