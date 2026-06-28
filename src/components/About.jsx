import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'GLA University, Mathura',
      duration: '2023 – 2027',
      grade: 'CPI: 7.05',
      desc: 'Focusing on core Computer Science disciplines, Data Structures & Algorithms, and Software Engineering.',
    },
    {
      degree: 'Class XII (Senior Secondary)',
      institution: 'HSV Inter College, Sonebhadra',
      duration: 'Completed 2023',
      grade: 'Percentage: 84%',
      desc: 'Specialized in Science streams (Physics, Chemistry, Mathematics).',
    },
    {
      degree: 'Class X (Secondary School)',
      institution: 'HSV Inter College, Sonebhadra',
      duration: 'Completed 2021',
      grade: 'Percentage: 89%',
      desc: 'Strong foundation in Science and Mathematics.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-emerald pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            Discover my career path, educational background, and what drives my passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Professional Summary & Objectives */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-slate-700/30 flex-grow">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="text-indigo-400" size={22} />
                <span>Professional Biography</span>
              </h3>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                I am a results-driven B.Tech Computer Science student specializing in Data Structures & Algorithms and Full-Stack Development. I have solved 200+ coding challenges on LeetCode and built robust, functional web applications featuring AI integration, secure authentication, and optimized databases.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                My technical philosophy centers around clean code, modular architecture, and optimization. I excel at converting complex system designs into reliable features, focusing on performance, scalability, and user-centric flows.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-slate-700/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="text-purple-400" size={22} />
                <span>Career Objective</span>
              </h3>
              <p className="text-slate-300 leading-relaxed font-light">
                Seeking a Software Development Engineer (SDE) role to contribute to high-performance, product-driven engineering teams. I aim to apply my strong programming expertise in Java, C#, and full-stack environments to build innovative, efficient solutions that deliver real-world impact.
              </p>
            </div>
          </div>

          {/* Right: Education Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="glass-card p-8 rounded-2xl border border-slate-700/30 h-full">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="text-blue-400" size={24} />
                <span>Education Journey</span>
              </h3>
              
              <div className="relative border-l border-slate-800 ml-3 space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Node Dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-indigo-500 bg-navy-950 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base md:text-lg font-semibold text-white">
                        {item.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded-full border border-slate-850">
                        <Calendar size={12} />
                        {item.duration}
                      </span>
                    </div>

                    <span className="text-sm font-medium text-indigo-400 block mb-2">
                      {item.institution}
                    </span>

                    <span className="inline-block text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded mb-3">
                      {item.grade}
                    </span>

                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
