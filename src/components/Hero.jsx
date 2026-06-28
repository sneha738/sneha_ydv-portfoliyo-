import React, { useState, useEffect } from 'react';
import { Download, Briefcase, Code, Mail } from 'lucide-react';
import profile from "../assets/profile.jpg";
const Hero = () => {
  const titles = ['Software Developer', 'Full-Stack Developer', 'Problem Solver', 'API Builder'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const activeTitle = titles[currentTitleIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentText(activeTitle.substring(0, currentText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setCurrentText(activeTitle.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeTitle) {
      // Hold before delete
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(300);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const scrollToSection = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 glow-blue pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 glow-purple pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column (Details) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-slate-700/30 text-indigo-400 text-sm font-semibold tracking-wide w-fit">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
              <span>Available for SDE Roles</span>
            </div>

            <h3 className="text-xl md:text-2xl font-medium text-slate-300">
              Hello, I'm
            </h3>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Sneha Yadav
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent min-h-[40px]">
              <span className="typing-cursor">{currentText}</span>
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              I am a passionate Software Developer with strong problem-solving skills and experience in Java, C#, ASP.NET, SQL, and modern web technologies. I enjoy building scalable applications, developing efficient APIs, and continuously learning new technologies to create impactful solutions.
            </p>

            {/* Buttons Grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                download="Sneha_Yadav_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-5 py-3 rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base cursor-pointer"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('#projects')}
                className="flex items-center justify-center gap-2 bg-navy-900 border border-slate-700/60 hover:border-slate-500 text-slate-200 hover:text-white font-medium px-5 py-3 rounded-xl shadow-md hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base"
              >
                <Briefcase size={18} />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => scrollToSection('#skills')}
                className="flex items-center justify-center gap-2 bg-navy-900 border border-slate-700/60 hover:border-slate-500 text-slate-200 hover:text-white font-medium px-5 py-3 rounded-xl shadow-md hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base"
              >
                <Code size={18} />
                <span>View Skills</span>
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-750 text-white font-medium px-5 py-3 rounded-xl shadow-lg shadow-purple-500/20 hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base col-span-2 sm:col-span-1"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Short Stats Badge */}
            <div className="flex items-center gap-8 pt-6 border-t border-slate-800/80">
              <div>
                <span className="block text-3xl font-extrabold text-white">200+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">LeetCode Solved</span>
              </div>
              <div className="w-[1px] h-10 bg-slate-800" />
              <div>
                <span className="block text-3xl font-extrabold text-white">7.05</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">B.Tech CPI</span>
              </div>
              <div className="w-[1px] h-10 bg-slate-800" />
              <div>
                <span className="block text-3xl font-extrabold text-white">4+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Key Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column (Image Portrait) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              {/* Outer glowing decoration rings */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 rounded-2xl opacity-30 blur-2xl group-hover:opacity-45 transition-opacity duration-500 animate-pulse-subtle z-0" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-2xl opacity-75 z-0" />

              {/* Image box with floating animation */}
              <div className="absolute inset-0 bg-navy-950 rounded-2xl overflow-hidden border border-slate-700/50 shadow-glass-lg flex items-center justify-center z-10 animate-float-medium">

                <img
                  src={profile}
                  alt="Sneha Yadav"
                  className="w-full h-full object-cover object-top hover:scale-[1.05] transition-transform duration-700 ease-out"
                />

                {/* Visual Glass overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 glass px-4 py-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-slate-400">Location</span>
                    <span className="text-sm font-medium text-white">Mathura, India</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-slate-400">University</span>
                    <span className="text-sm font-medium text-white">GLA University</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
