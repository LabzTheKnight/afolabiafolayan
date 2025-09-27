import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Skills() {
  const { isDarkMode } = useTheme();
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'Ruby on Rails', iconClass: 'fas fa-gem', color: '#dc2626', level: 5 },
    { name: 'React', iconClass: 'fab fa-react', color: '#06b6d4', level: 4 },
    { name: 'Git', iconClass: 'fab fa-git-alt', color: '#f97316', level: 4 },
    { name: 'SQL', iconClass: 'fas fa-database', color: '#3b82f6', level: 3 },
    { name: 'JavaScript', iconClass: 'fab fa-js-square', color: '#facc15', level: 4 },
    { name: 'Node.js', iconClass: 'fab fa-node', color: '#22c55e', level: 3 },
    { name: 'Express.js', iconClass: 'fas fa-server', color: '#64748b', level: 3 },
    { name: 'MongoDB', iconClass: 'fas fa-leaf', color: '#16a34a', level: 3 },
    { name: 'Python', iconClass: 'fab fa-python', color: '#3776ab', level: 3 },
    { name: 'Docker', iconClass: 'fab fa-docker', color: '#2496ed', level: 2 },
    { name: 'Java', iconClass: 'fab fa-java', color: '#ed8936', level: 3 },
    { name: 'Spring Boot', iconClass: 'fas fa-leaf', color: '#6db33f', level: 3 },
    { name: 'TypeScript', iconClass: 'fab fa-js-square', color: '#3178c6', level: 3 },
    { name: 'HTML/CSS', iconClass: 'fab fa-html5', color: '#e34f26', level: 4 },
    { name: 'Tailwind CSS', iconClass: 'fas fa-palette', color: '#06b6d4', level: 4 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills([]);
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, index]);
              }, index * 100);
            });
          } else {
            setVisibleSkills([]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`py-20 relative overflow-hidden ${
      isDarkMode ? 'bg-neutral-900' : 'bg-white'
    }`} ref={skillsRef}>
      <div className={`absolute inset-0 ${
        isDarkMode ? 'bg-neutral-900' : 'bg-white'
      }`}></div>
      
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-emerald-500/25 rotate-45 rounded-lg"></div>
      <div className="absolute top-24 right-24 w-24 h-24 bg-emerald-500/8 rounded-full"></div>
      <div className="absolute bottom-24 left-24 w-36 h-36 border border-emerald-500/20 rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-emerald-500/10 rounded-lg rotate-12"></div>
      
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="text-emerald-400">Skills</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies I use to build modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-sm border rounded-lg p-4 transition-all duration-500 hover:scale-105 hover:border-emerald-500/30 cursor-pointer ${
                isDarkMode 
                  ? 'bg-neutral-800/50 border-neutral-700' 
                  : 'bg-white/80 border-gray-200 shadow-sm'
              } ${
                visibleSkills.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="mb-2 p-2 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <i 
                    className={`${skill.iconClass} text-2xl transition-all duration-300`}
                    style={{ color: skill.color }}
                  ></i>
                </div>
                
                <h3 className={`font-semibold text-xs mb-1 group-hover:text-emerald-400 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-700'
                }`}>
                  {skill.name}
                </h3>

                <div className={`flex space-x-1 transition-all duration-300 ${hoveredSkill === index ? 'opacity-100' : 'opacity-0'}`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${
                        i < skill.level 
                          ? 'bg-emerald-400 group-hover:bg-teal-400' 
                          : isDarkMode ? 'bg-neutral-600' : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ 
                  background: `radial-gradient(circle at center, ${skill.color}10, transparent)`,
                  filter: 'blur(10px)'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
