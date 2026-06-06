import React from 'react';
import { Calendar, GraduationCap, Code2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const milestones = [
    {
      period: "2025 — PRESENT",
      role: "Neural Integration & Open-Source Contributor",
      institution: "Independent Architecture Lab",
      description: "Focusing on local-first database syncing libraries, RAG pipelines, and WebGL layouts. Refining state tree manipulation under intermittent socket signals and latency profiling.",
      icon: <Cpu size={16} className="text-white" />,
      tag: "Engineering"
    },
    {
      period: "2023 — 2026",
      role: "Bachelor of Science in Information Technology",
      institution: "S.N.D.T Women's University, Mumbai",
      description: "Rigorous coursework in object-oriented programming, data structures, relational and non-relational database architectures. Specializing in full-stack application models, currently maintaining a 8.50 CGPA.",
      icon: <GraduationCap size={16} className="text-white" />,
      tag: "Academic Crucible"
    },
    {
      period: "2024 — 2025",
      role: "Full-Stack Engineer & Interaction Designer",
      institution: "Dynamic Web Systems",
      description: "Built lightweight responsive frameworks, offline-enabled data lists, weather dashboard APIs, and BMI telemetry calculators. Developed deep intuition for typography metrics and spring dynamics.",
      icon: <Code2 size={16} className="text-white" />,
      tag: "Production Sandbox"
    }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-[#060c1a]">
      {/* Decorative vertical grid lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.04] pb-10 mb-24">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase block mb-3">
              [ 04 // TIMELINE ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              EXPERIENCE & <span className="text-white/40 italic font-light font-sans lowercase">milestones</span>
            </h2>
          </div>
          
          <p className="text-xs font-mono tracking-widest text-white/30 uppercase mt-4 md:mt-0">
            CHRONOLOGICAL TECHNICAL PATHWAY
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto pl-8 md:pl-16">
          
          {/* Main vertical track line */}
          <div className="absolute left-[15px] md:left-[31px] top-4 bottom-4 w-[1px] bg-white/[0.05]" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative group">
                
                {/* Glow Bullet Indicator */}
                <div className="absolute -left-[32px] md:-left-[48px] top-1.5 z-20 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#0b1224] border border-[rgba(120,160,255,0.12)] flex items-center justify-center group-hover:border-[#4f7fff] transition-colors duration-500 relative">
                    {milestone.icon}
                    
                    {/* Ring highlight halo */}
                    <div className="absolute -inset-[2px] rounded-full border border-white/0 group-hover:border-white/5 transition-all duration-700" />
                    
                    {/* Active blink dot for recent item */}
                    {index === 0 && (
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff] animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Timeline content block */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card glass-card-hover rounded-3xl p-8 border border-white/[0.04]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.02]">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase px-2.5 py-1 bg-white/[0.02] border border-white/[0.04] rounded-full">
                          {milestone.tag}
                        </span>
                        <span className="text-xs font-mono text-white/40">{milestone.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white tracking-tight uppercase mt-3">
                        {milestone.role}
                      </h3>
                    </div>

                    <div className="text-right flex items-center gap-1.5 text-xs text-white/50 font-mono">
                      <span>{milestone.institution}</span>
                    </div>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed font-light font-sans max-w-3xl">
                    {milestone.description}
                  </p>
                </motion.div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
