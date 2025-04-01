
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  category: string;
}

const Projects = () => {
  const categories = ['All', 'Web', 'Mobile', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with product management, shopping cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      liveDemo: 'https://example.com',
      category: 'Web'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks, with drag-and-drop functionality and team collaboration.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      tags: ['React', 'TypeScript', 'Firebase', 'Material UI'],
      github: 'https://github.com',
      liveDemo: 'https://example.com',
      category: 'Web'
    },
    {
      id: '3',
      title: 'Fitness Tracker API',
      description: 'RESTful API for tracking workout routines, nutrition data, and user progress with detailed analytics.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'GraphQL'],
      github: 'https://github.com',
      category: 'Backend'
    },
    {
      id: '4',
      title: 'Weather Mobile App',
      description: 'A cross-platform mobile application that provides real-time weather forecasts and notifications.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['React Native', 'Redux', 'Weather API', 'Geolocation'],
      github: 'https://github.com',
      liveDemo: 'https://example.com',
      category: 'Mobile'
    },
    {
      id: '5',
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with a modern design.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      liveDemo: 'https://example.com',
      category: 'Web'
    },
    {
      id: '6',
      title: 'Chat Microservice',
      description: 'A scalable real-time chat service built with websockets and message queues for high throughput.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      tags: ['Node.js', 'WebSockets', 'RabbitMQ', 'Redis'],
      github: 'https://github.com',
      category: 'Backend'
    }
  ];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button size="sm" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
