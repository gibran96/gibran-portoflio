import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Server, Globe, GitBranch, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const experience = [
    {
      company: 'EagleBank',
      role: 'Full Stack Software Engineer',
      period: 'June 2025 - Present',
      description: 'Building foundational infrastructure for web applications using Python (FastAPI) and React on Azure. Implementing AI-driven chat features with RAG workflows and CI/CD pipelines.'
    },
    {
      company: 'Northeastern University',
      role: 'Graduate Teaching Assistant',
      period: 'Jan 2024 - May 2025',
      description: 'TA for ML Ops and Web Development courses. Mentored 370+ students in React, TypeScript, Node.js, and MongoDB.'
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Full Stack Engineer',
      period: 'Nov 2021 - May 2023',
      description: 'Led development for Auto Insurance application using Angular 13 and Java Spring Boot. Achieved 10% increase in user quote completion and 30% productivity boost through CI/CD improvements.'
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Software Engineer',
      period: 'Sept 2018 - Oct 2021',
      description: 'Redesigned banking applications to Spring Boot & Angular, improving response time by 30%. Led DevOps migration to MS Azure reducing costs by 10%.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg">
              I'm Gibran Myageri, a Full Stack Software Engineer with over 6 years of experience 
              building scalable web applications and cloud infrastructure. I hold a Master's degree 
              in Computer Science from Northeastern University, Boston.
            </p>
            <p className="text-lg">
              My expertise spans frontend technologies like React and Angular, backend frameworks 
              including Spring Boot, FastAPI, and Node.js, as well as cloud platforms like Azure and AWS.
              I'm passionate about ML Ops and integrating AI capabilities into applications.
            </p>
            <p className="text-lg">
              I'm certified as an AWS Cloud Practitioner and Microsoft Azure Fundamentals (AZ-500), 
              and have completed Machine Learning specialization from DeepLearning.AI.
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
              <p>React, Angular, React Native, Next.js, TypeScript, Tailwind CSS, Redux</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Server className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p>Java Spring Boot, Python FastAPI, Node.js, Express, Django, Flask</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Globe className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p>AWS, Azure, Docker, Kubernetes, Terraform, Jenkins, CI/CD Pipelines</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <GitBranch className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ML Ops</h3>
              <p>MLFlow, Airflow, Vertex AI, Model Training & Deployment, RAG Workflows</p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-primary" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-md border-l-4 border-primary">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="mt-3 text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold">Master of Science in Computer Science</h4>
              <p className="text-primary font-medium">Northeastern University, Boston, MA</p>
              <p className="text-sm text-muted-foreground mt-1">April 2025</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Courses: Algorithms, Programming Design Paradigm, Web Development, Foundations of AI, Machine Learning, MLOPs, LLMs
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold">Bachelor of Technology in EEE</h4>
              <p className="text-primary font-medium">SRM Institute of Science and Technology, India</p>
              <p className="text-sm text-muted-foreground mt-1">July 2014 - May 2018</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Courses: Advanced Calculus, Discrete Mathematics, Probability and Statistics, Digital Signal Processing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
