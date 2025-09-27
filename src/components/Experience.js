import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Experience() {
  const { isDarkMode } = useTheme();
  const [visibleItems, setVisibleItems] = useState([]);
  const experienceRef = useRef(null);

  const experienceData = [
    {
      title: 'Assistant Teacher',
      company: 'Le Wagon Institute',
      period: '09/2022 - 03/2023',
      location: 'Cologne, Germany',
      description: 'Assisted new students with daily challenges and answered technical questions regarding programming.',
      icon: 'fas fa-chalkboard-teacher',
      color: 'text-emerald-300',
      highlights: ['Mentored junior students', 'Code reviews and debugging', 'Delivered mini-workshops']
    },
    {
      title: 'Assistant Manager',
      company: 'Einstein Express',
      period: '2019 - 2022',
      location: 'Kamp-Lintfort, Germany',
      description: 'Managed company events, stock inventory, sales, client outreach, and staff recruitment.',
      icon: 'fa-solid fa-list-check',
      color: 'text-teal-300',
      highlights: ['Team coordination', 'Inventory & logistics', 'Customer-facing operations']
    }
  ];

  const educationData = [
    {
      title: 'Communication and Information Engineering',
      company: 'Hochschule Rhein-Waal',
      period: '10/2019 – present',
      location: 'Kamp-Lintfort, Germany',
      description: 'Bachelor\'s degree in Communication and Information Engineering with focus on software development and digital communications.',
      icon: 'fas fa-graduation-cap',
      color: 'text-cyan-300',
      highlights: ['Software-focused curriculum', 'Signals & systems basics', 'Team projects']
    },
    {
      title: 'Full Stack Web Development',
      company: 'Le Wagon Institute',
      period: '07/2022 – 09/2022',
      location: 'Cologne, Germany',
      description: '9-week intensive course on full-stack web development covering Ruby on Rails, JavaScript, React, and database management.',
      icon: 'fas fa-laptop-code',
      color: 'text-emerald-400',
      highlights: ['Full-stack bootcamp', 'Rapid prototyping', 'Group project delivery']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems([]);
            const totalItems = experienceData.length + educationData.length;
            for (let i = 0; i < totalItems; i++) {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, i]);
              }, i * 200);
            }
          } else {
            setVisibleItems([]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ItemCard = ({ item, index, delay = 0 }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <div 
        className={`group relative backdrop-blur-sm p-6 rounded-xl shadow-lg card-hover mb-6 transition-all duration-700 border hover:border-emerald-300/60 ${
          isDarkMode 
            ? 'bg-neutral-800/50 border-neutral-700' 
            : 'bg-white/80 border-gray-200'
        } ${
          visibleItems.includes(index) 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-full bg-neutral-700/20 border border-neutral-600 flex items-center justify-center">
            <i className={`${item.icon} ${item.color} text-xl`}></i>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className={`text-lg font-semibold mb-1 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{item.title}</h3>
                <h4 className="text-amber-300 font-medium mb-2">{item.company}</h4>
              </div>
              <div className="ml-4 flex items-center space-x-2">
                <button onClick={() => setExpanded(!expanded)} className="text-sm text-amber-200 bg-amber-800/10 px-3 py-1 rounded-md border border-amber-800/15 hover:scale-105 transition-transform">{expanded ? 'Hide' : 'Details'}</button>
              </div>
            </div>

            <p className={`text-sm mb-2 flex items-center ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <i className={`fas fa-calendar-alt mr-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}></i>
              {item.period}
            </p>
            <p className={`text-sm mb-2 flex items-center ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <i className={`fas fa-map-marker-alt mr-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}></i>
              {item.location}
            </p>
            <p className={`text-sm leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>{item.description}</p>

            <div className={`absolute top-4 right-4 w-40 border rounded-md p-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
              isDarkMode 
                ? 'bg-neutral-800/90 border-neutral-700 text-gray-200' 
                : 'bg-white/95 border-gray-200 text-gray-700'
            }`}>
              <div className="font-semibold text-emerald-300 mb-1">Quick Highlights</div>
              {item.highlights && item.highlights.slice(0,2).map((h, i) => (
                <div key={i} className="flex items-center"><i className="fas fa-check text-emerald-300 mr-2 text-xs"></i>{h}</div>
              ))}
            </div>

            {expanded && (
              <div className={`mt-4 p-4 border rounded-md ${
                isDarkMode 
                  ? 'bg-neutral-800/70 border-neutral-700' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className={`text-sm mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>More details</div>
                <ul className={`list-disc list-inside text-sm space-y-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {item.highlights && item.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
        <section id="experience" className={`py-20 relative overflow-hidden ${
          isDarkMode ? 'bg-neutral-900' : 'bg-white'
        }`} ref={experienceRef}>
      <div className={`absolute inset-0 ${
        isDarkMode ? 'bg-neutral-900' : 'bg-white'
      }`}></div>
      
      <div className="absolute top-16 left-16 w-32 h-32 border-2 border-emerald-500/25 rotate-45 rounded-lg"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-emerald-500/8 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-36 h-36 border border-emerald-500/20 rotate-45"></div>
      <div className="absolute bottom-16 right-16 w-28 h-28 bg-emerald-500/10 rounded-lg rotate-12"></div>
      
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience & <span className="text-emerald-400">Education</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My journey through professional experiences and educational achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                <i className="fas fa-briefcase text-white text-sm"></i>
              </div>
              <h3 className={`text-2xl font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Professional Experience</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line for desktop */}
              <div className="hidden lg:block absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-500 opacity-30"></div>
              
              {experienceData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="hidden lg:block absolute left-5 top-8 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full z-10 shadow-lg"></div>
                  <div className="lg:ml-8">
                    <ItemCard 
                      item={item} 
                      index={index} 
                      delay={index * 200}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-sm"></i>
              </div>
              <h3 className={`text-2xl font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Education</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line for desktop */}
              <div className="hidden lg:block absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-cyan-500 opacity-30"></div>
              
              {educationData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="hidden lg:block absolute left-5 top-8 w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full z-10 shadow-lg"></div>
                  <div className="lg:ml-8">
                    <ItemCard 
                      item={item} 
                      index={index + experienceData.length} 
                      delay={(index + experienceData.length) * 200}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="flex items-center space-x-4 text-neutral-500">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-neutral-500"></div>
            <i className="fas fa-code text-xl"></i>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-neutral-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
