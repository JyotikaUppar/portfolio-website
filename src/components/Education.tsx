import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, ChevronRight } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            My foundation in Information Technology, focusing on modern engineering principles and continuous growth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-10 md:p-12 rounded-[2.5rem] border border-white/10 group">
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* University Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2rem] flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform duration-500">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-grow">
                <div className="mb-8">
                  <div className="inline-flex items-center space-x-2 text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">
                    <BookOpen size={16} />
                    <span>Bachelor of Science</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                    Information Technology
                  </h3>
                  <p className="text-xl text-slate-400 font-medium">
                    S.N.D.T Women's University, Mumbai
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <Calendar className="text-blue-500" size={24} />
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Duration</p>
                      <p className="font-bold text-white">2023 — 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <Award className="text-purple-500" size={24} />
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Status</p>
                      <p className="font-bold text-white">Final Year Scholar</p>
                    </div>
                  </div>
                </div>

                {/* Academic Performance */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Academic Excellence</h4>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">Consistent Growth</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl relative overflow-hidden group/card">
                       <div className="absolute -right-4 -bottom-4 opacity-5 group-hover/card:opacity-10 transition-opacity">
                         <ChevronRight size={80} />
                       </div>
                       <p className="text-xs text-slate-500 font-bold uppercase mb-2">Year 1 Performance</p>
                       <div className="flex items-baseline space-x-2">
                         <span className="text-4xl font-black text-white">7.73</span>
                         <span className="text-blue-400 font-bold">CGPA</span>
                       </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl relative overflow-hidden group/card">
                       <div className="absolute -right-4 -bottom-4 opacity-5 group-hover/card:opacity-10 transition-opacity">
                         <ChevronRight size={80} />
                       </div>
                       <p className="text-xs text-slate-500 font-bold uppercase mb-2">Year 2 Performance</p>
                       <div className="flex items-baseline space-x-2">
                         <span className="text-4xl font-black text-white">8.50</span>
                         <span className="text-purple-400 font-bold">CGPA</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

