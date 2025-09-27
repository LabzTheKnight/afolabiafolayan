import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Contact() {
  const { isDarkMode } = useTheme();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const techIcons = [
    'fab fa-react', 'fab fa-node-js', 'fab fa-python', 'fab fa-java',
    'fab fa-js-square', 'fab fa-html5', 'fab fa-css3-alt', 'fab fa-git-alt'
  ];

  const initializeGame = () => {
    const gameCards = [...techIcons, ...techIcons].map((icon, index) => ({
      id: index,
      icon: icon,
      isFlipped: false,
      isMatched: false
    }));
    
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }
    
    setCards(gameCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameWon(false);
    setGameStarted(true);
  };

  const handleCardClick = (cardId) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (matchedPairs.includes(cardId)) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard.icon === secondCard.icon) {
        setMatchedPairs([...matchedPairs, first, second]);
        setFlippedCards([]);
        
        if (matchedPairs.length + 2 === cards.length) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedPairs.length === cards.length && cards.length > 0) {
      setGameWon(true);
    }
  }, [matchedPairs, cards]);

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'aaafolayan@gmail.com',
      link: 'mailto:aaafolayan@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      content: 'Afolabi Afolayan',
      link: 'https://de.linkedin.com/in/afolabi-afolayan-7b8092248',
      color: 'text-blue-400'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      content: 'LabzTheKnight',
      link: 'https://github.com/LabzTheKnight',
      color: 'text-gray-400'
    }
  ];

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${
      isDarkMode ? 'bg-neutral-900' : 'bg-gray-50'
    }`}>
      <div className={`absolute inset-0 ${
        isDarkMode ? 'bg-neutral-900' : 'bg-gray-50'
      }`}></div>
      
      <div className="absolute top-16 left-16 w-32 h-32 border-2 border-emerald-500/25 rotate-45 rounded-lg"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-emerald-500/8 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-36 h-36 border border-emerald-500/20 rotate-45"></div>
      <div className="absolute bottom-16 right-16 w-28 h-28 bg-emerald-500/10 rounded-lg rotate-12"></div>
      
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's <span className="text-emerald-400">Connect</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Play a quick memory game while you check out my contact info! Match the tech icons to reveal my details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Tech Memory Game</h3>
              {!gameStarted ? (
                <button
                  onClick={initializeGame}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Start Game
                </button>
              ) : (
                <div className="mb-4">
                  <p className="text-gray-300">Moves: <span className="text-emerald-400 font-bold">{moves}</span></p>
                  {gameWon && (
                    <div className="mt-2">
                      <p className="text-emerald-400 font-bold text-lg">🎉 Congratulations! You won in {moves} moves!</p>
                      <button
                        onClick={initializeGame}
                        className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                      >
                        Play Again
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {gameStarted && (
              <div className="grid grid-cols-4 gap-2">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card.id)}
                    className={`
                      aspect-square rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center justify-center text-xl
                      ${isDarkMode 
                        ? 'bg-neutral-800/50' 
                        : 'bg-white/80'
                      }
                      ${flippedCards.includes(card.id) || matchedPairs.includes(card.id)
                        ? 'border-emerald-400' + (isDarkMode ? ' bg-neutral-700/50' : ' bg-gray-100')
                        : (isDarkMode 
                          ? 'border-neutral-600/50 hover:border-neutral-500 hover:bg-neutral-700/50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        )
                      }
                      ${matchedPairs.includes(card.id) ? 'opacity-75' : ''}
                    `}
                  >
                    {flippedCards.includes(card.id) || matchedPairs.includes(card.id) ? (
                      <i className={`${card.icon} text-emerald-400`}></i>
                    ) : (
                      <i className="fas fa-question text-gray-500"></i>
                    )}
                  </div>
                ))}
              </div>
            )}

            {gameStarted && (
              <div className={`border p-4 rounded-lg backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-neutral-800/30 border-neutral-700/30' 
                  : 'bg-white/50 border-gray-200'
              }`}>
                <h4 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center">
                  <i className="fas fa-gamepad text-emerald-400 mr-2 text-xs"></i>
                  Game Tips
                </h4>
                <div className={`space-y-1 text-xs ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <p>• Click cards to find matching tech pairs</p>
                  <p>• Try to complete in the fewest moves</p>
                  <p>• Each icon represents my tech stack</p>
                </div>
              </div>
            )}

            {gameStarted && (
              <div className="bg-emerald-800/10 border border-emerald-500/20 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center">
                  <i className="fas fa-lightbulb text-emerald-400 mr-2 text-xs"></i>
                  Fun Fact
                </h4>
                <p className={`text-xs ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Built with React hooks to showcase interactive development skills and attention to UX details!
                </p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`flex items-center p-4 border rounded-lg hover:border-emerald-500/30 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm ${
                      isDarkMode 
                        ? 'bg-neutral-800/30 border-neutral-700/30 hover:bg-neutral-700/30' 
                        : 'bg-white/50 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full bg-neutral-700/50 flex items-center justify-center mr-4 group-hover:${info.color.replace('text-', 'bg-')} transition-colors duration-300`}>
                      <i className={`${info.icon} ${info.color} text-sm group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium text-sm ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{info.title}</h4>
                      <p className={`text-xs ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{info.content}</p>
                    </div>
                    <i className={`fas fa-external-link-alt text-xs group-hover:text-emerald-400 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className={`border p-5 rounded-lg backdrop-blur-sm ${
              isDarkMode 
                ? 'bg-neutral-800/30 border-neutral-700/30' 
                : 'bg-white/50 border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Quick Info</h3>
              <div className="space-y-3">
                <div className={`flex items-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <i className="fas fa-map-marker-alt text-emerald-400 mr-3 text-sm"></i>
                  <span className="text-sm">Based in Germany</span>
                </div>
                <div className={`flex items-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <i className="fas fa-handshake text-emerald-400 mr-3 text-sm"></i>
                  <span className="text-sm">Let's work together</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <i className="fas fa-language text-emerald-400 mr-3 text-sm"></i>
                  <span className="text-sm">English, German</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800/10 border border-emerald-500/20 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Ready to Collaborate?</h3>
              <p className="text-gray-300 text-sm mb-4">
                I'm always excited to work on interesting projects and bring ideas to life. Let's create something amazing together!
              </p>
              <a
                href="mailto:aaafolayan@gmail.com"
                className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
