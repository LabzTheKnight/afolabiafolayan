import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Projects() {
  const { isDarkMode } = useTheme();
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const projectsRef = useRef(null);

  const projectData = [
    {
      name: 'Breaking Bread',
      description:
        'Bootcamp project, the website is for sharing food within a community more efficiently and reducing waste through donating or selling left excess food.',
      skills: [
        { iconClass: 'fas fa-gem', color: 'text-red-600', title: 'Ruby on Rails' },
      ],
      githubLink: 'https://github.com/LabzTheKnight/Breaking_Bread',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
      features: ['Community Food Sharing', 'Waste Reduction', 'User Authentication'],
      images: [
        '/src/resources/projectimages/t1.png',
        '/src/resources/projectimages/t2.png',
        '/src/resources/projectimages/t3.png'
      ]
    },
    {
      name: 'To Do List',
      description: 'In this project I implement CRUD using Express in the backend and React Native for the front as well as user authentication.',
      skills: [
        { iconClass: 'fab fa-react', color: 'text-cyan-400', title: 'React' },
        { iconClass: 'fab fa-node', color: 'text-green-500', title: 'Node.js' },
        { iconClass: 'fas fa-database', color: 'text-green-600', title: 'Database' },
      ],
      githubLink: 'https://github.com/LabzTheKnight/practice',
      technologies: ['React Native', 'Express.js', 'MongoDB'],
      features: ['CRUD Operations', 'User Authentication', 'Mobile Responsive'],
      images: [
        '/src/resources/projectimages/t1.png',
        '/src/resources/projectimages/t2.png',
        '/src/resources/projectimages/t3.png'
      ]
    },
    {
      name: 'Personal Expense Tracker',
      description: 'CRUD implementation using Spring Boot and authentication using Spring Boot Security. I also used Java Web Token for session management and React frontend as proxy.',
      skills: [
        { iconClass: 'fab fa-java', color: 'text-orange-400', title: 'Java' },
        { iconClass: 'fab fa-docker', color: 'text-emerald-300', title: 'Docker' },
        { iconClass: 'fab fa-react', color: 'text-cyan-500', title: 'React' },
      ],
      githubLink: 'https://github.com/LabzTheKnight/finance',
      technologies: ['Spring Boot', 'JWT', 'React', 'Docker'],
      features: ['Expense Tracking', 'JWT Authentication', 'Dockerized Deployment'],
      images: [
        '/src/resources/projectimages/t1.png',
        '/src/resources/projectimages/t2.png',
        '/src/resources/projectimages/t3.png'
      ]
    },
    {
      name: 'Project Four',
      description: 'Project description will be added here. This is a placeholder for an upcoming project that showcases advanced development skills.',
      skills: [
        { iconClass: 'fab fa-react', color: 'text-cyan-400', title: 'React' },
        { iconClass: 'fab fa-node-js', color: 'text-green-500', title: 'Node.js' },
      ],
      githubLink: '#',
      technologies: ['React', 'Node.js', 'MongoDB'],
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      images: [
        '/src/resources/projectimages/t1.png',
        '/src/resources/projectimages/t2.png',
        '/src/resources/projectimages/t3.png'
      ]
    },
    {
      name: 'Project Five',
      description: 'Project description will be added here. This is a placeholder for another upcoming project with modern technologies.',
      skills: [
        { iconClass: 'fab fa-python', color: 'text-yellow-400', title: 'Python' },
        { iconClass: 'fas fa-database', color: 'text-emerald-500', title: 'Database' },
      ],
      githubLink: '#',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      features: ['Feature A', 'Feature B', 'Feature C'],
      images: [
        '/src/resources/projectimages/t1.png',
        '/src/resources/projectimages/t2.png',
        '/src/resources/projectimages/t3.png'
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects([]);
            projectData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, index]);
              }, index * 200);
            });
          } else {
            setVisibleProjects([]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % projectData[projectIndex].images.length
    }));
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + projectData[projectIndex].images.length) % projectData[projectIndex].images.length
    }));
  };

  return (
    <section id="projects" className={`py-20 relative overflow-hidden ${
      isDarkMode ? 'bg-neutral-900' : 'bg-gray-50'
    }`} ref={projectsRef}>
      {/* Solid background */}
      <div className={`absolute inset-0 ${
        isDarkMode ? 'bg-neutral-900' : 'bg-gray-50'
      }`}></div>
      
      {/* Structured Geometric Elements */}
      <div className="absolute top-16 left-16 w-32 h-32 border-2 border-emerald-500/25 rotate-45 rounded-lg"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-emerald-500/8 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-36 h-36 border border-emerald-500/20 rotate-45"></div>
      <div className="absolute bottom-16 right-16 w-28 h-28 bg-emerald-500/10 rounded-lg rotate-12"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A showcase of applications I've built using modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:border-emerald-500/30 ${
                isDarkMode 
                  ? 'bg-neutral-800/50 border-neutral-700' 
                  : 'bg-white/80 border-gray-200 shadow-lg'
              } ${
                visibleProjects.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Carousel */}
              <div className="relative h-48 bg-neutral-800 overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src={project.images[currentImageIndex[index] || 0]}
                    alt={`${project.name} screenshot ${(currentImageIndex[index] || 0) + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjNmI3MjgwIiBmb250LXNpemU9IjE2cHgiPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                  
                  {/* Navigation buttons */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(index);
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                      >
                        <i className="fas fa-chevron-left text-sm"></i>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(index);
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                      >
                        <i className="fas fa-chevron-right text-sm"></i>
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => ({
                                ...prev,
                                [index]: imgIndex
                              }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              (currentImageIndex[index] || 0) === imgIndex 
                                ? 'bg-emerald-400' 
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Project Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-bold group-hover:text-emerald-400 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.name}
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300 group/btn ${
                        isDarkMode ? 'bg-neutral-800' : 'bg-gray-200'
                      }`}
                    >
                      <i className={`fab fa-github group-hover/btn:scale-110 transition-transform ${
                        isDarkMode ? 'text-white' : 'text-gray-700'
                      }`}></i>
                    </a>
                  </div>
                </div>
                
                <p className={`text-sm leading-relaxed mb-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
              </div>

              {/* Technology Stack */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20 hover:border-emerald-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tech Icons */}
                <div className="flex justify-center space-x-4 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`group/icon p-2 rounded-lg hover:bg-emerald-500/20 transition-colors duration-300 ${
                        isDarkMode ? 'bg-neutral-800/50' : 'bg-gray-100'
                      }`}
                    >
                      <i
                        className={`${skill.iconClass} ${skill.color} text-xl group-hover/icon:scale-110 transition-transform duration-300`}
                      ></i>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List - Always visible on hover */}
              <div className={`px-6 pb-6 transition-all duration-300 ${
                hoveredProject === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
              }`}>
                <div className={`rounded-lg p-4 ${
                  isDarkMode ? 'bg-neutral-800/30' : 'bg-gray-100/50'
                }`}>
                  <h4 className="text-emerald-400 font-semibold text-sm mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`text-xs flex items-center ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
