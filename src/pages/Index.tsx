
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { updateMetaTags } from '@/utils/seoHelpers';

const Index = () => {
  useEffect(() => {
    // Update meta tags for SEO
    updateMetaTags(
      'Gibran Myageri | Software Engineer Portfolio',
      'Professional portfolio showcasing software engineering projects, skills, and experience of Gibran Myageri.',
      'Gibran Myageri, software engineer, developer, portfolio, web development, programming, react, node.js, full stack developer'
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
