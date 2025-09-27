import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from '../resources/profile.png';
import clipartImage from '../resources/clipart.png';
import resumePDF from '../resources/resume.pdf'; 

function Header() {
  const { isDarkMode } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Fullstack Engineer',
    'React Developer', 
    'Backend Specialist',
    'Problem Solver',
    'Joker',
    'Smoker',
    'Midnight toker'
    

  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const shouldDelete = isDeleting;
    
    const timeout = setTimeout(() => {
      if (shouldDelete) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, shouldDelete ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <header id="header" className={`flex flex-col items-center justify-center h-screen text-center px-6 py-8 relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-950 via-emerald-950 to-teal-950' 
        : 'bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50'
    }`}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.15)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40 animate-pulse"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute inset-0">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-emerald-400/70 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-emerald-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-teal-400/20 rotate-12 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full min-h-[80vh]">
          
          <div className="space-y-8 text-left lg:text-left">
            
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-4">
                <span className={`block animate-fadeInUp drop-shadow-2xl ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Hello,</span>
                <span className={`block animate-fadeInUp relative ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`} style={{ animationDelay: '0.2s' }}>
                  I'm Afolabi
                </span>
              </h1>
              
              <div className="absolute -bottom-4 left-0 w-40 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full opacity-80 animate-pulse shadow-lg shadow-emerald-500/50"></div>
            </div>
            
            <div className="text-xl md:text-2xl lg:text-3xl h-16 flex items-center">
              <span className={`mr-4 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>I am a</span>
              <div className="relative">
                <span className="text-emerald-400 font-bold">
                  {displayText}
                </span>
                <span className="animate-pulse text-emerald-400 ml-1 text-2xl lg:text-3xl">|</span>
                <div className="absolute -top-2 -right-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

            <p className={`text-lg md:text-xl max-w-2xl leading-relaxed animate-fadeInUp ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`} style={{ animationDelay: '0.6s' }}>
              Full-stack developer and creative problem solver. I build digital experiences that 
              <span className="text-emerald-400 font-semibold"> captivate users</span> and 
              <span className="text-teal-400 font-semibold"> turn ideas into results</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  <i className="fas fa-rocket mr-3 group-hover:animate-bounce"></i>
                  Explore My Work
                  <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-emerald-500/60 text-white font-semibold rounded-full transition-all duration-500 hover:border-emerald-400 hover:bg-emerald-500/15 hover:scale-105 backdrop-blur-sm relative overflow-hidden"
              >
                <span className="relative flex items-center">
                  <i className="fas fa-comments mr-3 group-hover:animate-pulse text-emerald-400"></i>
                  Let's Connect
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </a>
            </div>

            <div className="flex gap-6 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <a
                href="https://github.com/LabzTheKnight"
                className="group relative p-4 bg-neutral-900/40 backdrop-blur-sm border border-neutral-700/60 rounded-2xl hover:border-emerald-500/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-2xl text-white group-hover:text-emerald-400 transition-colors"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </a>
              
              <a
                href="https://de.linkedin.com/in/afolabi-afolayan-7b8092248"
                className="group relative p-4 bg-neutral-900/40 backdrop-blur-sm border border-neutral-700/60 rounded-2xl hover:border-emerald-500/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-2xl text-white group-hover:text-emerald-400 transition-colors"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </a>
              
              <a
                href="mailto:aaafolayan@gmail.com"
                className="group relative p-4 bg-neutral-900/40 backdrop-blur-sm border border-neutral-700/60 rounded-2xl hover:border-emerald-500/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <i className="fas fa-envelope text-2xl text-white group-hover:text-emerald-400 transition-colors"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={clipartImage} 
                alt="Developer illustration" 
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain animate-fadeInUp transform hover:scale-105 transition-all duration-700"
                style={{ animationDelay: '0.4s' }}
              />
              
              <div className="absolute top-10 -left-10 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-16 -right-8 w-4 h-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute top-1/3 -right-12 w-8 h-8 border-2 border-emerald-400/30 rounded-full animate-pulse"></div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl scale-110 opacity-50 animate-pulse"></div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
