
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-white to-gray-50 pt-16">
      <div className="absolute inset-0 bg-[url('./picture_uploades/DSC_3260.jpg')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 animate-fade-in">
            <p className="text-tech-purple font-medium mb-2">Hello there 👋</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              I'm <span className="text-tech-blue">Kuldeep Gohel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              Software Engineer | Full-Stack Developer
            </p>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about creating robust web applications and solutions with modern technologies
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="bg-tech-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-white hover:bg-gray-100 text-tech-blue font-medium py-3 px-6 rounded-md border border-tech-blue transition-colors"
              >
                View Projects
              </a>
            </div>

            <div className="flex mt-8 space-x-4 justify-center md:justify-start">
              <a 
                href="https://linkedin.com/in/kuldigpohil06" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-tech-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a 
                href="https://github.com/imrkr18" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-tech-blue transition-colors"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a 
                href="mailto:kuldeepgohel06@gmail.com" 
                className="text-gray-700 hover:text-tech-blue transition-colors"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-tech-blue shadow-lg">
              <img 
                src="./picture-uploads/DSC_3260.jpg" 
                alt="Kuldeep Gohel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-tech-blue animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
