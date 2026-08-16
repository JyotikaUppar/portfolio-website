import React, { useRef } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// Premium Interactive HTML/CSS mockups representing high-end luxury products
const ProjectMockup = ({ project }: { project: string }) => {
  const projLower = project.toLowerCase();

  if (projLower.includes('dailydsa')) {
    // IDE and Algorithms learning simulator
    return (
      <div className="w-full h-full bg-[#0a0f1d] p-4 font-mono text-[10px] text-white/70 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
            <span className="w-2 h-2 rounded-full bg-[#EAB308]" />
            <span className="w-2 h-2 rounded-full bg-[#00C896]" />
            <span className="text-[9px] text-white/30 ml-2 uppercase tracking-widest">ide: dsa_compiler // active</span>
          </div>
          <span className="text-[9px] text-[#7EE8FA]">STREAK: 147 DAYS</span>
        </div>

        {/* Workspace Panels */}
        <div className="grid grid-cols-12 gap-3 flex-grow my-3 relative z-10 overflow-hidden">
          {/* File explorer panel */}
          <div className="col-span-3 border-r border-white/5 pr-2 hidden sm:flex flex-col gap-1.5 text-white/30 text-[8px] uppercase tracking-wider">
            <span className="text-white/60 font-semibold">[Workspace]</span>
            <span className="pl-2 text-[#00C896] font-bold">▶ src/</span>
            <span className="pl-4 text-white/70">· main.rs</span>
            <span className="pl-4 text-white/70">· tree.cpp</span>
            <span className="pl-4 text-white/70">· queue.py</span>
            <span className="pl-2">▶ tests/</span>
            <span className="pl-2">▶ config/</span>
          </div>

          {/* Code panel */}
          <div className="col-span-12 sm:col-span-9 flex flex-col justify-between h-full">
            <div className="space-y-1.5 text-left text-[#94a3b8]">
              <p><span className="text-[#8B5CF6]">fn</span> <span className="text-[#7EE8FA]">solve_binary_tree</span>&lt;T&gt;(root: Option&lt;Node&lt;T&gt;&gt;) &#123;</p>
              <p className="pl-3"><span className="text-[#8B5CF6]">let</span> <span className="text-[#00C896]">mut</span> queue = Queue::new();</p>
              <p className="pl-3">queue.push(root);</p>
              <p className="pl-3"><span className="text-[#8B5CF6]">while</span> !queue.is_empty() &#123;</p>
              <p className="pl-6"><span className="text-[#8B5CF6]">let</span> node = queue.pop();</p>
              <p className="pl-6"><span className="text-[#00C896]">process_node</span>(node);</p>
              <p className="pl-3">&#125;</p>
              <p>&#125;</p>
            </div>

            {/* Simulated compilation terminal */}
            <div className="mt-3 p-2 bg-black/40 rounded border border-white/5 font-mono text-[8px] flex items-center justify-between text-[#00C896]">
              <span className="animate-pulse">● [EXECUTION]: Compiling main.rs... SUCCESS</span>
              <span className="text-white/30">TIME: 2.1ms</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[8px] text-white/30 relative z-10 uppercase tracking-widest">
          <span>UTF-8 // Rust compiler v1.8</span>
          <span>Line 24, Col 8</span>
        </div>
      </div>
    );
  }

  if (projLower.includes('disease prediction')) {
    // Biometric scanner and health intelligence dashboard
    return (
      <div className="w-full h-full bg-[#070b13] p-4 font-mono text-[10px] text-white/70 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Futuristic glowing scanning grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,150,0.03)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#070b13_90%)] pointer-events-none" />
        
        {/* Top diagnostics header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00C896] animate-pulse" />
            <span className="text-[9px] text-[#00C896] uppercase tracking-widest font-bold">AI Diagnostics Engine v1.0</span>
          </div>
          <span className="text-[8px] text-white/30">SECURE SHELL CONNECTIONS</span>
        </div>

        {/* Visual Scanner HUD */}
        <div className="flex-grow flex items-center justify-between my-3 relative z-10">
          {/* Left panel: biometric scanner wireframe */}
          <div className="w-1/2 h-full relative flex items-center justify-center border border-white/5 rounded-xl bg-black/20 overflow-hidden">
            {/* Pulsing scanning rings */}
            <div className="absolute w-20 h-20 rounded-full border border-[#00C896]/30 animate-ping" />
            <div className="absolute w-28 h-28 rounded-full border border-[#7EE8FA]/10 animate-spin" style={{ animationDuration: '8s' }} />
            
            {/* SVG Human outline silhouette for diagnostics */}
            <svg className="w-16 h-16 text-white/10" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm2 4h-4c-6.6 0-12 5.4-12 12v22h4V31c0-4.4 3.6-8 8-8s8 3.6 8 8v22h4V31c0-6.6-5.4-12-12-12zm-8 36v30h4V55h-4zm8 0v30h4V55h-4z" />
            </svg>
            
            {/* Red vertical scan beam bar */}
            <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00C896] to-transparent animate-bounce" style={{ top: '10%', animationDuration: '4s' }} />
          </div>

          {/* Right panel: predictive telemetry dashboard */}
          <div className="w-1/2 pl-4 flex flex-col justify-center gap-2 text-left">
            <div className="p-2 bg-white/[0.02] border border-white/5 rounded-lg space-y-1">
              <span className="text-[8px] text-white/30 uppercase tracking-widest block">classification output</span>
              <span className="text-white font-bold text-xs">MODEL: Random Forest</span>
              <span className="text-[#00C896] block text-[9px] font-bold">ACCURACY VALUE: 98.7%</span>
            </div>
            
            <div className="p-2 bg-[#00C896]/5 border border-[#00C896]/20 rounded-lg space-y-1">
              <span className="text-[8px] text-[#00C896] uppercase tracking-widest block font-bold">prediction analysis</span>
              <span className="text-white text-[9px] block">CRITICAL INDICATOR RISK: LOW</span>
              <span className="text-white/40 text-[8px] block">DATA FEED: 54 VARS VALIDATED</span>
            </div>
          </div>
        </div>

        {/* Bottom telemetries */}
        <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[8px] text-white/30 relative z-10 uppercase tracking-widest">
          <span>biopacket pipeline initialized</span>
          <span>SYS TEMP: 34.6°C</span>
        </div>
      </div>
    );
  }

  if (projLower.includes('construction')) {
    // Gantt charts and resource allocation maps
    return (
      <div className="w-full h-full bg-[#080d15] p-4 font-mono text-[10px] text-white/70 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Accent lighting grid overlay */}
        <div className="absolute inset-0 bg-[#EAB308]/[0.015] [background-image:linear-gradient(to_right,#EAB308_1px,transparent_1px),linear-gradient(to_bottom,#EAB308_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-20" />
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#EAB308]/20 border border-[#EAB308] rounded flex items-center justify-center text-[7px] text-[#EAB308] font-bold">C</span>
            <span className="text-[9px] text-white/50 uppercase tracking-widest">Resource Allocator & Scheduler</span>
          </div>
          <span className="text-[8px] text-[#EAB308]">SYS STATE: IN-SYNC</span>
        </div>

        {/* Gantt Timeline bars */}
        <div className="flex-grow flex flex-col justify-center gap-2.5 my-2.5 relative z-10">
          {/* Timeline Row 1 */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[8px] text-white/30 uppercase">
              <span>Task Alpha // structural frame</span>
              <span className="text-[#00C896]">90% complete</span>
            </div>
            <div className="w-full h-2.5 bg-white/5 border border-white/5 rounded-full overflow-hidden p-[1px]">
              <div className="w-[90%] h-full bg-gradient-to-r from-[#EAB308] to-[#00C896] rounded-full shadow-[0_0_8px_rgba(234,179,8,0.3)]" />
            </div>
          </div>

          {/* Timeline Row 2 */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[8px] text-white/30 uppercase">
              <span>Task Beta // electrical duct routing</span>
              <span className="text-[#7EE8FA]">45% complete</span>
            </div>
            <div className="w-full h-2.5 bg-white/5 border border-white/5 rounded-full overflow-hidden p-[1px]">
              <div className="w-[45%] h-full bg-gradient-to-r from-[#7EE8FA] to-[#8B5CF6] rounded-full shadow-[0_0_8px_rgba(126,232,250,0.3)]" />
            </div>
          </div>

          {/* Timeline Row 3 */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[8px] text-white/30 uppercase">
              <span>Task Gamma // interior insulation</span>
              <span className="text-white/20">Pending allocation</span>
            </div>
            <div className="w-full h-2.5 bg-white/5 border border-white/5 rounded-full overflow-hidden p-[1px]">
              <div className="w-[8%] h-full bg-white/10 rounded-full" />
            </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[8px] text-white/30 relative z-10 uppercase tracking-widest">
          <span>database records: 124 instances</span>
          <span>utilization index: 94.2%</span>
        </div>
      </div>
    );
  }

  if (projLower.includes('facetrace')) {
    // Face tracking grid and targeting matrices
    return (
      <div className="w-full h-full bg-[#0a0714] p-4 font-mono text-[10px] text-white/70 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Circular HUD radar rings background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#8B5CF6]/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#EC4899]/5 pointer-events-none" />
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse" />
            <span className="text-[9px] text-[#EC4899] uppercase tracking-widest font-bold">FaceTrace camera system // active</span>
          </div>
          <span className="text-[8px] text-white/30">FPS: 60 // DELAY: 4.2ms</span>
        </div>

        {/* Target Viewfinder Display */}
        <div className="flex-grow flex items-center justify-center my-3 relative z-10">
          {/* Target Box corners */}
          <div className="w-40 h-28 border border-[#8B5CF6]/20 relative rounded-lg bg-black/15 overflow-hidden flex items-center justify-center">
            {/* Viewfinder corner brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#8B5CF6]" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#8B5CF6]" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#8B5CF6]" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#8B5CF6]" />
            
            {/* Target Reticle (animated lock) */}
            <div className="w-14 h-14 rounded-full border border-dashed border-[#EC4899] flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }} />
            <span className="absolute w-2 h-2 bg-[#EC4899] rounded-full" />
            
            {/* Lock metrics tag */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[7px] text-white uppercase rounded font-bold tracking-widest">
              MATCH VALUE: 98.72% // SUBJECT_01
            </div>

            {/* Vertical scanning bar */}
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#EC4899] to-transparent animate-pulse" style={{ top: '45%' }} />
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[8px] text-white/30 relative z-10 uppercase tracking-widest">
          <span>telemetry loop verified</span>
          <span>cam_id: 9a8x7b</span>
        </div>
      </div>
    );
  }

  return null;
};

// Premium Parallax Hover Card Wrapper
const ParallaxProjectImage = ({ projectTitle }: { projectTitle: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 20 });
  const translateZ = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized position from -0.5 to 0.5
    const posX = (e.clientX - rect.left) / width - 0.5;
    const posY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="w-full h-full relative group cursor-pointer overflow-hidden rounded-[2rem] border border-[rgba(0,200,150,0.14)] bg-[#161B22] aspect-[16/10]"
    >
      {/* Glow highlight reflecting hover coordinate */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none z-10" />
      
      <motion.div 
        style={{ translateZ }}
        className="w-full h-full p-1"
      >
        <ProjectMockup project={projectTitle} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/20 to-transparent opacity-80 pointer-events-none" />
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "DailyDSA",
      tagline: "Data Structures & Algorithms Learning Platform",
      problem: "Students preparing for coding interviews need a consistent way to practice DSA questions, review company-focused topics, and track learning momentum.",
      solution: "Built a Daily DSA platform with curated coding challenges, topic-based interview question collections, and progress-focused learning sections for structured algorithm practice.",
      tech: ["React", "JavaScript", "CSS", "Vercel", "GitHub"],
      github: "https://github.com/JyotikaUppar/dailydsa",
      demo: "https://dailydsa91.vercel.app/",
      stats: "FOCUS: DSA // MODE: DAILY PRACTICE"
    },
    {
      title: "Disease Prediction",
      tagline: "Healthcare Machine Learning Predictor",
      problem: "Early health-risk screening is difficult when symptoms and clinical indicators are scattered across forms, notes, or disconnected datasets.",
      solution: "Created a disease prediction system that processes user health inputs and applies machine learning logic to estimate possible disease outcomes for faster preliminary awareness.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Healthcare AI", "GitHub"],
      github: "https://github.com/JyotikaUppar/DiseasePrediction",
      demo: "https://github.com/JyotikaUppar/DiseasePrediction",
      stats: "DOMAIN: HEALTHCARE // TYPE: ML MODEL"
    },
    {
      title: "Construction Management",
      tagline: "Full-Stack Project Workflow Optimizer",
      problem: "Construction teams suffer from disorganized asset logs, out-of-sync schedules, and complex resource allocations scattered across separate systems.",
      solution: "Developed a full-stack construction management application with SQL databases and robust backend routing, helping teams centralize resources, monitor timelines, and track worksite progress.",
      tech: ["Node.js", "Express.js", "MySQL", "JavaScript", "HTML/CSS", "Git"],
      github: "https://github.com/JyotikaUppar/Construction",
      demo: "https://github.com/JyotikaUppar/Construction",
      stats: "STACK: FULL-STACK // TYPE: MANAGEMENT PLATFORM"
    },
    {
      title: "FaceTrace",
      tagline: "Computer Vision Face Detection & Tracking",
      problem: "Traditional image processing and verification workflows require manual validation and struggle with real-time video stream low-latency requirements.",
      solution: "Engineered a high-performance facial recognition and tracking system using Python and computer vision models, capable of processing video frames to detect, align, and match user faces.",
      tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "Git"],
      github: "https://github.com/JyotikaUppar/FaceTrace",
      demo: "https://github.com/JyotikaUppar/FaceTrace",
      stats: "ENGINE: OPENCV // TYPE: COMPUTER VISION API"
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#111820]/60 backdrop-blur-sm">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.04] pb-10 mb-28">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase block mb-3">
              [ 03 // PORTFOLIO ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              SELECTED <span className="text-white/40 italic font-light font-sans lowercase">[projects]</span>
            </h2>
          </div>
          
          <p className="text-xs font-mono tracking-widest text-white/30 uppercase mt-4 md:mt-0">
            CASE STUDIES IN SYSTEM DESIGN
          </p>
        </div>

        {/* Projects Listing */}
        <div className="space-y-36">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Column: Image with Parallax Hover */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2"
              >
                <ParallaxProjectImage projectTitle={project.title} />
              </motion.div>

              {/* Right Column: Case study content */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 w-full"
                >
                  {/* System stats telemetry badge */}
                  <div className="flex items-center justify-between border-b border-white/[0.04] pb-4 font-mono text-[9px] tracking-widest text-white/30 uppercase">
                    <span>{project.tagline}</span>
                    <span>{project.stats}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight uppercase">
                    {project.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block mb-1">THE PROBLEM</span>
                      <p className="text-sm text-white/50 leading-relaxed font-light font-sans">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block mb-1">THE ARCHITECTURE</span>
                      <p className="text-sm text-white/70 leading-relaxed font-light font-sans">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 font-mono text-[9px] tracking-wider uppercase border border-white/[0.04] bg-white/[0.02] text-white/50 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Interactive CTA buttons */}
                  <div className="flex items-center gap-6 pt-6">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase group"
                    >
                      <span>DEPLOY SYSTEM</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono tracking-widest text-white/40 hover:text-white uppercase transition-colors"
                    >
                      <Github size={14} />
                      <span>SOURCE CODE</span>
                    </a>
                  </div>

                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
