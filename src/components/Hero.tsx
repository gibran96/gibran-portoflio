import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '@/data/portfolio';

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="eyebrow"><span className="tiny-line" /> {profile.role}</div>
    <h1 id="hero-title">Gibran<br /><span>Myageri.</span></h1>
    <div className="hero-bottom">
      <div><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><a className="primary-link" href="#projects">Explore my work <ArrowDown size={17} /></a><Link className="text-link" to="/resume">View resume <ArrowUpRight size={17} /></Link></div></div>
      <div className="hero-note"><span>BASED IN</span><p>{profile.location}</p><span>WORKING ACROSS</span><p>Applications · Data · Cloud</p></div>
    </div>
  </section>;
}
