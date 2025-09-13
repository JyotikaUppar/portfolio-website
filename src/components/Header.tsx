import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

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
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jyotika_Uppar_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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