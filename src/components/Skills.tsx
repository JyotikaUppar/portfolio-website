import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "JavaScript", level: "90%", color: "bg-yellow-500" },
        { name: "React", level: "85%", color: "bg-blue-500" },
        { name: "TypeScript", level: "80%", color: "bg-blue-600" },
        { name: "HTML5/CSS3", level: "95%", color: "bg-orange-500" },
        { name: "Tailwind CSS", level: "85%", color: "bg-cyan-500" },
        { name: "Vue.js", level: "75%", color: "bg-green-500" },
        { name: "Flutter", level: "70%", color: "bg-blue-400" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "80%", color: "bg-green-600" },
        { name: "Python", level: "85%", color: "bg-blue-400" },
        { name: "Express.js", level: "80%", color: "bg-gray-600" },
        { name: "Django", level: "75%", color: "bg-green-700" },
        { name: "REST APIs", level: "90%", color: "bg-purple-500" },
        { name: "GraphQL", level: "70%", color: "bg-pink-500" }
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", level: "80%", color: "bg-green-500" },
        { name: "PostgreSQL", level: "75%", color: "bg-blue-700" },
        { name: "Firebase", level: "85%", color: "bg-orange-400" },
        { name: "Git/GitHub", level: "90%", color: "bg-gray-800" },
        { name: "Docker", level: "70%", color: "bg-blue-600" },
        { name: "AWS Basics", level: "65%", color: "bg-orange-600" }
      ]
    }
  ];

  const techStack = [
    "JavaScript", "React", "TypeScript", "Flutter", "Node.js", "Python", "MongoDB", 
    "PostgreSQL", "Express.js", "Django", "HTML5", "CSS3", "Tailwind CSS", 
    "Git", "Firebase", "REST APIs", "GraphQL", "Docker", "AWS"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here's my technical toolkit - technologies I've learned and practiced through projects and continuous learning.
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 text-slate-700 font-medium rounded-full border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-50 p-8 rounded-2xl hover:bg-slate-100 transition-colors duration-200"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {skill.level}
                      </span>
                    </div>
                    
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Goals */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Currently Learning</h3>
            <p className="text-slate-600 mb-6">
              I'm always expanding my skillset and staying up-to-date with the latest technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["React Native", "Next.js", "Kubernetes", "Machine Learning", "Cloud Architecture"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-slate-700 font-medium rounded-full shadow-sm border border-slate-200"
                >
                  🚀 {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;