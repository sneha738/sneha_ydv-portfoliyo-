import React from 'react';
import { Award, Code2, GraduationCap, Flame, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievementsList = [
    {
      title: 'LeetCode Problem Solver',
      subtitle: 'sneha_yadav2005',
      stat: '200+ Solved',
      desc: 'Solved over 200 coding problems covering Data Structures, Algorithms (Arrays, Strings, Dynamic Programming, Graphs), and SQL queries to strengthen core analytical thinking.',
      icon: <Code2 className="text-amber-400" size={24} />,
      link: 'https://leetcode.com/u/sneha_yadav2005/',
      linkLabel: 'LeetCode Profile'
    },
    {
      title: 'Academic Excellence',
      subtitle: 'GLA University & HSV Inter College',
      stat: '7.05 CPI / 89% / 84%',
      desc: 'Maintained solid academic standing with a 7.05 CPI in B.Tech Computer Science Engineering. Achieved 89% in Class X and 84% in Class XII examinations in secondary education.',
      icon: <GraduationCap className="text-blue-400" size={24} />,
      link: null
    },
    {
      title: 'Continuous Technical Development',
      subtitle: 'Self-Driven Learning',
      stat: 'Full-Stack Proficiency',
      desc: 'Successfully self-learned and integrated ASP.NET Web API, Node.js, Express.js, MongoDB, and React.js to build complex, secure web software outside the core curriculum.',
      icon: <Flame className="text-purple-400" size={24} />,
      link: null
    }
  ];

  return (
    <section id="achievements" className="py-20 relative bg-navy-950/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-blue pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            A record of coding milestones, academic metrics, and ongoing technical development.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsList.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl border border-slate-800/80 bg-navy-950/40 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Stats */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-navy-900 border border-slate-800/80 shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-indigo-500/10 bg-indigo-500/5">
                    {item.stat}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest block mb-4">
                  {item.subtitle}
                </span>
                
                <p className="text-slate-455 text-sm md:text-base leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {item.link && (
                <div className="mt-8 pt-4 border-t border-slate-900">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-350 hover:text-white transition-colors duration-200"
                  >
                    <span>{item.linkLabel}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
