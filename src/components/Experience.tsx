import { experience } from '@/data/portfolio';

export default function Experience() {
  return <section id="experience" className="section" aria-labelledby="experience-title">
    <div className="section-heading"><p className="eyebrow">01 / Experience</p><h2 id="experience-title">Built for the real world.</h2><p>From modernizing banking systems to building platforms from the ground up.</p></div>
    <div className="experience-list">{experience.map(job => <article className="experience-row" key={job.company}>
      <div className="job-meta"><p className="small-label">{job.period}</p><h3>{job.company}</h3><p>{job.role}</p></div>
      <ul className="contribution-list">{job.bullets.slice(0, 3).map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
    </article>)}</div>
  </section>;
}
