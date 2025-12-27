import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'devops';
}

const Skills = () => {
  const skills: Skill[] = [
    // Programming Languages
    { name: 'Java', level: 95, category: 'languages' },
    { name: 'Python', level: 90, category: 'languages' },
    { name: 'JavaScript', level: 95, category: 'languages' },
    { name: 'TypeScript', level: 90, category: 'languages' },
    { name: 'Go', level: 70, category: 'languages' },
    { name: 'Swift', level: 65, category: 'languages' },
    
    // Frontend
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'Angular', level: 90, category: 'frontend' },
    { name: 'React Native', level: 80, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'Redux', level: 85, category: 'frontend' },
    
    // Backend
    { name: 'Spring Boot', level: 90, category: 'backend' },
    { name: 'Node.js/Express', level: 85, category: 'backend' },
    { name: 'Django/Flask', level: 80, category: 'backend' },
    { name: 'FastAPI', level: 85, category: 'backend' },
    { name: 'Hibernate', level: 80, category: 'backend' },
    
    // Databases
    { name: 'PostgreSQL', level: 85, category: 'databases' },
    { name: 'MySQL', level: 85, category: 'databases' },
    { name: 'MongoDB', level: 80, category: 'databases' },
    { name: 'Oracle SQL', level: 75, category: 'databases' },
    { name: 'DynamoDB', level: 70, category: 'databases' },
    
    // DevOps & Cloud
    { name: 'Docker', level: 85, category: 'devops' },
    { name: 'Kubernetes', level: 80, category: 'devops' },
    { name: 'AWS (EKS, ECS, EC2)', level: 85, category: 'devops' },
    { name: 'Azure', level: 85, category: 'devops' },
    { name: 'Jenkins/CI-CD', level: 90, category: 'devops' },
    { name: 'Terraform', level: 75, category: 'devops' },
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'Microsoft Azure Fundamentals AZ-500',
    'Machine Learning (DeepLearning.AI)'
  ];

  const categories = [
    { id: 'languages', name: 'Programming Languages' },
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend Development' },
    { id: 'databases', name: 'Databases' },
    { id: 'devops', name: 'DevOps & Cloud' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Skills</h2>

        {/* Certifications */}
        <div className="mt-12 mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Award className="text-primary" />
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <Badge key={cert} variant="secondary" className="text-sm py-2 px-4">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-2xl font-semibold">{category.name}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" indicatorClassName="bg-primary" />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
