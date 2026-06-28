import React from 'react';
import { Cpu, Code2, Paintbrush, Server, Database, Wrench, Users, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: <Cpu className="text-blue-400" size={24} />,
      gradient: 'from-blue-500/10 to-indigo-500/5',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'DBMS (Database Management)',
        'Operating Systems',
        'Computer Networks',
        'REST APIs',
        'Problem Solving'
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="text-indigo-400" size={24} />,
      gradient: 'from-indigo-500/10 to-purple-500/5',
      skills: [
        'Java',
        'C#',
        'JavaScript',
        'SQL',
        'Python',
        'C'
      ]
    },
    {
      title: 'Frontend',
      icon: <Paintbrush className="text-purple-400" size={24} />,
      gradient: 'from-purple-500/10 to-pink-500/5',
      skills: [
        'HTML5',
        'CSS3',
        'React.js',
        'Bootstrap',
        'Tailwind CSS'
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="text-pink-400" size={24} />,
      gradient: 'from-pink-500/10 to-red-500/5',
      skills: [
        'ASP.NET Core',
        'ASP.NET Web API',
        'Node.js',
        'Express.js'
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="text-emerald-400" size={24} />,
      gradient: 'from-emerald-500/10 to-teal-500/5',
      skills: [
        'MySQL',
        'SQL Server',
        'MongoDB'
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-cyan-400" size={24} />,
      gradient: 'from-cyan-500/10 to-blue-500/5',
      skills: [
        'Git & GitHub',
        'Visual Studio',
        'VS Code',
        'Postman',
        'Eclipse'
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-amber-400" size={24} />,
      gradient: 'from-amber-500/10 to-yellow-500/5',
      skills: [
        'Analytical Thinking',
        'Strong Problem-Solving',
        'Team Collaboration',
        'Leadership',
        'Adaptability',
        'Time Management',
        'Quick Learning'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute top-1/3 right-1/10 w-96 h-96 glow-blue pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 glow-purple pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            A comprehensive mapping of my technical toolkit, programming capabilities, and soft skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-card p-6.5 rounded-2xl border border-slate-800/80 bg-gradient-to-br ${category.gradient} flex flex-col justify-between`}
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3.5 mb-5 pb-3.5 border-b border-slate-850/80">
                  <div className="p-2.5 rounded-xl bg-navy-900 border border-slate-800/80 shadow-md">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2.5 text-slate-300 font-light text-sm sm:text-base">
                      <CheckCircle2 size={15} className="text-indigo-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative accent */}
              <div className="mt-6 flex justify-end">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  Expertise
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
