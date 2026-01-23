import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--color-surface] border-t border-[--color-border-custom] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Brand */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-black text-[--color-primary] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              VALLURI <span className="gradient-text">RAHUL</span>
            </h3>
            <p className="text-[--color-text-muted] text-sm font-medium">
              Building digital experiences that matter.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <SocialLink href="https://github.com/bunnyvalluri" icon={<FaGithub />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/syntaxrahul/" icon={<FaLinkedin />} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/syntax_bunny?igsh=MXc1enVmcnlpdW5lYg==" icon={<FaInstagram />} label="Instagram" />
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-[--color-text-muted] text-sm flex flex-col items-center md:items-end gap-1">
            <p className="font-medium">&copy; {currentYear} All rights reserved.</p>
            <p className="flex items-center gap-1 justify-center md:justify-end font-medium">
              Made with <FaHeart className="text-red-500 animate-pulse" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-2xl glass border border-[--color-border-custom] flex items-center justify-center text-[--color-text-main] hover:text-[--color-accent] hover:border-[--color-accent] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
    aria-label={label}
  >
    <span className="text-xl">{icon}</span>
  </a>
);

export default Footer;
