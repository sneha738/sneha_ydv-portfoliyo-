import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll event for Back-to-Top visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver for active navigation highlighting
    const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
    const observers = [];

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          { rootMargin: '-25% 0px -55% 0px' } // Triggers when section occupies the active middle portion
        );
        observer.observe(el);
        observers.push({ observer, el });
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#070913] text-slate-100 overflow-hidden font-sans">
      
      {/* Dynamic Ambient Background Orbs */}
      <div className="absolute top-[-100px] left-[-150px] w-[550px] h-[550px] rounded-full glow-blue pointer-events-none z-0 animate-float-slow" />
      <div className="absolute top-[35%] right-[-150px] w-[500px] h-[500px] rounded-full glow-purple pointer-events-none z-0 animate-pulse-subtle" />
      <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] rounded-full glow-emerald pointer-events-none z-0 animate-float-slow" />

      {/* Floating Navigation bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Areas */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer bar */}
      <Footer />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-650 hover:to-purple-700 text-white shadow-lg transition-all duration-300 border border-slate-700/30 hover:scale-110 active:scale-95 cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
        }`}
        title="Scroll to Top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
