import React from 'react';
import { User, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
          
          <div className="glass-card p-10 md:p-16 rounded-[2.5rem] border border-white/10 relative">
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>

             <div className="relative z-10 space-y-8 text-center md:text-left">
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
                  I'm a IT student and a passionate <span className="text-white border-b-2 border-blue-500/50">Full-Stack Developer</span> dedicated to building scalable, user-centric applications.
                </p>
                
                <p className="text-lg text-slate-400 leading-relaxed">
                  My work bridge the gap between complex engineering and intuitive design, focusing on solving real-world problems through <span className="text-white">AI-powered tools</span> and modern web technologies. I thrive in collaborative environments that push the boundaries of what's possible with code.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-6">
                    <div className="flex items-center space-x-3 text-slate-300">
                        <User className="text-blue-400" size={20} />
                        <span className="font-semibold">Developer</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-300">
                        <Target className="text-purple-400" size={20} />
                        <span className="font-semibold">Problem Solver</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-300">
                        <Rocket className="text-emerald-400" size={20} />
                        <span className="font-semibold">Innovation Driven</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
