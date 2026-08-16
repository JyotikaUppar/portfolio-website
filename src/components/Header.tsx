import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
      <div className="w-full max-w-6xl px-6 pointer-events-auto">
        <nav 
          className={`flex items-center justify-between mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-8 py-3 rounded-full border ${
            isScrolled 
              ? 'glass-card border-[rgba(0,200,150,0.14)] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.55)] scale-95 py-2.5 backdrop-blur-2xl bg-[#161B22]/90' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">
              JU
            </div>
            <span className="text-xs tracking-[0.3em] font-mono text-white/50 group-hover:text-white transition-colors uppercase">
              SOFTWARE DEVELOPER
            </span>
          </div>

          {/* Nav items */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-mono tracking-widest text-[#94A3B8] hover:text-[#F8FAFC] transition-colors relative group uppercase"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA / Resume Download */}
          <div className="hidden md:flex items-center">
            <a
              href="/JyotikaUppar.pdf"
              download
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-mono uppercase border border-white/[0.08] rounded-full text-white bg-white/[0.02] hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95"
            >
              <span>[Resume]</span>
              <Download size={12} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-full border border-white/[0.08] text-white hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute top-20 left-6 right-6 z-40"
            >
              <div className="glass-card border-[rgba(0,200,150,0.14)] rounded-[2rem] p-8 flex flex-col space-y-6 shadow-2xl bg-[#161B22]/95">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-xl font-bold tracking-tight text-[#94A3B8] hover:text-[#F8FAFC] transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="h-[1px] bg-white/5 w-full my-2"></div>
                <a
                  href="/JyotikaUppar.pdf"
                  download
                  className="w-full py-4 text-sm font-mono uppercase bg-white text-black font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#eaeaea] transition-colors"
                >
                  <span>Resume</span>
                  <Download size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

