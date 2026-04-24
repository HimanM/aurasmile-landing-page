import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-5 sm:gap-6 lg:gap-8 z-[60] gsap-fade-in pointer-events-auto">
      <a 
        href="https://linkedin.com/in/himanm" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 active:scale-95"
      >
        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
      </a>
      <a 
        href="https://github.com/himanm" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 active:scale-95"
      >
        <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
      </a>
    </div>
  );
};

export default SocialLinks;
