import { skills } from '@/data/portfolio';
export default function Skills() {
  return <div className="skills-grid" aria-label="Technical skills">{skills.map(group => <div key={group.label}><h3 className="small-label">{group.label}</h3><p>{group.items.join(' · ')}</p></div>)}</div>;
}
