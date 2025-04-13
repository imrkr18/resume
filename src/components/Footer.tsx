
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-navy text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Kuldeep Gohel</h2>
            <p className="text-gray-300 mt-2">Software Engineer | Full-Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/kuldipgohil06/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-tech-light-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a 
              href="https://github.com/imrkr18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-tech-light-purple transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a 
              href="mailto:kuldeepgohel06@gmail.com"
              className="text-white hover:text-tech-light-purple transition-colors"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {currentYear} Kuldeep Gohel. All rights reserved.
            </p>
            
            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
