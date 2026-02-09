import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaShieldAlt, FaGraduationCap, FaTrophy, FaJs, FaReact, FaNodeJs, FaBootstrap, FaAws, FaGitAlt, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiJquery } from 'react-icons/si';
import SkillsRadar from './SkillsRadar';

const About = () => {
  const achievements = [
    { id: "01", title: "Developed Responsive Web Apps", desc: "Using React and Node.js, enhancing user experience and improving application performance." },
    { id: "02", title: "Collaborated on Projects", desc: "With cross-functional teams to define requirements, ensuring timely delivery of high-quality software." },
    { id: "03", title: "Implemented RESTful APIs", desc: "For seamless integration between front-end and back-end systems, optimizing data flow and efficiency." },
    { id: "04", title: "Conducted Code Reviews", desc: "To ensure adherence to best practices, improving overall code quality and maintainability." }
  ];

  const education = [
    {
      school: "Narsimha Reddy Engineering College",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Hyderabad, India.",
      year: "Expected August 2027",
      details: "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks"
    },
    {
      school: "S R Junior College",
      degree: "Intermediate Education (1st & 2nd Year)",
      location: "Telangana, India.",
      year: "2021 - 2023",
      details: ""
    },
    {
      school: "Sharada Vidya Bhavan High School",
      degree: "Secondary School Education",
      location: "Telangana, India.",
      year: "2021",
      details: ""
    }
  ];

  const skills = [
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 90 },
    { name: "React", icon: FaReact, color: "#61DAFB", level: 85 },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 80 },
    { name: "jQuery", icon: SiJquery, color: "#0769AD", level: 85 },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", level: 90 },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
    { name: "Git", icon: FaGitAlt, color: "#F05032", level: 85 },
    { name: "AWS", icon: FaAws, color: "#FF9900", level: 70 }
  ];

  return (
    <section id="about" className="py-20 bg-[--color-background-custom]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image & Achievements */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex justify-center md:justify-start"
            >
              <div className="absolute inset-0 bg-[--color-accent] rounded-full blur-2xl opacity-20 transform scale-90"></div>
              <div className="relative group w-64 h-64 md:w-80 md:h-80">
                {/* Tech Rings - Rotating */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border border-dashed border-[--color-accent]/30 rounded-full z-0 group-hover:border-[--color-accent]/60 transition-colors"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border border-dotted border-[--color-primary]/30 rounded-full z-0 group-hover:border-[--color-primary]/60 transition-colors"
                />

                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full border-4 border-[--color-surface] shadow-2xl bg-[--color-surface] overflow-hidden cursor-pointer z-10 filter group-hover:shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.3)] transition-all duration-500">
                  {/* Real Photo */}
                  <img
                    src="/profile.jpg"
                    alt="Valluri Rahul"
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Sketch/Blueprint Reveal */}
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-[--color-surface]"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="/profile-hover.png"
                      alt="Valluri Rahul Sketch"
                      className="w-full h-full object-cover opacity-90"
                    />
                    {/* Blueprint Overlay Tint */}
                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none" />
                  </motion.div>

                  {/* Scanning Laser Line */}
                  <motion.div
                    className="absolute w-full h-[2px] bg-[--color-accent] shadow-[0_0_15px_var(--color-accent)] opacity-0 group-hover:opacity-100"
                    initial={{ top: "-10%" }}
                    whileHover={{
                      top: ["0%", "100%"],
                      transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[--color-primary] mb-6 flex items-center gap-2 group">
                <FaTrophy className="text-[--color-accent] group-hover:rotate-[360deg] transition-transform duration-500" /> Key Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <span className="text-4xl font-bold text-[--color-border-custom] group-hover:text-[--color-accent] transition-colors">{item.id}</span>
                    <div>
                      <h4 className="font-bold text-[--color-text-main]">{item.title}</h4>
                      <p className="text-sm text-[--color-secondary] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Bio, Education, Skills */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[--color-primary]">About Me</h2>
              <div className="bg-[--color-surface] p-6 rounded-2xl border border-[--color-border-custom] shadow-sm">
                <p className="text-[--color-text-main] leading-relaxed text-lg">
                  Results-driven Computer Science student with hands-on experience in full-stack development and cloud technologies. Defined expertise in building responsive web applications using modern frameworks and RESTful API development. Strong problem-solving abilities with active participation in collaborative team projects and continuous technical skill enhancement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[--color-primary] mb-6 flex items-center gap-2 group">
                <FaGraduationCap className="text-[--color-accent] group-hover:rotate-[360deg] transition-transform duration-500" /> Education
              </h3>
              <div className="space-y-8 relative border-l-2 border-[--color-border-custom] ml-3 pl-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[--color-background-custom] bg-[--color-accent]"></span>
                    <h4 className="text-lg font-bold text-[--color-text-main]">{edu.school}</h4>
                    <p className="text-[--color-accent] font-medium">{edu.degree}</p>
                    <div className="flex justify-between text-sm text-[--color-secondary] mt-1">
                      <span>{edu.location}</span>
                      <span>{edu.year}</span>
                    </div>
                    {edu.details && (
                      <p className="text-sm text-[--color-secondary] mt-2 italic">{edu.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Full Width - Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 relative overflow-hidden"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-[--color-primary] mb-4">Technical Skills</h3>
            <p className="text-[--color-secondary] max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies I use to build scalable solutions.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <SkillsRadar />
          </div>

          {/* Simplified Marquee of Icons - Performance Optimized */}
          <div className="flex mb-12 overflow-hidden mask-image-gradient py-4">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: [0, -800] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30
              }}
            >
              {[...skills, ...skills].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-3 group px-4">
                    <div className="w-20 h-20 rounded-2xl bg-[--color-surface] border border-[--color-border-custom] flex items-center justify-center text-4xl shadow-md group-hover:scale-110 transition-transform duration-300 group-hover:border-[--color-accent]"
                      style={{ color: skill.color }}>
                      <Icon />
                    </div>
                    <span className="text-sm font-semibold text-[--color-secondary] group-hover:text-[--color-primary] transition-colors">{skill.name}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
