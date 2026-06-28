import React from 'react';
import { ExternalLink, Activity, Shield, ShoppingCart, Globe } from 'lucide-react';

const Projects = () => {
  const projectsList = [
    {
      title: 'Hospital Management System',
      description: 'A healthcare management application used to manage patients, doctors, appointments, billing, and hospital records efficiently. Implements robust role-based access for admins and medical staff.',
      tech: ['C#', 'ASP.NET', 'SQL Server', 'Bootstrap'],
      github: 'https://github.com/sneha738/Hospital-Management-System',
      live: '#',
      icon: <Activity className="text-emerald-400" size={32} />,
      bgGradient: 'from-teal-600/20 via-emerald-600/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/30'
    },
    {
      title: 'Global Guard API',
      description: 'A secure RESTful API system designed for authentication, authorization, and efficient data management. Employs advanced cryptography, token-based verification, and centralized error logging.',
      tech: ['C#', 'ASP.NET Web API', 'SQL Server', 'JWT'],
      github: 'https://github.com/sneha738/GlobalGuard-API',
      live: '#',
      icon: <Shield className="text-blue-400" size={32} />,
      bgGradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
      borderColor: 'group-hover:border-blue-500/30'
    },
    {
      title: 'E-Commerce Website',
      description: 'A full-stack, responsive e-commerce web application inspired by Myntra. Features secure customer authentication, product catalog, smart search/filtering, shopping cart management, and order checkout.',
      tech: ['React JS', 'Node.js', 'Express JS', 'MongoDB'],
      github: 'https://github.com/sneha738/e-commerce-shopping-website-',
      live: '#',
      icon: <ShoppingCart className="text-pink-400" size={32} />,
      bgGradient: 'from-pink-600/20 via-purple-600/10 to-transparent',
      borderColor: 'group-hover:border-pink-500/30'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A premium, fully responsive developer portfolio website showcasing technical skills, projects, achievements, and contact details with fluid animations and responsive glassmorphism styles.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      github: 'https://github.com/sneha738',
      live: 'https://sneha738.github.io',
      icon: <Globe className="text-purple-400" size={32} />,
      bgGradient: 'from-purple-600/20 via-indigo-600/10 to-transparent',
      borderColor: 'group-hover:border-purple-500/30'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-1/4 left-1/10 w-96 h-96 glow-blue pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 glow-purple pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            A curated showcase of applications I have built, demonstrating full-stack engineering and problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border border-slate-800/80 bg-navy-950/60 overflow-hidden flex flex-col justify-between hover:scale-[1.02] hover:bg-navy-900/40 hover:shadow-glass-lg transition-all duration-300 z-10`}
            >
              {/* Top Abstract Banner */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.bgGradient} flex items-center justify-center border-b border-slate-900`}>
                {/* Accent glow element */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="p-5.5 rounded-2xl bg-navy-950/90 border border-slate-800/60 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {project.icon}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-350 text-sm md:text-base leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-900">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-white font-medium text-sm px-4 py-2 rounded-xl bg-navy-900 border border-slate-800/80 hover:bg-slate-800/80 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Repository</span>
                    </a>
                    
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white font-medium text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-750 shadow-md shadow-indigo-500/10 transition-all duration-200"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {(!project.live || project.live === '#') && (
                      <button
                        onClick={() => alert(`A live demonstration for "${project.title}" will be hosted soon. You can view the full codebase on GitHub!`)}
                        className="flex items-center gap-2 text-slate-400 hover:text-indigo-300 font-medium text-sm px-4 py-2 rounded-xl bg-navy-900/50 border border-slate-800/50 hover:border-slate-700/60 transition-all duration-200 cursor-pointer"
                      >
                        <ExternalLink size={16} />
                        <span>Request Demo</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
