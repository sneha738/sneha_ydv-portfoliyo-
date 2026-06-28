import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-nav py-3 shadow-glass-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-2xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 tracking-tight"
        >
          Sneha Yadav
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[15px] font-medium tracking-wide transition-colors relative py-1 hover:text-white ${
                    activeSection === link.href.substring(1)
                      ? 'text-indigo-400 font-semibold'
                      : 'text-slate-300'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? 'w-full' : 'w-0 hover:w-full'
                  }`} />
                </a>
              </li>
            ))}
          </ul>
          
          {/* Resume Download Button */}
          <a
            href="./resume.pdf"
            download="Sneha_Yadav_Resume.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          {/* Resume Icon Button for quick mobile download */}
          <a
            href="./resume.pdf"
            download="Sneha_Yadav_Resume.pdf"
            className="bg-navy-900 border border-slate-700/50 text-indigo-400 p-2.5 rounded-full hover:bg-navy-850 hover:text-white transition-all duration-300"
            title="Download Resume"
          >
            <Download size={16} />
          </a>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-300 hover:text-white p-1 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 right-0 w-72 bg-navy-950/95 backdrop-blur-xl border-l border-slate-800 z-50 transform transition-transform duration-300 ease-out shadow-2xl md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="font-extrabold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-full border border-slate-800/80 hover:bg-slate-900 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex flex-col space-y-6 flex-grow">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-lg font-medium block py-2 transition-colors border-b border-slate-900/50 hover:text-white ${
                    activeSection === link.href.substring(1)
                      ? 'text-indigo-400 font-semibold border-indigo-500/20'
                      : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <a
              href="./resume.pdf"
              download="Sneha_Yadav_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-[1.01] transition-transform duration-300"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
