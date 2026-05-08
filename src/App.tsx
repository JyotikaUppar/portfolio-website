import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import ProofOfWork from './components/ProofOfWork';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update document title
    document.title = 'Jyotika Uppar | Cinematic Developer Portfolio';
    
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-200">
      <div 
        className="cursor-glow hidden md:block" 
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <ProofOfWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
