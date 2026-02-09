import { motion } from 'framer-motion';

const ClientLogos = () => {
  // Placeholder logos - replace with actual client logos
  const clients = [
    { name: 'Tech Corp', logo: '🚀', color: 'from-blue-500 to-cyan-500' },
    { name: 'Digital Solutions', logo: '💼', color: 'from-purple-500 to-pink-500' },
    { name: 'Innovation Labs', logo: '⚡', color: 'from-yellow-500 to-orange-500' },
    { name: 'Cloud Systems', logo: '☁️', color: 'from-indigo-500 to-blue-500' },
    { name: 'Data Dynamics', logo: '📊', color: 'from-green-500 to-emerald-500' },
    { name: 'Web Masters', logo: '🌐', color: 'from-red-500 to-rose-500' },
  ];

  return (
    <section className="py-16 bg-[--color-surface] border-y border-[--color-border-custom] relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[--color-text-muted] uppercase tracking-wider mb-2"
          >
            Trusted By
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-black text-[--color-primary]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Amazing <span className="gradient-text">Clients</span>
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1] // Apple's ease-out curve
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="relative"
              >
                {/* Subtle Glow on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute -inset-2 bg-gradient-to-br ${client.color} rounded-2xl blur-xl`}
                />

                <div className="glass rounded-2xl p-6 w-full h-24 flex flex-col items-center justify-center gap-2 border border-[--color-border-custom] group-hover:border-[--color-accent] transition-all duration-200 cursor-pointer relative overflow-hidden bg-[--color-surface]">
                  {/* Simple Shimmer Effect */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />

                  {/* Logo with Simple Scale */}
                  <motion.span
                    className="text-4xl relative z-10 group-hover:rotate-[360deg] transition-transform duration-500"
                  >
                    {client.logo}
                  </motion.span>

                  {/* Name */}
                  <span className="text-xs font-medium text-[--color-text-muted] group-hover:text-[--color-accent] transition-colors duration-200 relative z-10">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[--color-text-muted] text-sm">
            Join <span className="font-bold text-[--color-accent]">50+</span> satisfied clients worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
