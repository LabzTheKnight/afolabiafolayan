import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const [activeSection, setActiveSection] = useState('header');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const sections = ['header', 'about', 'skills', 'projects', 'experience', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const scrollPosition = window.scrollY + 100;
      let currentSection = 'header';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? isDarkMode 
          ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg border-b border-neutral-700' 
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <button 
          onClick={() => scrollToSection('header')}
          className="text-2xl font-bold text-emerald-400 hover:text-teal-400 transition-all duration-300"
        >
          Afolabi
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          {sections.slice(1).map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize relative py-2 px-4 rounded-lg transition-all duration-300 ${
                activeSection === section
                  ? 'text-emerald-400 bg-emerald-400/10'
                  : isDarkMode 
                    ? 'text-white hover:text-emerald-400 hover:bg-neutral-800/50'
                    : 'text-gray-700 hover:text-emerald-500 hover:bg-gray-100'
              }`}
            >
              {section}
                {activeSection === section && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
              )}
            </button>
          ))}
          
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-lg transition-all duration-300 transform hover:scale-105 group ${
              isDarkMode 
                ? 'bg-neutral-800 hover:bg-neutral-700' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={`${isDarkMode ? 'fas fa-sun' : 'fas fa-moon'} text-amber-300 group-hover:animate-bounce`}></i>
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-neutral-800 hover:bg-neutral-700' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={`${isDarkMode ? 'fas fa-sun' : 'fas fa-moon'} text-amber-300`}></i>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors duration-300 ${
              isDarkMode 
                ? 'text-white hover:text-cyan-400' 
                : 'text-gray-700 hover:text-emerald-500'
            }`}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden backdrop-blur-md border-t ${
          isDarkMode 
            ? 'bg-neutral-900/95 border-neutral-700' 
            : 'bg-white/95 border-gray-200'
        }`}>
          <div className="py-4 space-y-2">
            {sections.slice(1).map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-4 py-2 capitalize transition-all duration-300 ${
                      activeSection === section
                        ? isDarkMode 
                          ? 'text-amber-300 bg-neutral-800' 
                          : 'text-emerald-500 bg-gray-100'
                        : isDarkMode 
                          ? 'text-white hover:text-amber-300 hover:bg-neutral-800'
                          : 'text-gray-700 hover:text-emerald-500 hover:bg-gray-100'
                    }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
