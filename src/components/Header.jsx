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
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll detection with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          // Active section detection
          const scrollPosition = window.scrollY + 100;

          // Find the active section
          let currentSection = 'home';
          for (const link of links) {
            const sectionId = link.href.substring(1);
            const element = document.getElementById(sectionId);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                currentSection = sectionId;
                break;
              }
            }
          }

          if (currentSection !== activeSection) {
            setActiveSection(currentSection);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Custom smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-[9999] transition-all duration-500 border-b ${scrolled || isOpen
      ? 'bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md shadow-sm border-[--color-border-custom]'
      : 'bg-transparent border-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              className="group flex items-center gap-2"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <span className="font-black text-2xl text-[--color-primary] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                VALLURI <span className="gradient-text">RAHUL</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-150 transition-transform" />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-full cursor-pointer ${isActive
                    ? 'text-white' // Active text color fixed to white for contrast against accent bg
                    : 'text-[--color-text-main] hover:text-[--color-accent]'
                    }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary] rounded-full -z-0 shadow-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={toggleTheme}
              className="ml-4 p-2.5 rounded-full border border-[--color-border-custom] text-[--color-primary] hover:bg-[--color-surface] hover:border-[--color-accent] transition-all duration-300 active:scale-95"
              aria-label="Toggle Theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-[--color-border-custom] text-[--color-primary] hover:bg-[--color-surface] transition-all"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full border border-[--color-border-custom] text-[--color-primary] hover:bg-[--color-surface] transition-all relative z-50"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Apple Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }} // Apple ease-out curve
            className="md:hidden fixed inset-0 top-[80px] z-[9998] bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-t border-[--color-border-custom]"
          >
            <div className="flex flex-col h-full overflow-y-auto p-6 pb-32">
              <div className="space-y-2 max-w-md mx-auto w-full">
                {links.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-6 py-4 rounded-xl text-lg font-semibold transition-all ${isActive
                        ? 'bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary] text-white shadow-lg'
                        : 'text-[--color-text-main] hover:bg-[--color-surface] active:scale-95'
                        }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
