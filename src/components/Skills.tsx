import React from 'react';
import { Monitor, Server, Wrench, Cpu, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <Monitor className="text-blue-400" size={24} />,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"]
    },
    {
      category: "Backend",
      icon: <Server className="text-purple-400" size={24} />,
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Firebase", "REST APIs"]
    },
    {
      category: "Tools",
      icon: <Wrench className="text-emerald-400" size={24} />,
      skills: ["Git & GitHub", "Docker", "VS Code", "Postman", "Vite", "Figma"]
    },
    {
      category: "AI / Emerging Tech",
      icon: <Cpu className="text-pink-400" size={24} />,
      skills: ["Python", "Machine Learning", "Large Language Models", "Flutter", "Prompt Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of technologies I use to build everything from rapid prototypes to scalable production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-8 rounded-3xl group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-slate-400 group-hover:text-slate-300 transition-colors"
                  >
                    <Terminal size={14} className="text-blue-500/50" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

