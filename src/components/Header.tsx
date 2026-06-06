import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2, ArrowUpRight } from 'lucide-react';
import jsPDF from 'jspdf';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
    const primaryColor = '#060c1a';
    const secondaryColor = '#7e8fb5';
    const accentColor = '#4f7fff';
    
    // Header
    doc.setTextColor(primaryColor);
    doc.setFontSize(26);
    doc.setFont('helvetica', 'bold');
    doc.text('JYOTIKA UPPAR', 105, 25, { align: 'center' });
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(secondaryColor);
    doc.text('Full-Stack Software Engineer | BSc IT Scholar', 105, 33, { align: 'center' });
    doc.text('Mumbai, India | jayauppar2@gmail.com', 105, 39, { align: 'center' });
    doc.setTextColor(primaryColor);
    doc.text('linkedin.com/in/jyotika-u/ | github.com/JyotikaUppar', 105, 45, { align: 'center' });
    
    // Line separator
    doc.setDrawColor(220, 220, 224);
    doc.line(20, 52, 190, 52);

    let y = 62;

    // Summary Section
    doc.setTextColor(primaryColor);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('EXECUTIVE SUMMARY', 20, y);
    y += 8;
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(secondaryColor);
    const summary = "A highly-focused Software Engineer specialized in AI integrations, full-stack systems, and high-performance interactive architectures. Combining rigorous academic excellence with a commitment to engineering first-class, lightweight web applications.";
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, y);
    y += (splitSummary.length * 5) + 5;

    // Education Section
    doc.setTextColor(primaryColor);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('ACADEMIC CRUCIBLE', 20, y);
    y += 8;
    doc.setFontSize(10.5);
    doc.text('Bachelor of Science in Information Technology', 20, y);
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    doc.text('2023 — 2026', 190, y, { align: 'right' });
    y += 5;
    doc.text("S.N.D.T Women's University, Mumbai", 20, y);
    y += 5;
    doc.setTextColor(secondaryColor);
    doc.text('• Secondary Year Scholar Performance: 8.50 CGPA', 25, y);
    y += 5;
    doc.text('• Primary Year Scholar Performance: 7.73 CGPA', 25, y);
    y += 12;

    // Skills Section
    doc.setTextColor(primaryColor);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL SYSTEMS ARCHITECTURE', 20, y);
    y += 8;
    doc.setFontSize(9.5);
    doc.setTextColor(secondaryColor);
    
    doc.setFont('helvetica', 'bold');
    doc.text('Frontend Engineering:', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.text('React.js, Next.js, TypeScript, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3', 55, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text('Backend & Storage:', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Node.js, Express.js, PostgreSQL, MongoDB, Firebase, REST APIs', 55, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text('AI & Emerging:', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Python, Large Language Models (LLMs), RAG Systems, Vector Search, Machine Learning', 55, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text('DevOps & Tools:', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Git, GitHub Actions, Docker, Vite, Figma, Postman, Linux Systems', 55, y);
    y += 12;

    // Projects Section
    doc.setTextColor(primaryColor);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('CINEMATIC CASE STUDIES', 20, y);
    y += 8;

    const projects = [
      { title: 'DailyDSA (DSA Learning Platform)', tech: 'React, JavaScript, CSS, Vercel', desc: 'A structured Data Structures and Algorithms practice platform with curated daily challenges, interview question collections, and progress-focused learning sections.' },
      { title: 'Disease Prediction (Healthcare ML)', tech: 'Python, Machine Learning, Data Analysis', desc: 'A healthcare-focused prediction system that processes user health inputs and applies machine learning logic to estimate possible disease outcomes.' },
      { title: 'Synthetix Sync (Local-First Engine)', tech: 'Node.js, Express, Local Storage, WebSockets', desc: 'Local-first offline syncing engine with conflict-free replicated data types (CRDTs) and persistent DB sync.' }
    ];

    projects.forEach(project => {
      doc.setFontSize(10.5);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(primaryColor);
      doc.text(project.title, 20, y);
      y += 5;
      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(accentColor);
      doc.text(project.tech, 20, y);
      y += 4.5;
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(secondaryColor);
      const desc = doc.splitTextToSize(project.desc, 170);
      doc.text(desc, 20, y);
      y += (desc.length * 5) + 6;
    });

    doc.save('Jyotika_Uppar_CV.pdf');
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
      <div className="w-full max-w-6xl px-6 pointer-events-auto">
        <nav 
          className={`flex items-center justify-between mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-8 py-3 rounded-full border ${
            isScrolled 
              ? 'glass-card border-[rgba(120,160,255,0.12)] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.55)] scale-95 py-2.5 backdrop-blur-2xl bg-[#0b1224]/90' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-105 transition-transform">
              JU
            </div>
            <span className="text-xs tracking-[0.3em] font-mono text-white/50 group-hover:text-white transition-colors uppercase">
              ENGINEER
            </span>
          </div>

          {/* Nav items */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-mono tracking-widest text-[#7e8fb5] hover:text-[#f0f4ff] transition-colors relative group uppercase"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA / Resume Download */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-mono uppercase border border-white/[0.08] rounded-full text-white bg-white/[0.02] hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95"
            >
              <span>Resume</span>
              <Download size={12} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-full border border-white/[0.08] text-white hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute top-20 left-6 right-6 z-40"
            >
              <div className="glass-card border-[rgba(120,160,255,0.12)] rounded-[2rem] p-8 flex flex-col space-y-6 shadow-2xl bg-[#0b1224]/95">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-xl font-bold tracking-tight text-[#7e8fb5] hover:text-[#f0f4ff] transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="h-[1px] bg-white/5 w-full my-2"></div>
                <button
                  onClick={handleResumeDownload}
                  className="w-full py-4 text-sm font-mono uppercase bg-white text-black font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#eaeaea] transition-colors"
                >
                  <span>Download CV</span>
                  <Download size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
