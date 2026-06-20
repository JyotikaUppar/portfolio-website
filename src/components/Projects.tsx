import React, { useRef } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// Premium Parallax Hover Image Card
const ParallaxProjectImage = ({ src, alt }: { src: string; alt: string }) => {
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
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-[0.1] group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/20 to-transparent opacity-80" />
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
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
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
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
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
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
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
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      stats: "ENGINE: OPENCV // TYPE: COMPUTER VISION API"
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#111820]">
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
              SELECTED <span className="text-white/40 italic font-light font-sans lowercase">works</span>
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
                <ParallaxProjectImage src={project.image} alt={project.title} />
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
