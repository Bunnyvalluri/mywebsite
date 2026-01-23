import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward, FaCheckCircle, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy / Coursera",
      date: "2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070", // Coding generic
      color: "from-blue-500 to-cyan-500",
      link: "https://drive.google.com/drive/folders/1pcWXkrH66WRgXkqJtkiSRlFfxfosKcLL?usp=drive_link"
    },
    {
      id: 2,
      title: "Frontend Development React",
      issuer: "HackerRank / LinkedIn",
      date: "2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070", // React generic
      color: "from-indigo-500 to-purple-500",
      link: "https://drive.google.com/drive/folders/1pcWXkrH66WRgXkqJtkiSRlFfxfosKcLL?usp=drive_link"
    },
    {
      id: 3,
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2023",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=1974", // Code generic
      color: "from-yellow-500 to-orange-500",
      link: "https://drive.google.com/drive/folders/1pcWXkrH66WRgXkqJtkiSRlFfxfosKcLL?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-[--color-surface] border-y border-[--color-border-custom]">
      {/* Background Noise/Gradient */}
      <div className="absolute inset-0 bg-[--color-background-custom] opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-[--color-accent]/20 text-[--color-accent] text-sm font-semibold mb-4 shadow-lg shadow-indigo-500/10">
            <FaCertificate /> Credentials & Badges
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[--color-primary] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Validated <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-[--color-text-muted] max-w-2xl mx-auto text-lg">
            Professional certifications that demonstrate my commitment to technical excellence and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative perspective-container"
            >
              {/* Glow Behind */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />

              <div className="relative glass-strong p-1.5 rounded-2xl border border-[--color-border-custom] group-hover:border-[--color-accent] transition-all duration-300 overflow-hidden h-full flex flex-col hover-lift-3d">
                {/* Image/Banner Area */}
                <div className="h-48 rounded-t-xl bg-black relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent mix-blend-multiply`} />

                  {/* Verification Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-2 rounded-full shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaAward className="text-xl text-yellow-400" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-4 left-4 z-20">
                    <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-1">{cert.issuer}</p>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[--color-text-main] leading-tight mb-2 group-hover:text-[--color-accent] transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[--color-text-muted]">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Issued: {cert.date}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[--color-border-custom] flex items-center justify-between">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-[--color-accent] hover:text-[--color-primary] transition-colors group/link"
                    >
                      Verify Credential
                      <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 transition-transform" />
                    </a>

                    {/* Hover Tooltip/Badge */}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-green-500">
                      <FaCheckCircle className="text-xl" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
