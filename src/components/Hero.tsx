import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown, Github, Mail, Globe, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Magnetic wrapper component for premium tactile interface
const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode, className: string, onClick?: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 120, damping: 15, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 120, damping: 15, mass: 0.8 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Max movement 16px
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
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
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalized coordinates inside hero section
      setMousePos({
        x: clientX - rect.left,
        y: clientY - rect.top
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireMeClick = () => {
    scrollToSection('contact');
    window.dispatchEvent(new CustomEvent('hire-me-intent'));
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-screen w-full relative flex flex-col justify-between overflow-hidden bg-[#0D1117] bg-grid-canvas pt-32 pb-16 px-6 md:px-12 lg:px-24"
    >
      {/* Cinematic Ambient Mouse Follow Glow */}
      <div 
        className="absolute pointer-events-none hidden md:block rounded-full bg-white/[0.015] blur-[140px] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      {/* Grid overlay for aesthetic structure */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#161B22]/30 to-[#0D1117] pointer-events-none z-0" />

      {/* Top Editorial Detail */}
      <div className="w-full flex justify-between items-start border-b border-white/[0.04] pb-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse"></span>
          <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
            STATUS: ACTIVE // OPEN TO INTERNSHIPS 2026
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:block text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase text-right"
        >
          SYS: VITE // REACT // TS // FRAMER
        </motion.div>
      </div>

      {/* Asymmetric Typography layout */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10 pt-10 pb-8">
        {/* Main Massive Headline */}
        <div className="lg:col-span-8 flex flex-col items-start select-none">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] font-bold text-white tracking-tighter leading-[0.8] uppercase">
              Jyotika
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col sm:flex-row sm:items-baseline gap-4 mt-2"
          >
            <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9.5rem] font-bold tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/5 uppercase">
              Uppar
            </h1>
            <span className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase pl-1 sm:pl-3">
              [ IT ENGINEER ]
            </span>
          </motion.div>
        </div>

        {/* Small Descriptive Paragraph & CTAs */}
        <div className="lg:col-span-4 flex flex-col gap-8 items-start lg:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-light font-sans max-w-sm">
              Engineering full-stack architectures, responsive design systems, and robust intelligent layers. Navigating the intersection of computing theory and minimalist aesthetics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 text-xs font-mono uppercase bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-neutral-200 transition-colors"
            >
              <span>Explore Work</span>
              <ArrowRight size={14} />
            </MagneticButton>

            <MagneticButton
              onClick={handleHireMeClick}
              className="px-6 py-3 text-xs font-mono uppercase border border-white/[0.08] text-white rounded-full bg-white/[0.01] hover:bg-white/[0.05] hover:border-white/20 transition-all"
            >
              <span>Hire Me</span>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Floating abstract decorative layout lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.015] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/[0.015] pointer-events-none" />
      
      {/* Bottom bar of Hero */}
      <div className="w-full flex justify-between items-center border-t border-white/[0.04] pt-6 relative z-10 text-[10px] font-mono tracking-widest text-white/30 uppercase">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex gap-6"
        >
          <span className="hover:text-white transition-colors cursor-default">LOC: MUMBAI / IND</span>
          <span className="hidden sm:inline hover:text-white transition-colors cursor-default">COORD: 19.0760 N, 72.8777 E</span>
        </motion.div>
        
        <motion.button
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown size={10} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
