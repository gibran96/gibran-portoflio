import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return <><Header /><main id="main-content" className="shell"><Hero /><Experience /><Projects /><About /><Contact /></main><Footer /></>;
}
