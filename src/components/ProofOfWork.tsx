import React from 'react';
import { Github, Star, GitBranch, GitPullRequest, Activity } from 'lucide-react';

const ProofOfWork = () => {
  const stats = [
    { label: "Repositories", value: "24+", icon: <GitBranch size={20} /> },
    { label: "Total Stars", value: "150+", icon: <Star size={20} /> },
    { label: "Contributions", value: "500+", icon: <Activity size={20} /> },
    { label: "Pull Requests", value: "45+", icon: <GitPullRequest size={20} /> }
  ];

  return (
    <section id="proof-of-work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 rounded-[2rem] border border-white/10 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Proof of <span className="text-gradient">Work</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                My coding journey is documented through constant exploration and contribution. I believe in "Show, don't just tell."
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="text-blue-400 mb-3">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-white/10 group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Github className="text-white" size={24} />
                    <span className="font-bold text-white">GitHub Contribution Graph</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">2024 - 2025</span>
                </div>
                {/* Mock contribution graph using simple flex squares */}
                <div className="flex flex-wrap gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-3 h-3 rounded-sm ${
                        i % 7 === 0 ? 'bg-purple-900' : 
                        i % 4 === 0 ? 'bg-purple-700' : 
                        i % 3 === 0 ? 'bg-blue-600' : 'bg-white/10'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              <a 
                href="https://github.com/JyotikaUppar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full btn-secondary flex items-center justify-center space-x-3 py-4 group"
              >
                <Github size={20} />
                <span>Explore Full GitHub Activity</span>
                <Activity size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofOfWork;
