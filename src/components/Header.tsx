import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const sections = ['Experience', 'Projects', 'About', 'Contact'];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="site-header no-print">
      <div className="shell header-inner">
        <Link className="wordmark" to="/" aria-label="Gibran Myageri home" onClick={() => setIsOpen(false)}>gm<span>.</span></Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {sections.map(section => <a key={section} href={`/#${section.toLowerCase()}`}>{section}</a>)}
          <Link className="nav-resume" to="/resume">Resume <span aria-hidden="true">↗</span></Link>
        </nav>
        <button className="menu-toggle" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="mobile-nav" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {isOpen && <nav id="mobile-nav" aria-label="Mobile navigation" className="mobile-nav shell" onKeyDown={event => { if (event.key === 'Escape') { setIsOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}>
        {sections.map(section => <a key={section} href={`/#${section.toLowerCase()}`} onClick={() => setIsOpen(false)}>{section}</a>)}
        <Link to="/resume" onClick={() => setIsOpen(false)}>Resume ↗</Link>
      </nav>}
    </header>
  );
}
