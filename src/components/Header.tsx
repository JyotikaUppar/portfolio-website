import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2 } from 'lucide-react';
import jsPDF from 'jspdf';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleResumeDownload = () => {
    const doc = new jsPDF();
    const primaryColor = '#1e293b';
    const secondaryColor = '#334155';
    const accentColor = '#3b82f6';
    
    // Header
    doc.setTextColor(primaryColor);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('JYOTIKA UPPAR', 105, 25, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(secondaryColor);
    doc.text('Full-Stack Developer | IT Student', 105, 33, { align: 'center' });
    doc.text('Mumbai, India | jayauppar2@gmail.com', 105, 39, { align: 'center' });
    doc.setTextColor(accentColor);
    doc.text('linkedin.com/in/jyotika-u/ | github.com/JyotikaUppar', 105, 45, { align: 'center' });
    
    // Line separator
    doc.setDrawColor(226, 232, 240);
    doc.line(20, 52, 190, 52);

    let y = 62;

    // Summary Section
    doc.setTextColor(primaryColor);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SUMMARY', 20, y);
    y += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(secondaryColor);
    const summary = "Passionate IT student and Full-Stack Developer dedicated to building scalable, user-centric applications. Experienced in bridging the gap between complex engineering and intuitive design, focusing on AI-powered tools and modern web technologies.";
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, y);
    y += (splitSummary.length * 5) + 5;

    // Education Section
    doc.setTextColor(primaryColor);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', 20, y);
    y += 8;
    doc.setFontSize(11);
    doc.text('Bachelor of Science in Information Technology', 20, y);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('2023 — 2026', 190, y, { align: 'right' });
    y += 5;
    doc.text("S.N.D.T Women's University, Mumbai", 20, y);
    y += 5;
    doc.setTextColor(secondaryColor);
    doc.text('• Year 2 Performance: 8.50 CGPA', 25, y);
    y += 5;
    doc.text('• Year 1 Performance: 7.73 CGPA', 25, y);
    y += 12;

    // Skills Section
    doc.setTextColor(primaryColor);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL ARSENAL', 20, y);
    y += 8;
    doc.setFontSize(10);
    doc.setTextColor(secondaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Frontend:', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.text('React.js, Next.js, TypeScript, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3', 45, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text('Backend:', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Node.js, Express.js, PostgreSQL, MongoDB, Firebase, REST APIs', 45, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text('Tools:', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Git & GitHub, Docker, VS Code, Postman, Vite, Figma', 45, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text('AI / Emerging:', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Python, Machine Learning, LLMs, Flutter, Prompt Engineering', 45, y);
    y += 12;

    // Projects Section
    doc.setTextColor(primaryColor);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SELECTED PROJECTS', 20, y);
    y += 8;

    const projects = [
      { title: 'BMI Calculator (Featured)', tech: 'JavaScript, HTML5, CSS3', desc: 'Interactive health metric tool with real-time feedback and category classification.' },
      { title: 'Advanced Todo System', tech: 'JavaScript, HTML5, CSS3, Local Storage', desc: 'Persistent productivity tool with category filtering and deadline tracking.' },
      { title: 'Weather Pulse', tech: 'JavaScript, HTML5, CSS3, OpenWeather API', desc: 'Data-driven dashboard visualizing real-time atmospheric patterns.' }
    ];

    projects.forEach(project => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(primaryColor);
      doc.text(project.title, 20, y);
      y += 5;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(accentColor);
      doc.text(project.tech, 20, y);
      y += 5;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(secondaryColor);
      const desc = doc.splitTextToSize(project.desc, 170);
      doc.text(desc, 20, y);
      y += (desc.length * 5) + 7;
    });

    doc.save('Jyotika_Uppar_Resume.pdf');
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Proof of Work', id: 'proof-of-work' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-6">
        <nav className={`transition-all duration-500 rounded-full px-8 py-2 ${
          isScrolled ? 'glass-card border-white/10 shadow-2xl' : 'bg-transparent border-transparent'
        }`}>
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => scrollToSection('top')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                <Code2 className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">JU</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="btn-primary !px-5 !py-2 text-sm flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white glass-card rounded-xl border-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="glass-card rounded-[2rem] border-white/10 p-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xl font-bold text-slate-300 hover:text-white transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="btn-primary w-full py-4 flex items-center justify-center space-x-3"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

