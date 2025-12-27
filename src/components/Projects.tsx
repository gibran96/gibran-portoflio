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
  const categories = ['All', 'Web', 'Backend', 'Cloud', 'ML'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects: Project[] = [
    {
      id: '1',
      title: 'Banking Web Applications',
      description: 'Engineered foundational infrastructure for web applications at EagleBank using Python (FastAPI) for backend and React for frontend, hosted on Azure App Services.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tags: ['React', 'FastAPI', 'Python', 'Azure', 'CI/CD'],
      category: 'Web'
    },
    {
      id: '2',
      title: 'AI Chat with RAG Workflow',
      description: 'Integrated AI-driven chat feature into internal applications using Retrieval-Augmented Generation (RAG) workflow to enhance user interaction and information retrieval.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      tags: ['Python', 'LLMs', 'RAG', 'Azure', 'AI'],
      category: 'ML'
    },
    {
      id: '3',
      title: 'Commercial Loan Tracker',
      description: 'Built a critical system for tracking and maintaining commercial loans, providing comprehensive asset management for the bank.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tags: ['React', 'FastAPI', 'PostgreSQL', 'Azure'],
      category: 'Web'
    },
    {
      id: '4',
      title: 'Auto Insurance Application',
      description: 'Led front-end and back-end development for Farmers Insurance, replacing legacy technologies and achieving 10% increase in user quote completion.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
      tags: ['Angular 13', 'Java Spring Boot', 'SEO', 'CloudBees'],
      category: 'Web'
    },
    {
      id: '5',
      title: 'CI/CD Pipeline Infrastructure',
      description: 'Developed CI/CD pipelines from scratch using self-hosted GitHub Runners on Azure VM, automating deployment processes and boosting productivity by 30%.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
      tags: ['Jenkins', 'GitHub Actions', 'Azure', 'Docker'],
      github: 'https://github.com/gibran96',
      category: 'Cloud'
    },
    {
      id: '6',
      title: 'SWIFT Payment Tracker',
      description: 'Engineered real-time tracker for cross-border payments within SWIFT Global Payment Initiative, boosting employee productivity and expediting payment tracking by 40%.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      tags: ['Spring Boot', 'Angular', 'Microservices', 'Azure'],
      category: 'Backend'
    },
    {
      id: '7',
      title: 'ABN Amro Banking Redesign',
      description: 'Redesigned intranet banking applications migrating to Spring Boot & Angular 9, improving customer response time by 30%.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      tags: ['Spring Boot', 'Angular 9', 'Java', 'Microservices'],
      category: 'Web'
    },
    {
      id: '8',
      title: 'ML Ops Course Materials',
      description: 'Created comprehensive study materials on CI/CD pipelines, model training, deployment and hosting for Machine Learning Operations course at Northeastern.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
      tags: ['MLFlow', 'Airflow', 'Docker', 'Kubernetes', 'AWS'],
      category: 'ML'
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
