import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll detection - Optimized
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple but robust active section detection
      const scrollPosition = window.scrollY + 120;

      for (const link of links) {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const { offsetTop, offsetHeight } = section;
          // Check if we are within the section bounds
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial active state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${scrolled
      ? 'bg-[--color-background-custom]/90 backdrop-blur-md border-b border-[--color-border-custom] shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span className="text-2xl font-bold tracking-tighter text-[--color-text-main]">
                VALLURI <span className="text-indigo-500 group-hover:text-purple-500 transition-colors">RAHUL</span>
              </span>
            </a>
          </motion.div>

          {/* Desktop Menu - Classic Style */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm font-medium transition-colors duration-300 relative group cursor-pointer ${activeSection === link.href.substring(1)
                  ? 'text-[--color-text-main]'
                  : 'text-[--color-text-muted] hover:text-[--color-text-main]'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </motion.a>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full border border-[--color-border-custom] text-[--color-text-muted] hover:text-[--color-text-main] hover:bg-[--color-surface] transition-all text-xl"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[--color-border-custom] text-[--color-text-muted] text-xl"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[--color-text-main] p-2 text-2xl"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[--color-background-custom]/98 backdrop-blur-xl border-b border-[--color-border-custom] shadow-2xl z-[9998]"
          >
            <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block text-lg font-medium transition-colors py-3 px-4 rounded-lg ${activeSection === link.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600'
                    : 'text-[--color-text-main] hover:bg-[--color-surface]'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
