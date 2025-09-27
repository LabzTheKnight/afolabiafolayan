import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from '../resources/profile.png';
import resumePDF from '../resources/resume.pdf';

function About() {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`py-20 relative overflow-hidden ${
      isDarkMode ? 'bg-neutral-900' : 'bg-gray-50'
    }`} ref={aboutRef}>
      <div className={`absolute inset-0 ${
        isDarkMode ? 'bg-neutral-900' : 'bg-gray-50'
      }`}></div>
      
      {/* Structured Geometric Elements */}
      <div className="absolute top-16 left-16 w-40 h-40 border-2 border-emerald-500/25 rounded-lg rotate-12"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-500/8 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-36 h-36 border border-emerald-500/20 rotate-45"></div>
      <div className="absolute bottom-16 right-16 w-28 h-28 bg-emerald-500/10 rounded-lg rotate-12"></div>
      
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="text-emerald-400">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`flex justify-center transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-teal-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -inset-8 rounded-full border border-cyan-500/10 animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              <img
                src={profileImage}
                alt="Afolabi Afolayan"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-neutral-600 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 animate-float"
              />
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-500/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className={`space-y-6 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hello! I'm <span className="text-emerald-400">Afolabi Afolayan</span>
              </h3>

              <p className={`leading-relaxed max-w-xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I build polished, production-ready web applications — primarily with React on the frontend and
                Spring Boot / Node.js on the backend. I focus on shipping reliable features, clean APIs, and
                delightful user experiences.
              </p>

              <div className="flex flex-wrap gap-3 py-3">
                <span className="inline-flex items-center px-3 py-1.5 bg-emerald-600/10 text-emerald-300 rounded-full text-sm font-medium border border-emerald-600/20 hover:scale-105 transition-transform">Full‑Stack Delivery</span>
                <span className="inline-flex items-center px-3 py-1.5 bg-teal-600/10 text-teal-300 rounded-full text-sm font-medium border border-teal-600/20 hover:scale-105 transition-transform">APIs & Auth</span>
                <span className="inline-flex items-center px-3 py-1.5 bg-cyan-600/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-600/20 hover:scale-105 transition-transform">Performance & Testing</span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-neutral-700/40' : 'bg-gray-100'
                }`}>
                  <h4 className="text-emerald-300 font-semibold mb-1">Frontend</h4>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>React, TypeScript, Tailwind</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-neutral-700/40' : 'bg-gray-100'
                }`}>
                  <h4 className="text-teal-300 font-semibold mb-1">Backend</h4>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Spring Boot, Node.js, REST</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={resumePDF}
                download="Afolabi_Afolayan_Resume.pdf"
                className="flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-emerald-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <i className="fas fa-download mr-2 group-hover:animate-bounce"></i>
                Download CV
              </a>
              
              <a
                href="mailto:aaafolayan@gmail.com"
                className="flex items-center bg-gradient-to-r from-neutral-600 to-neutral-700 text-white py-3 px-6 rounded-lg shadow-lg hover:from-neutral-500 hover:to-neutral-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <i className="fas fa-envelope mr-2 group-hover:animate-bounce"></i>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;