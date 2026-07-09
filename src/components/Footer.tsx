import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/[Your Github]' },
    { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/[Your LinkedIn]/' },
    { icon: <Mail size={18} />, url: 'mailto:[Your Email]' }
  ];

  return (
    <footer className="bg-[#0D1117]/80 backdrop-blur-sm text-[#F8FAFC] border-t border-[rgba(0,200,150,0.14)] py-16 relative z-10 overflow-hidden">
      
      {/* Background abstract details */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Logo & Meta info */}
          <div className="md:col-span-5 space-y-6">
            <div 
              className="flex items-center space-x-3 cursor-pointer group w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs">
                JU
              </div>
              <span className="text-[10px] tracking-[0.25em] font-mono text-white/50 group-hover:text-white transition-colors uppercase">
                Jyotika Uppar
              </span>
            </div>
            
            <p className="text-sm text-white/40 max-w-sm leading-relaxed font-light">
              Designing interfaces that feel fluid and architectures that compute optimally. Bridging modern product design with rigorous software frameworks.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-white/[0.04] bg-white/[0.02] text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase block mb-6">NAVIGATION</span>
            <ul className="space-y-4">
              {[
                { name: 'About Overview', id: 'about' },
                { name: 'Technical Arsenal', id: 'skills' },
                { name: 'Selected Works', id: 'projects' },
                { name: 'System Timeline', id: 'experience' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-xs font-mono tracking-wider text-white/50 hover:text-white uppercase transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability Widget */}
          <div className="md:col-span-4">
            <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase block mb-6">TELEMETRY & AVAILABILITY</span>
            <div className="p-6 glass-card rounded-2xl border border-white/[0.04] bg-white/[0.01] relative overflow-hidden">
              <div className="flex items-center gap-2 text-emerald-400 mb-3 font-mono text-[10px] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                <span>Available for Internships</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed font-sans">
                Actively seeking summer full-time developer internships and technical product engineering roles.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom row of footer */}
        <div className="border-t border-white/[0.04] pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
            <span>© {currentYear} Jyotika Uppar. STACK OPTIMIZED // LATENCY EXCELLENT</span>
          </div>

          {/* Magnetic back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 px-4 py-2 font-mono text-[9px] tracking-widest text-white/40 hover:text-white uppercase border border-white/[0.04] hover:border-white/20 rounded-full transition-colors"
          >
            <span>BACK TO SURFACE</span>
            <ArrowUp size={10} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
