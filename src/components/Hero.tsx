import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-bold text-white">JU</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Jyotika</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            A passionate software developer excited to solve real-world problems through innovative technology
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Fresh graduate with a strong foundation in full-stack development, eager to contribute to meaningful projects and grow with an amazing team.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get to Know Me
            </button>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Rakshita123136"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-200 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/jyotika-uppar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jayauppar2@gmail.com"
                className="p-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-emerald-400 transition-all duration-200 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-white transition-colors duration-200 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;