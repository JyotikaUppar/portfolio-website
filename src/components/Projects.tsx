import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web App",
      role: "Full-Stack Developer",
      description: "A complete e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Features responsive design and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/Rakshita123136/ecommerce-app",
      demo: "https://ecommerce-demo.vercel.app",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Task Management System",
      role: "Frontend Developer",
      description: "Collaborative task management platform with real-time updates, drag-and-drop functionality, and team collaboration features. Clean, intuitive interface design.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Socket.io"],
      github: "https://github.com/Rakshita123136/task-manager",
      demo: "https://task-manager-demo.netlify.app",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Weather Dashboard",
      role: "Frontend Developer",
      description: "Interactive weather application with location-based forecasts, weather maps, and historical data visualization. Responsive design with dark/light themes.",
      tech: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
      github: "https://github.com/Rakshita123136/weather-dashboard",
      demo: "https://weather-dashboard-demo.github.io",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Recipe Finder App",
      role: "Full-Stack Developer",
      description: "Recipe discovery platform with search functionality, meal planning, and nutrition tracking. Users can save favorites and create custom recipe collections.",
      tech: ["Vue.js", "Python", "Django", "PostgreSQL", "Recipe API"],
      github: "https://github.com/Rakshita123136/recipe-finder",
      demo: "https://recipe-finder-demo.herokuapp.com",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development and passion for creating meaningful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      <Code size={16} className="mr-1" />
                      {project.role}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
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