import React from 'react';
import { Code, Lightbulb, Users, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code Enthusiast",
      description: "Passionate about writing maintainable, efficient, and well-documented code"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding creative solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Excellent communicator who thrives in collaborative environments"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and development methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm an enthusiastic software developer with a fresh perspective and an insatiable curiosity for technology. 
                My journey began with a fascination for how code can transform ideas into reality, and that passion continues 
                to drive me every day.
              </p>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                With a strong foundation in full-stack development and a keen eye for user experience, I'm eager to contribute 
                to projects that make a real difference. I believe in continuous learning, collaborative problem-solving, and 
                building software that users love.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, 
                or brainstorming the next big idea. I'm excited to bring my energy, creativity, and technical skills to a 
                dynamic development team.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">What Excites Me in Tech</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Building responsive, user-friendly web applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Exploring modern JavaScript frameworks and libraries
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Creating efficient backend APIs and databases
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Learning about cloud technologies and DevOps
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;