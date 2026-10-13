import { education, profile } from '@/data/portfolio';
import Skills from '@/components/Skills';

export default function About() {
  return <section id="about" className="section" aria-labelledby="about-title">
    <div className="section-heading"><p className="eyebrow">03 / About</p><h2 id="about-title">Curiosity, backed by craft.</h2></div>
    <div className="about-grid"><p className="about-bio">{profile.bio}</p><div className="education-list">{education.map(item => <div key={item.school}><p className="small-label">{item.period}</p><h3>{item.school}</h3><p>{item.degree}</p><p className="education-location">{item.location}</p></div>)}</div></div>
    <Skills />
  </section>;
}
