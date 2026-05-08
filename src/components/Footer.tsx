import { Heart, Github, Linkedin, Mail, Code2, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-bg text-white border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div 
              className="flex items-center space-x-2 cursor-pointer mb-6 group w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                <Code2 className="text-white" size={18} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">JU</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-lg mb-8">
              BSc IT student and Full-Stack Developer focused on building high-performance web applications and AI-driven experiences.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: <Github size={22} />, url: 'https://github.com/JyotikaUppar' },
                { icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/in/jyotika-u/' },
                { icon: <Mail size={22} />, url: 'mailto:jayauppar2@gmail.com' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Proof of Work', id: 'proof-of-work' },
                { name: 'Skills', id: 'skills' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center group font-medium"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Current Availability</h4>
            <div className="p-5 glass-card border-white/5 rounded-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                    <span className="text-sm font-bold uppercase tracking-wider">Open to Work</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Actively seeking full-time roles and internships starting Summer 2024.
                  </p>
               </div>
               <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2 text-slate-500 text-sm font-medium">
              <span>© {currentYear} Jyotika Uppar.</span>
              <span className="flex items-center">
                Built with <Heart size={14} className="text-rose-500 mx-1 fill-rose-500" /> in Mumbai
              </span>
            </div>
            
            <div className="glass-card border-white/10 px-4 py-2 rounded-full">
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 tracking-tighter sm:tracking-normal">
                LOC: /MUMBAI/IN // STACK: /VITE/REACT/TS // LATENCY: OPTIMIZED
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;