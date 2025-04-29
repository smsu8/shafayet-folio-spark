
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              Shafayet<span className="text-accent">.</span>
            </a>
            <p className="mt-2 text-sm text-secondary-foreground/70">
              Computer Science Student & Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-8 w-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-secondary-foreground/90" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-8 w-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-secondary-foreground/90" />
              </a>
              <a 
                href="mailto:contact@shafayet.com" 
                className="h-8 w-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-secondary-foreground/90" />
              </a>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              &copy; {currentYear} Sheikh Md Shafayet Ullah. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/70">
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>
          <p>Designed and developed with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
