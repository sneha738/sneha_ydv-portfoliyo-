import React from 'react';
import { Mail, Download, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-900/60 pt-16 pb-8 relative z-10">
      
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-900/60">
          
          {/* Logo & Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sneha Yadav
            </h3>
            <p className="text-slate-400 font-light text-sm max-w-sm">
              Software Developer specializing in building robust, performant APIs, responsive web systems, and structured algorithm designs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads & Socials */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-widest">
              Downloads & Contact
            </h4>
            
            <a
              href="./resume.pdf"
              download="Sneha_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2 bg-navy-900 border border-slate-800 text-slate-200 hover:text-white font-medium text-xs px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md shadow-black/10"
            >
              <Download size={14} />
              <span>Resume PDF</span>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sneha738"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-navy-900 border border-slate-850 hover:bg-slate-800 transition-colors"
                title="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sneha-yad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-navy-900 border border-slate-850 hover:bg-slate-800 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:snehayadav92456@gmail.com"
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-navy-900 border border-slate-850 hover:bg-slate-800 transition-colors"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            &copy; {currentYear} Sneha Yadav. All rights reserved. Designed & built with React + Tailwind CSS.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors py-2 px-3 bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/10 rounded-xl"
          >
            <span>Back to top</span>
            <ChevronUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
