import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Contact() {
  return <section id="contact" className="section contact-section" aria-labelledby="contact-title">
    <p className="eyebrow">04 / Get in touch</p><h2 id="contact-title">Let's build<br />something useful.</h2><p>Have an engineering opportunity or a project in mind? I'd like to hear about it.</p>
    <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight aria-hidden="true" /></a>
    <div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div>
  </section>;
}
