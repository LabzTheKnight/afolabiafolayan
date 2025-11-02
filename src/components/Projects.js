import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import b1 from '../resources/projectimages/b1.png';
import b2 from '../resources/projectimages/b2.png';
import b3 from '../resources/projectimages/b3.png';
import b4 from '../resources/projectimages/b4.png';
import b5 from '../resources/projectimages/b5.png';

import d1 from '../resources/projectimages/d1.png';
import d2 from '../resources/projectimages/d2.png';
import d3 from '../resources/projectimages/d3.png';
import d4 from '../resources/projectimages/d4.png';

function Projects() {
  const { isDarkMode } = useTheme();
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const projectsRef = useRef(null);

  const projectData = [
    {
      name: 'Distributed Airbnb',
      description: 'Distributed property listing and booking platform. Built with Expo (React Native Web) and TypeScript, Dist_Airbnb demonstrates a multi-service architecture: a Django authentication backend, a Python listings microservice backed by MongoDB, and a responsive frontend using Context + custom hooks. The app is containerized using Docker and orchestrated with docker compose for reproducible local and production setups.',
      skills: [
        { iconClass: 'fab fa-react', color: 'text-cyan-400', title: 'React Native' },
        { iconClass: 'fab fa-python', color: 'text-yellow-400', title: 'Python' },
        { iconClass: 'fas fa-database', color: 'text-green-600', title: 'MongoDB' },
        { iconClass: 'fab fa-docker', color: 'text-emerald-300', title: 'Docker' },
        { iconClass: 'fab fa-css3-alt', color: 'text-blue-400', title: 'CSS' }
      ],
      githubLink: '#',
      liveLink: 'https://distairbnb.codingplayground.space/',
      technologies: ['React Native', 'Python', 'MongoDB', 'Docker', 'CSS'],
      features: ['Distributed listings', 'Booking engine', 'User authentication', 'Dockerized services'],
      images: [
        d1,
        d2,
        d3,
        d4
      ]
    },
    {
      name: 'Breaking Bread',
      description:
        'Bootcamp project, the website is for sharing food within a community more efficiently and reducing waste through donating or selling left excess food. Implemented secure user authentication (Devise), role-based authorization (Pundit), and a real-time chat system using Action Cable and Redis. I built meal listing and ordering flows, integrated Cloudinary for image uploads, and used Hotwire (Turbo + Stimulus) for seamless, fast UI interactions. Database search is powered by Postgres and pg_search; the app uses Webpack + Bootstrap for styling and JS tooling.',
      skills: [
        { iconClass: 'fas fa-gem', color: 'text-red-600', title: 'Ruby on Rails' },
        { iconClass: 'fab fa-bootstrap', color: 'text-purple-500', title: 'Bootstrap' },
        { iconClass: 'fas fa-database', color: 'text-emerald-500', title: 'PostgreSQL' },
        { iconClass: 'fab fa-docker', color: 'text-emerald-300', title: 'Docker' }
      ],
      githubLink: 'https://github.com/LabzTheKnight/Breaking_Bread',
      liveLink: 'https://breakingbread.codingplayground.space/',
      technologies: ['Ruby on Rails', 'Bootstrap', 'PostgreSQL', 'Docker'],
      features: ['Community Food Sharing', 'Waste Reduction', 'User Authentication'],
      images: [
        b1,
        b2,
        b3,
        b4,
        b5
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
      
  },
    {
      name: 'To Do List',
      description: 'A mobile-first To Do List app demonstrating full CRUD. Backend is built with Express.js and MongoDB, providing a REST API with user authentication. The frontend is a React Native (Expo) app that consumes the API, supports offline-friendly UI and persistent storage.',
      skills: [
        { iconClass: 'fab fa-react', color: 'text-cyan-400', title: 'React Native' },
        { iconClass: 'fab fa-node-js', color: 'text-green-500', title: 'Node.js' },
        { iconClass: 'fas fa-database', color: 'text-emerald-500', title: 'MongoDB' }
      ],
      githubLink: 'https://github.com/LabzTheKnight/practice',
      technologies: ['React Native', 'Express.js', 'MongoDB'],
      features: ['CRUD', 'User Authentication', 'Offline Support']
    },
    {
      name: 'Trading App',
      description: 'A trading dashboard and analytics app providing real-time market data, order placement and historical charts. Frontend built with React, backend using Node.js and PostgreSQL for persistence. Includes authentication, portfolio tracking and interactive charts.',
      skills: [
        { iconClass: 'fab fa-react', color: 'text-cyan-400', title: 'React' },
        { iconClass: 'fab fa-node-js', color: 'text-green-500', title: 'Node.js' },
        { iconClass: 'fas fa-database', color: 'text-emerald-500', title: 'PostgreSQL' }
      ],
      githubLink: 'https://github.com/LabzTheKnight/Tradingbot',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      features: ['Real-time data', 'Order management', 'Interactive charts']
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

  // Featured / older split for layout
  // Show 2 featured projects side-by-side, the rest (3) as older projects
  const featuredProjects = projectData.slice(0, 2);
  const olderProjects = projectData.slice(2);

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

          <div className={`w-full mb-12 p-6 rounded-2xl transition-shadow duration-300 ${isDarkMode ? 'bg-gradient-to-r from-emerald-900/10 via-emerald-800/6 to-transparent ring-4 ring-emerald-500/30 shadow-[0_10px_30px_rgba(16,185,129,0.08)]' : 'bg-gradient-to-r from-emerald-50/60 to-white ring-4 ring-emerald-300 shadow-lg'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center gap-6">
              <div className="flex-shrink-0 bg-emerald-500/10 rounded-lg p-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-emerald-400">
                  <rect x="3" y="4" width="18" height="6" rx="2" strokeWidth="1.5" />
                  <rect x="3" y="14" width="18" height="6" rx="2" strokeWidth="1.5" />
                  <circle cx="8" cy="7" r="1" className="" />
                  <circle cx="8" cy="17" r="1" className="" />
                </svg>
              </div>

              <div className="flex-1 text-left">
                <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  I maintain my own VPS
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I manage a self-hosted Hetzner Cloud VPS, where I deploy and maintain multiple full-stack applications using Docker and NGINX. The server hosts separate microservices and web frontends—such as my Distributed Airbnb and Breaking Bread projects—each running on their own subdomains. I handle domain configuration, reverse proxy routing, SSL certificates, and CI/CD deployments, ensuring secure, scalable, and reliable performance for all hosted projects.
                </p>
              </div>
            </div>
          </div>

        {/* One row with 2 big featured projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project, idx) => {
            const originalIndex = projectData.indexOf(project);
            return (
              <div
                key={originalIndex}
                className={`group relative backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:border-emerald-500/30 ${
                  isDarkMode ? 'bg-neutral-800/60 border-neutral-700' : 'bg-white/90 border-gray-200 shadow-lg'
                } ${visibleProjects.includes(originalIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${originalIndex * 150}ms` }}
                onMouseEnter={() => setHoveredProject(originalIndex)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-80 overflow-hidden bg-neutral-800 flex items-center justify-center">
                  <img
                    src={project.images[currentImageIndex[originalIndex] || 0]}
                    alt={`${project.name} screenshot`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={(e) => { if (project.images && project.images[0]) e.target.src = project.images[0]; else e.target.style.display = 'none'; }}
                  />

                  <button
                    aria-label="Previous image"
                    onClick={() => prevImage(originalIndex)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-opacity"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>

                  <button
                    aria-label="Next image"
                    onClick={() => nextImage(originalIndex)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-opacity"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.name}</h3>
                    <div className="flex items-center space-x-3">
                      <a href={project.liveLink || project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-400">View Live</a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-gray-100'}`}><i className="fab fa-github"></i></a>
                    </div>
                  </div>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Older projects - 3 smaller cards */}
        {olderProjects.length > 0 && (
          <div className="mt-8">
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Other Projects</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {olderProjects.map((p, idx) => (
                <div key={idx} className={`p-4 rounded-lg border flex flex-col h-full ${isDarkMode ? 'bg-neutral-800/50 border-neutral-700' : 'bg-white/90 border-gray-200'}`}>
                  <h5 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{p.name}</h5>

                  <div className="flex-grow">
                    <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{p.description}</p>
                  </div>

                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.technologies && p.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20 hover:border-emerald-400 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto px-6">
                    <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-3 px-3 py-2 rounded-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-gray-100'} text-emerald-500 hover:bg-emerald-50`}> 
                      <i className="fab fa-github"></i>
                      <span className="text-sm font-medium">View on GitHub</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
