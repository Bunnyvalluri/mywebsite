import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillsRadar = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'Frontend', value: 90, color: '#6366f1' }, // Indigo
    { name: 'Backend', value: 85, color: '#8b5cf6' },  // Violet
    { name: 'DevOps', value: 75, color: '#ec4899' },   // Pink
    { name: 'UI/UX', value: 80, color: '#f43f5e' },   // Rose
    { name: 'Mobile', value: 70, color: '#06b6d4' },   // Cyan
    { name: 'AI/ML', value: 60, color: '#10b981' },   // Emerald
  ];

  // Radar Chart Configuration
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 100;
  const angleStep = (Math.PI * 2) / skills.length;

  // Helper to calculate points
  const getPoint = (value, index) => {
    const angle = index * angleStep - Math.PI / 2; // Start from top
    const r = (value / 100) * radius;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle)
    };
  };

  // Generate polygon points string
  const points = skills.map((skill, i) => {
    const { x, y } = getPoint(skill.value, i);
    return `${x},${y}`;
  }).join(' ');

  // Generate background polygons (webs)
  const webs = [100, 75, 50, 25].map(level => {
    return skills.map((_, i) => {
      const { x, y } = getPoint(level, i);
      return `${x},${y}`;
    }).join(' ');
  });

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl" />

        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible transform transition-transform duration-500 hover:scale-105">
          {/* Background Web */}
          {webs.map((webPoints, i) => (
            <motion.polygon
              key={i}
              points={webPoints}
              fill="transparent"
              stroke="currentColor"
              strokeOpacity={0.1}
              strokeWidth="1"
              className="text-[--color-text-muted]"
            />
          ))}

          {/* Axis Lines */}
          {skills.map((_, i) => {
            const { x, y } = getPoint(100, i);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeOpacity={0.1}
                strokeWidth="1"
                className="text-[--color-text-muted]"
              />
            );
          })}

          {/* The Data Polygon */}
          <motion.polygon
            points={points}
            fill="rgba(99, 102, 241, 0.2)"
            stroke="#6366f1"
            strokeWidth="3"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 50 }}
            viewport={{ once: true }}
            className="filter drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />

          {/* Data Points (Knobs) */}
          {skills.map((skill, i) => {
            const { x, y } = getPoint(skill.value, i);
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill={skill.color}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 2 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="cursor-pointer"
              />
            );
          })}
        </svg>

        {/* Labels with connecting lines (optional, doing absolute positioning for simplicity) */}
        {skills.map((skill, i) => {
          // Calculate label position slightly outside radius
          const angle = i * angleStep - Math.PI / 2;
          const labelR = radius + 40;
          const x = cx + labelR * Math.cos(angle);
          const y = cy + labelR * Math.sin(angle);

          return (
            <motion.div
              key={i}
              className="absolute text-sm font-semibold text-[--color-text-main]"
              style={{
                left: `${(x / size) * 100}%`,
                top: `${(y / size) * 100}%`,
                transform: 'translate(-50%, -50%)' // Center the label itself
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {skill.name}
            </motion.div>
          )
        })}

        {/* Floating Info Tooltip */}
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-0 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-center"
          >
            <div className="text-white font-bold">{hoveredSkill.name}</div>
            <div className="text-[--color-accent]">{hoveredSkill.value}% Proficiency</div>
          </motion.div>
        )}
      </div>

      <div className="mt-8 text-center max-w-md">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-2">Technical Proficiency</h3>
        <p className="text-[--color-text-muted]">A visual representation of my expertise across different domains of software engineering.</p>
      </div>
    </div>
  );
};

export default SkillsRadar;
