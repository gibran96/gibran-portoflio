import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <a 
              href="#" 
              className="text-2xl font-bold"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <span className="text-primary">Gibran</span>Portfolio
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <a 
              href="https://github.com/gibran96" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/gibran-myageri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:gibranmyageri@gmail.com"
              className="bg-background hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="border-t border-border w-full pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Gibran Myageri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-md hover:shadow-lg transition-shadow z-20"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
