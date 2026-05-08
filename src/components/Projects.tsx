import { Github, ExternalLink, Layers, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BMI Calculator",
      problem: "Quickly calculating health metrics can be cumbersome without a dedicated, clean interface.",
      solution: "Developed a sleek, interactive BMI calculator with real-time feedback and health category classification.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/JyotikaUppar/projects/tree/main/bmi%20calculator",
      demo: "https://jyotikauppar.github.io/projects/bmi-calculator",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      title: "Advanced Todo System",
      problem: "Static lists often fail to help users prioritize and manage daily productivity effectively.",
      solution: "Created a persistent task management tool with categories, deadlines, and local storage integration.",
      tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      github: "https://github.com/JyotikaUppar/projects/tree/main/todo",
      demo: "https://jyotikauppar.github.io/projects/todo",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Weather Pulse",
      problem: "Weather apps often bury important atmospheric data under simple temperature readings.",
      solution: "Created a data-driven dashboard that visualizes wind patterns and humidity using OpenWeather API.",
      tech: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      github: "https://github.com/JyotikaUppar/projects/tree/main/weather",
      demo: "https://jyotikauppar.github.io/projects/weather",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-slate-400">
              A curated collection of my work focusing on performance, UX, and solving real-world challenges.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 text-slate-500 text-sm font-medium tracking-widest uppercase">
              <Layers size={16} />
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl glass-card border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl relative aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                {project.featured && (
                  <div className="absolute top-6 left-6 px-4 py-1.5 glass-card rounded-full flex items-center space-x-2 border border-white/20">
                    <Sparkles size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Featured Work</span>
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 project-content">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">The Problem</h4>
                    <p className="text-slate-300 leading-relaxed italic border-l-2 border-blue-500/50 pl-4">
                      "{project.problem}"
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-[0.2em] mb-2">The Solution</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white font-semibold hover:text-blue-400 transition-colors group/btn"
                  >
                    <span>Visit Live Demo</span>
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-400 font-semibold hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
