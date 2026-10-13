import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import { education, experience, profile, skills } from '@/data/portfolio';

export default function Resume() {
  return <main id="main-content" className="resume-shell">
    <div className="resume-toolbar no-print"><Link className="text-link" to="/"><ArrowLeft size={16} /> Back to portfolio</Link><button className="primary-link" onClick={() => window.print()}><Printer size={17} /> Print / Save as PDF</button></div>
    <article className="resume-document">
      <header className="resume-header"><h1>{profile.name}</h1><p>{profile.role}</p><div className="resume-contact"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin}>linkedin.com/in/gibran-myageri</a><a href={profile.github}>github.com/gibran96</a></div></header>
      <section aria-labelledby="resume-summary"><h2 id="resume-summary">Summary</h2><p>{profile.summary}</p></section>
      <section aria-labelledby="resume-experience"><h2 id="resume-experience">Professional Experience</h2>{experience.map(job => <div className="resume-job" key={job.company}><div className="resume-heading-row"><h3>{job.company}</h3><span>{job.period}</span></div><p className="resume-role">{job.role}</p><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div>)}</section>
      <section aria-labelledby="resume-education"><h2 id="resume-education">Education</h2>{education.map(item => <div className="resume-education" key={item.school}><div className="resume-heading-row"><h3>{item.school}, {item.location}</h3><span>{item.period}</span></div><p>{item.degree}</p></div>)}</section>
      <section aria-labelledby="resume-skills"><h2 id="resume-skills">Technical Skills</h2>{skills.map(group => <p className="resume-skill" key={group.label}><strong>{group.label}:</strong> {group.items.join(', ')}</p>)}</section>
    </article>
  </main>;
}
