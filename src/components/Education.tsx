import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, ChevronRight } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      degree: "Master of Science",
      field: "Information Technology",
      institution: "[Mumbai University]",
      duration: "[2026-2028]",
      status: "Pursuing",
      statusColor: "text-purple-400 bg-purple-500/10",
      iconGradient: "from-purple-600 to-pink-600",
      calendarIconColor: "text-purple-500",
      awardIconColor: "text-pink-500",
      details: [
        { label: "Focus Areas", value: "Advanced Software Engineering, Web Architectures & Cloud Computing" },
        { label: "Preparation", value: "Upcoming academic term" }
      ]
    },
    {
      degree: "Bachelor of Science",
      field: "Information Technology",
      institution: "[Shreemati Nathibai Damodar Thackersey University]",
      duration: "[2023-2026]",
      status: "Completed",
      statusColor: "text-emerald-400 bg-emerald-500/10",
      iconGradient: "from-blue-600 to-purple-600",
      calendarIconColor: "text-blue-500",
      awardIconColor: "text-purple-500",
      details: [
        { label: "Overall CGPA", value: "[CGPA]" },
        { label: "Project Focus", value: "Full-Stack Web Architectures & Artificial Intelligence Integrations" }
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Academic <span className="text-gradient">[education]</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            My foundation in Information Technology, focusing on modern engineering principles and continuous growth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {educationItems.map((item, idx) => (
            <div key={idx} className="glass-card p-10 md:p-12 rounded-[2.5rem] border border-white/10 group transition-all duration-500 hover:border-white/20">
              <div className="flex flex-col md:flex-row items-start gap-10">
                {/* University Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 bg-gradient-to-br ${item.iconGradient} rounded-[2rem] flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform duration-500`}>
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-grow w-full">
                  <div className="mb-8">
                    <div className="inline-flex items-center space-x-2 text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">
                      <BookOpen size={16} />
                      <span>{item.degree}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                      {item.field}
                    </h3>
                    <p className="text-xl text-slate-400 font-medium">
                      {item.institution}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <Calendar className={item.calendarIconColor} size={24} />
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Duration</p>
                        <p className="font-bold text-white">{item.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <Award className={item.awardIconColor} size={24} />
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Status</p>
                        <p className="font-bold text-white">{item.status}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights/Academic Details */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Academic Info & Highlights</h4>
                      <span className={`text-xs font-mono ${item.statusColor} px-3 py-1 rounded-full`}>{item.status}</span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-white/5 rounded-2xl relative overflow-hidden group/card hover:border-white/10 transition-colors">
                           <div className="absolute -right-4 -bottom-4 opacity-5 group-hover/card:opacity-10 transition-opacity">
                             <ChevronRight size={80} />
                           </div>
                           <p className="text-xs text-slate-500 font-bold uppercase mb-2">{detail.label}</p>
                           <p className="text-sm font-bold text-white leading-relaxed">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
