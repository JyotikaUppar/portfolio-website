import React, { useState } from 'react';
import { Monitor, Server, Brain, Wrench, ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      category: "Frontend System",
      icon: <Monitor size={18} className="text-white/60" />,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "CSS3 / HTML5"],
      level: "Aesthetic Interfaces"
    },
    {
      category: "Backend Engine",
      icon: <Server size={18} className="text-white/60" />,
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Firebase & WebSockets"],
      level: "Performant Data Flow"
    },
    {
      category: "Intelligence Layer",
      icon: <Brain size={18} className="text-white/60" />,
      skills: ["Python Core", "LLM APIs Integration", "RAG System design", "Vector Database", "Prompt Systems"],
      level: "Predictive Utilities"
    },
    {
      category: "Operations & Tools",
      icon: <Wrench size={18} className="text-white/60" />,
      skills: ["Git Versioning", "GitHub Actions", "Docker Sandbox", "Vite Bundler", "Figma Layouts"],
      level: "Development Pipeline"
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#060c1a]">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.04] pb-10 mb-20">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase block mb-3">
              [ 02 // CAPABILITIES ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              TECHNICAL <span className="text-white/40 italic font-light font-sans lowercase">arsenal</span>
            </h2>
          </div>
          
          <p className="text-xs font-mono tracking-widest text-white/30 uppercase mt-4 md:mt-0">
            SYSTEM CORE & INTELLIGENT CAPABILITIES
          </p>
        </div>

        {/* Click-to-reveal Skills List */}
        <div className="space-y-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-hover rounded-3xl border border-white/[0.04] group overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenCategory(openCategory === index ? null : index)}
                className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left"
                aria-expanded={openCategory === index}
                aria-controls={`skills-panel-${index}`}
              >
                <div className="flex items-center gap-5 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 flex-shrink-0">
                    {category.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight uppercase">
                      {category.category}
                    </h3>
                    <span className="text-[9px] font-mono tracking-wider text-white/30 uppercase">
                      {category.level}
                    </span>
                  </div>
                </div>

                <ChevronDown
                  size={18}
                  className={`text-white/40 transition-transform duration-300 flex-shrink-0 ${
                    openCategory === index ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              <motion.div
                id={`skills-panel-${index}`}
                initial={false}
                animate={{
                  height: openCategory === index ? 'auto' : 0,
                  opacity: openCategory === index ? 1 : 0
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-8">
                  <div className="h-[1px] bg-white/[0.04] w-full mb-6" />
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center gap-3 rounded-2xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 text-xs text-white/60"
                      >
                        <ChevronRight size={10} className="text-white/30 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
