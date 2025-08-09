import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import { NAV_LINKS } from './constants';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import { Analytics } from '@vercel/analytics/react';

const SideNav: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const sideNavLinks = NAV_LINKS.filter(link => link.href.startsWith('#'));

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end space-y-6">
      {sideNavLinks.map((link) => (
        <a key={link.href} href={link.href} aria-label={`Go to ${link.name} section`} className="block w-auto text-right group">
          <div className="flex items-center justify-end">
            <span 
              className={`text-xs mr-3 transition-all duration-300 opacity-0 group-hover:opacity-100 ${activeSection === link.href.substring(1) ? 'opacity-100 text-dark-text' : 'text-dark-text-secondary'}`}
            >
              {link.name}
            </span>
            <div 
              className={`transition-all duration-300 rounded-full ${activeSection === link.href.substring(1) ? 'w-3 h-3 bg-dark-text' : 'w-2 h-2 bg-dark-text-secondary group-hover:bg-dark-text'}`}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = NAV_LINKS
      .filter(link => link.href.startsWith('#'))
      .map(link => document.getElementById(link.href.substring(1)));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      }
    );

    sections.forEach(sec => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach(sec => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  return (
    <div className="bg-dark-bg text-dark-text font-sans">
      <Header activeSection={activeSection} />
      <SideNav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Leadership />
        <Contact />
        <Blog />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;