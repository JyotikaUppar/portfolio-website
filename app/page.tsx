'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Experience from '../src/components/Experience';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import LetsTalk from '../src/components/LetsTalk';

export default function HomePage() {
  const mouseX = useMotionValue(-120);
  const mouseY = useMotionValue(-120);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 22, mass: 0.45 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22, mass: 0.45 });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative overflow-hidden bg-white text-slate-950 min-h-screen">
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 opacity-80"
        style={{ left: springX, top: springY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-[360px] w-[360px] rounded-full bg-sky-200/30 blur-3xl" />
      </motion.div>

      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-7xl px-6 pb-32 pt-6">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
        <LetsTalk />
      </div>
    </div>
  );
}
