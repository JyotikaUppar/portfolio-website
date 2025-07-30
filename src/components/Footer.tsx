import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Jyotika Uppar</h3>
            <p className="text-slate-300 mb-4">
              Passionate software developer creating meaningful digital experiences
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/Rakshita123136"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jyotika-uppar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jayauppar2@gmail.com"
                className="text-slate-400 hover:text-emerald-400 transition-colors transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-300">
              <p>
                <a href="mailto:jayauppar2@gmail.com" className="hover:text-white transition-colors">
                  jayauppar2@gmail.com
                </a>
              </p>
              <p>Mumbai, India</p>
              <p>Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-slate-300 mb-4 md:mb-0">
              <span>© {currentYear} Jyotika Uppar. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of ☕</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Open to work</span>
              <span>•</span>
              <span>Fresh Graduate</span>
              <span>•</span>
              <span>Full-Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;