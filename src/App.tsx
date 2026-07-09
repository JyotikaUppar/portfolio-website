import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import LetsTalk from './components/LetsTalk';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Framer Motion spring-damped high-performance cursor tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    // Set descriptive metadata for elite SEO
    document.title = 'Jyotika Uppar | Software Developer';
    document.documentElement.style.scrollBehavior = 'smooth';

    // Simulate cinematic loading preloader sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-[#090D14] text-[#F8FAFC] select-none selection:bg-[#00C896]/20 selection:text-white relative">
      
      {/* Dynamic Cosmic Neural Network background */}
      <AnimatedBackground />

      {/* Cinematic Loading Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
            }}
            className="fixed inset-0 z-50 bg-[#090D14] flex flex-col items-center justify-center font-mono text-[10px] tracking-[0.3em] text-[#94A3B8] uppercase"
          >
            <div className="space-y-4 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4"
              >
                JU
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                SYSTEM PORTAL INITIALIZING //
              </motion.div>
              
              <motion.div 
                className="h-[1px] bg-white/10 w-24 mx-auto overflow-hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-white w-1/2"
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* High-Performance Cursor Follow Ambient Highlight (GPU Spring Driven) */}
      <motion.div 
        className="cursor-glow-spring hidden md:block" 
        style={{ left: springX, top: springY }}
      />
      
      {/* Navigation Floating Luxury Dock */}
      <Header />
      
      {/* Main Structural Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      {/* Editorial polished footer */}
      <Footer />

      {/* Premium floating Let's Talk widget */}
      <LetsTalk />
    </div>
  );
}

export default App;
