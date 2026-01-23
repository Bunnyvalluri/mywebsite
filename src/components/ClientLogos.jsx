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
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 30,
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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[--color-text-muted] uppercase tracking-wider mb-2"
          >
            Trusted By
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="perspective-container"
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotateY: 10,
                  rotateX: 10,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card-3d hover-lift-3d relative"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${client.color} rounded-2xl`}
                />

                {/* Rotating Border Effect */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${client.color.split(' ')[1]}, transparent)`,
                    opacity: 0,
                  }}
                />

                <div className="glass rounded-2xl p-6 w-full h-24 flex flex-col items-center justify-center gap-2 border border-[--color-border-custom] hover:border-[--color-accent] transition-all cursor-pointer group relative overflow-hidden">
                  {/* Shimmer Effect on Hover */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />

                  {/* Logo with 3D Animation */}
                  <motion.span
                    className="text-4xl relative z-10"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {client.logo}
                  </motion.span>

                  {/* Name with Gradient on Hover */}
                  <motion.span
                    className="text-xs font-medium text-[--color-text-muted] group-hover:text-[--color-accent] transition-colors relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {client.name}
                  </motion.span>

                  {/* Pulsing Glow Effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${client.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-[--color-text-muted] text-sm"
            whileHover={{ scale: 1.05 }}
          >
            Join <motion.span
              className="font-bold text-[--color-accent]"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              50+
            </motion.span> satisfied clients worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
