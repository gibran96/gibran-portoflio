
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Server, Globe, GitBranch } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate software engineer specializing in building exceptional digital 
              experiences. With a strong foundation in both frontend and backend technologies, 
              I enjoy creating efficient, scalable, and user-friendly solutions.
            </p>
            <p className="text-lg">
              My journey in technology began over 5 years ago, and since then, I've had the 
              opportunity to work with diverse teams on a wide range of projects. I'm constantly 
              learning and exploring new technologies to stay at the forefront of this rapidly 
              evolving field.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring hiking trails, reading tech blogs, 
              or contributing to open-source projects.
            </p>
            
            <div className="pt-4">
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Code className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p>Crafting responsive and intuitive user interfaces using modern frameworks.</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Server className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p>Building robust APIs and services with focus on performance and scalability.</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Globe className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Apps</h3>
              <p>Developing full-stack applications that deliver exceptional user experiences.</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <GitBranch className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CI/CD</h3>
              <p>Implementing efficient development workflows and deployment pipelines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
