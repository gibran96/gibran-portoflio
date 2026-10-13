import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return <section id="projects" className="section" aria-labelledby="projects-title">
    <div className="section-heading"><p className="eyebrow">02 / Selected projects</p><h2 id="projects-title">Ideas into applications.</h2><p>A selection of projects from my graduate work at Northeastern.</p></div>
    <div className="project-list">{projects.map((project, index) => <article key={project.id} className="project-row">
      <div className="project-number" aria-hidden="true">0{index + 1}</div>
      <div className="project-overview"><p className="small-label">{project.category}</p><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      <div className="project-detail"><p>{project.description}</p><ul className="contribution-list">{project.contributions.map(item => <li key={item}>{item}</li>)}</ul><div className="project-links">{project.github && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} code on GitHub (opens in a new tab)`}>View code <ArrowUpRight size={16} /></a>}{project.liveDemo && <a className="text-link" href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={16} /></a>}</div></div>
    </article>)}</div>
  </section>;
}
