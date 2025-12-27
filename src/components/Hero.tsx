
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const phrases = [
    "Full Stack Software Engineer",
    "Cloud & DevOps Specialist", 
    "ML Ops Enthusiast",
    "AWS Certified Professional"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timer: NodeJS.Timeout;

    if (isTyping) {
      if (text.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isTyping, currentPhraseIndex, phrases]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-background dark:to-background/80 bg-gradient-to-b from-white to-secondary/30"></div>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating code elements */}
        <div className="hidden md:block absolute top-1/4 left-1/5 text-primary/20 text-4xl font-mono animate-float animation-delay-1000">{"{}"}</div>
        <div className="hidden md:block absolute top-1/2 right-1/4 text-accent/20 text-3xl font-mono animate-float animation-delay-3000">{"</>"}</div>
        <div className="hidden md:block absolute bottom-1/3 left-1/3 text-secondary/20 text-5xl font-mono animate-float animation-delay-5000">{"( )"}</div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.015] dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col max-w-xl animate-fade-in">
            <p className="text-lg md:text-xl text-primary mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Gibran Myageri</h1>
            <div className="h-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6 inline-flex">
                <span>{text}</span>
                <span className={`w-1 h-8 bg-primary ml-1 ${isTyping ? 'animate-blink' : 'opacity-0'}`}></span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Full Stack Engineer with 6+ years of experience building scalable web applications
              using React, Angular, Python, Java, and cloud technologies like Azure and AWS.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="rounded-full">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild className="rounded-full">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/gibran96" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com/in/gibran-myageri" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="mailto:gibranmyageri@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-primary/80 to-accent/80 rounded-full overflow-hidden flex items-center justify-center">
                <div className="text-9xl text-white/80 font-bold">{"{}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
