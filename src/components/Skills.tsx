import React from 'react';
import { Monitor, Server, Brain, Wrench, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const marqueeRow1 = [
    "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", 
    "Python", "Vector Databases", "Large Language Models", "PostgreSQL",
    "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Node.js"
  ];

  const marqueeRow2 = [
    "Docker", "Git & GitHub", "REST APIs", "RAG Pipelines", "Firebase", 
    "MongoDB", "Express.js", "Figma Design", "Linux Terminal",
    "Docker", "Git & GitHub", "REST APIs", "RAG Pipelines", "Firebase"
  ];

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
    <section id="skills" className="py-32 relative overflow-hidden bg-[#050505]">
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

        {/* Marquee Tracks Container */}
        <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw] overflow-hidden py-10 space-y-6 select-none bg-white/[0.01] border-y border-white/[0.03]">
          
          {/* Row 1 Marquee */}
          <div className="flex w-[200%] gap-4 overflow-hidden relative">
            <div className="flex gap-8 whitespace-nowrap animate-marquee">
              {marqueeRow1.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <span className="text-2xl font-semibold tracking-tighter text-white uppercase font-sans">
                    {item}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                </div>
              ))}
            </div>
            <div className="flex gap-8 whitespace-nowrap animate-marquee absolute top-0 left-[100%]">
              {marqueeRow1.map((item, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-6">
                  <span className="text-2xl font-semibold tracking-tighter text-white uppercase font-sans">
                    {item}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 Marquee */}
          <div className="flex w-[200%] gap-4 overflow-hidden relative">
            <div className="flex gap-8 whitespace-nowrap animate-marquee-reverse">
              {marqueeRow2.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <span className="text-2xl font-semibold tracking-tighter text-white/40 uppercase font-sans">
                    {item}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/10"></span>
                </div>
              ))}
            </div>
            <div className="flex gap-8 whitespace-nowrap animate-marquee-reverse absolute top-0 left-[100%]">
              {marqueeRow2.map((item, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-6">
                  <span className="text-2xl font-semibold tracking-tighter text-white/40 uppercase font-sans">
                    {item}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/10"></span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Tactile Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between border border-white/[0.04] group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {category.icon}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-white/30 uppercase">
                    {category.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-6 uppercase">
                  {category.category}
                </h3>

                <ul className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-xs text-white/50 group-hover:text-white/70 transition-colors">
                      <ChevronRight size={10} className="text-white/20 group-hover:text-white/50 transition-colors" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-[1px] bg-white/[0.02] w-full my-6 group-hover:bg-white/10 transition-colors" />
              <div className="text-[9px] font-mono tracking-widest text-white/20 uppercase">
                SYSTEM VERIFIED OK //
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
