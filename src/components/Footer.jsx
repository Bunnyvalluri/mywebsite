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
            <SocialLink href="https://github.com/bunnyvalluri" icon={<FaGithub />} label="GitHub" bgColor="bg-[#333]" />
            <SocialLink href="https://www.linkedin.com/in/syntaxrahul/" icon={<FaLinkedin />} label="LinkedIn" bgColor="bg-[#0077B5]" />
            <SocialLink href="https://www.instagram.com/syntax_bunny?igsh=MXc1enVmcnlpdW5lYg==" icon={<FaInstagram />} label="Instagram" bgColor="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]" />
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

const SocialLink = ({ href, icon, label, bgColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center text-white hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg group`}
      aria-label={label}
    >
      <span className="text-xl group-hover:rotate-[360deg] transition-transform duration-500 inline-block">{icon}</span>
    </a>
  );
};

export default Footer;
