import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
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
    // Create resume content as text
    const resumeContent = `
JYOTIKA UPPAR
Email: jayauppar2@gmail.com | Phone: 9324781880 | Location: Mumbai
Portfolio: https://fluffy-squirrel-b0e004.netlify.app/

SUMMARY
Highly motivated B.Sc. IT student with a strong foundation in Artificial Intelligence, Machine Learning, and Web Development. Skilled in Python, Java, and JavaScript, with a passion for building innovative solutions and tackling challenging problems. Adaptable and eager to learn, I am seeking an internship opportunity to apply my technical skills, gain industry exposure, and grow into a well-rounded technology professional.

TECHNICAL SKILLS
Programming Languages: JavaScript (ES6+), Dart, Java, Python
Web Development: HTML5, CSS3, React, Next.js
Mobile Development: Flutter, Dart
Databases & Backend: PostgreSQL, Node.js, Express.js, Firebase
Tools & Platforms: Git/GitHub, Docker, npm, VS Code, Figma, Eclipse, Android Studio

PROJECTS

Currency Converter — Mobile Application
Tech Stack: Flutter (Dart), Material Design Widgets
Description: A simple and intuitive mobile application that allows users to convert currencies in real-time. The app provides a user-friendly interface to input values and view equivalent amounts in different currencies, enhancing accessibility for students and travelers.

Key Highlights:
• Built with Flutter for cross-platform compatibility on Android and iOS
• Implemented clean and modular code structure for maintainability
• Designed with Material UI components for a responsive and modern interface
• Lightweight and efficient, ensuring quick conversions without delays

Source code: https://github.com/JyotikaUppar/CurrencyConvertor
    `.trim();

    // Create and download as text file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Set font and add content
    doc.setFontSize(20);
    doc.text('JYOTIKA UPPAR', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text('Email: jayauppar2@gmail.com | Phone: 9324781880 | Location: Mumbai', 105, 30, { align: 'center' });
    doc.text('Portfolio: https://fluffy-squirrel-b0e004.netlify.app/', 105, 37, { align: 'center' });
    
    // Summary section
    doc.setFontSize(16);
    doc.text('SUMMARY', 20, 55);
    doc.setFontSize(11);
    const summaryText = 'Highly motivated B.Sc. IT student with a strong foundation in Artificial Intelligence, Machine Learning, and Web Development. Skilled in Python, Java, and JavaScript, with a passion for building innovative solutions and tackling challenging problems. Adaptable and eager to learn, I am seeking an internship opportunity to apply my technical skills, gain industry exposure, and grow into a well-rounded technology professional.';
    const summaryLines = doc.splitTextToSize(summaryText, 170);
    doc.text(summaryLines, 20, 65);
    
    // Technical Skills section
    doc.setFontSize(16);
    doc.text('TECHNICAL SKILLS', 20, 95);
    doc.setFontSize(11);
    doc.text('Programming Languages: JavaScript (ES6+), Dart, Java, Python', 20, 105);
    doc.text('Web Development: HTML5, CSS3, React, Next.js', 20, 112);
    doc.text('Mobile Development: Flutter, Dart', 20, 119);
    doc.text('Databases & Backend: PostgreSQL, Node.js, Express.js, Firebase', 20, 126);
    doc.text('Tools & Platforms: Git/GitHub, Docker, npm, VS Code, Figma, Eclipse, Android Studio', 20, 133);
    
    // Projects section
    doc.setFontSize(16);
    doc.text('PROJECTS', 20, 150);
    
    doc.setFontSize(14);
    doc.text('Currency Converter — Mobile Application', 20, 160);
    doc.setFontSize(11);
    doc.text('Tech Stack: Flutter (Dart), Material Design Widgets', 20, 167);
    
    const projectDesc = 'A simple and intuitive mobile application that allows users to convert currencies in real-time. The app provides a user-friendly interface to input values and view equivalent amounts in different currencies, enhancing accessibility for students and travelers.';
    const projectLines = doc.splitTextToSize(projectDesc, 170);
    doc.text(projectLines, 20, 175);
    
    doc.setFontSize(11);
    doc.text('Key Highlights:', 20, 195);
    doc.text('• Built with Flutter for cross-platform compatibility on Android and iOS', 25, 202);
    doc.text('• Implemented clean and modular code structure for maintainability', 25, 209);
    doc.text('• Designed with Material UI components for a responsive and modern interface', 25, 216);
    doc.text('• Lightweight and efficient, ensuring quick conversions without delays', 25, 223);
    
    doc.text('Source code: https://github.com/JyotikaUppar/CurrencyConvertor', 20, 235);
    
    // Save the PDF
    doc.save('Jyotika_Uppar_Resume.pdf');
    window.URL.revokeObjectURL(url);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Jyotika Uppar
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-slate-800 rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
              >
                Contact
              </button>
              <button
                onClick={handleResumeDownload}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit"
              >
                <Download size={18} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;