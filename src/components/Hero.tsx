import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Blobs for specific section glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Open to Opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            I build <span className="text-gradient">scalable web apps</span> <br className="hidden md:block" />
            and AI-powered tools.
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
             IT Student focused on <span className="text-white">real-world problem solving</span> and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button
              onClick={scrollToProjects}
              className="btn-primary group"
            >
              <span className="flex items-center">
                View Projects
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <a
              href="https://github.com/JyotikaUppar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <span className="flex items-center">
                <Github size={20} className="mr-2" />
                GitHub Profile
                <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-slate-400 group-hover:text-white" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-6 inset-x-0 flex justify-center z-20 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" 
        onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-slate-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
