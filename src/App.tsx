import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from '@/pages/Index';
import Resume from '@/pages/Resume';
import NotFound from '@/pages/NotFound';

function PageNavigation() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = pathname === '/resume' ? 'Resume | Gibran Myageri' : pathname === '/' ? 'Gibran Myageri | Full Stack Software Engineer' : 'Page not found | Gibran Myageri';
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return <BrowserRouter><a className="skip-link" href="#main-content">Skip to content</a><PageNavigation /><Routes><Route path="/" element={<Index />} /><Route path="/resume" element={<Resume />} /><Route path="*" element={<NotFound />} /></Routes></BrowserRouter>;
}
