import React, { useState, useEffect } from 'react';
import { User, Cpu, BookOpen, Clock, Activity, Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [latency, setLatency] = useState('0.00');

  useEffect(() => {
    // Elegant ticking clock for real-time bento card
    const updateTime = () => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Dynamic mock latency simulation
    const latencyTimer = setInterval(() => {
      const l = (Math.random() * 5 + 2).toFixed(2);
      setLatency(l);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(latencyTimer);
    };
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#111820]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.04] pb-10 mb-20">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase block mb-3">
              [ 01 // OVERVIEW ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              ABOUT <span className="text-white/40 italic font-light font-sans lowercase">[about]</span>
            </h2>
          </div>
          
          <p className="text-xs font-mono tracking-widest text-white/30 uppercase mt-4 md:mt-0">
            BRIDGING COMPUTATIONAL THEORY & USER INTERACTION
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Main Philosophy (Takes 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 glass-card glass-card-hover rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border border-white/[0.04]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 text-white/40 mb-8 font-mono text-xs tracking-widest uppercase">
                <User size={14} />
                <span>Philosophical Framework</span>
              </div>
              <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight mb-6">
                Creating hyper-focused digital experiences that feel responsive and alive.
              </h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed space-y-4 max-w-2xl font-light">
                I am a [education] student at [Your University], having completed my [education] from [Your University]. I view software engineering not just as a syntax problem, but as the editorial composition of user flows, latency reduction, and predictive AI utilities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/[0.02] text-xs font-mono text-white/30 uppercase">
              <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-white/60" /> Full-Stack Architecture</span>
              <span className="flex items-center gap-1.5"><Cpu size={12} className="text-white/60" /> Neural Integration</span>
              <span className="flex items-center gap-1.5"><Activity size={12} className="text-white/60" /> Fluid Motion Systems</span>
            </div>
          </motion.div>

          {/* Card 2: Academic Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between border border-white/[0.04]"
          >
            <div>
              <div className="flex items-center gap-3 text-white/40 mb-6 font-mono text-xs tracking-widest uppercase">
                <Landmark size={14} />
                <span>Academic Standing</span>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-black text-white tracking-tighter">7.69</div>
                  <div className="text-[10px] font-mono tracking-widest text-white/30 uppercase mt-1">[education] Overall CGPA</div>
                </div>
                <div className="h-[1px] bg-white/[0.04]" />
                <div>
                  <div className="text-4xl font-black text-white/70 tracking-tighter">Master's Degree</div>
                  <div className="text-[10px] font-mono tracking-widest text-white/30 uppercase mt-1">Pursuing (2026 — 2028)</div>
                </div>
              </div>
            </div>

            <div className="mt-8 font-mono text-[10px] tracking-wider text-white/30 uppercase">
              [Your University]
            </div>
          </motion.div>

          {/* Card 3: Interactive System Stats & Latency Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between border border-white/[0.04]"
          >
            <div>
              <div className="flex items-center gap-3 text-white/40 mb-6 font-mono text-xs tracking-widest uppercase">
                <Activity size={14} />
                <span>Local Ticker Widget</span>
              </div>
              
              <div className="space-y-5 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40">SYSTEM:</span>
                  <span className="text-white/80 font-bold uppercase">Active Online</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40">MOCK LATENCY:</span>
                  <span className="text-white/80 font-bold">{latency} ms</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40">CLOCK (UTC):</span>
                  <span className="text-white/80 font-bold">{currentTime}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40">LOCATION:</span>
                  <span className="text-white/80 font-bold">[Location]</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">TRANSMISSION FEED ACTIVE</span>
            </div>
          </motion.div>

          {/* Card 4: Focus Stack (Takes 2 cols on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 glass-card glass-card-hover rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-white/[0.04]"
          >
            <div>
              <div className="flex items-center gap-3 text-white/40 mb-8 font-mono text-xs tracking-widest uppercase">
                <BookOpen size={14} />
                <span>Focus Frameworks</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-2">01 // Intelligent Web</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Building client-side applications with responsive routing, modular design systems, and robust cache management using Next.js/Vite.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-2">02 // Backend Systems</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Designing lightweight APIs, structural database queries, and secure web sockets handlers in PostgreSQL, Firebase, Node.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-2">03 // Product Engineering</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Perfecting interactions. Adding dynamic spring feedback, custom shaders, cursor tracking, and buttery frame rate interfaces.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-2">04 // AI Orchestration</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Connecting LLM APIs, building local semantic search vectors, and leveraging models to parse multi-modal telemetry databases.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 font-mono text-[9px] tracking-widest text-white/20 uppercase border-t border-white/[0.02] pt-4">
              INTELLECTUAL INVENTORY OVERVIEW // UPDATED 2026
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
