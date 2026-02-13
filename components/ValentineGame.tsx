
import React, { useState } from 'react';

interface ValentineGameProps {
  onAccepted: () => void;
}

const ValentineGame: React.FC<ValentineGameProps> = ({ onAccepted }) => {
  const [noPosition, setNoPosition] = useState({ top: 'auto', left: 'auto' });
  const [isAccepted, setIsAccepted] = useState(false);

  const moveNo = () => {
    // Generate random position within safe bounds
    const randomTop = Math.floor(Math.random() * 70) + 15;
    const randomLeft = Math.floor(Math.random() * 70) + 15;
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  if (isAccepted) {
    return (
      <div className="text-center space-y-10 py-12 animate-fade-in flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-red-200 blur-3xl rounded-full opacity-30 animate-pulse"></div>
          <h1 className="text-7xl md:text-9xl font-romantic text-red-600 relative z-10 drop-shadow-lg">
            Yay! ❤️
          </h1>
        </div>
        
        <p className="text-3xl md:text-5xl text-pink-600 font-cursive animate-bounce px-4">
          Thanks Surbhi for choosing us!
        </p>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur opacity-40 transition duration-1000 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800" 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-8 border-white relative z-10 transform transition-transform" 
            alt="Love Celebration" 
          />
        </div>

        <div className="mt-8 space-y-2">
          <p className="text-pink-400 font-cursive text-2xl">Forever starts today.</p>
          <div className="text-4xl">💍✨🥂</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 text-center relative min-h-[600px] flex flex-col items-center justify-center">
      <div className="space-y-6 mb-16">
        <div className="text-8xl mb-4 animate-bounce">💌</div>
        <h2 className="text-6xl md:text-8xl font-romantic text-red-600 leading-tight">
          Surbhi,<br/>Will you be my Valentine?
        </h2>
        <p className="text-xl text-gray-500 italic font-serif">A lifetime of happiness awaits...</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-lg">
        <button
          onClick={() => setIsAccepted(true)}
          className="w-full md:w-auto px-16 py-8 bg-gradient-to-br from-red-500 to-pink-500 text-white text-4xl font-bold rounded-3xl shadow-[0_20px_50px_rgba(239,68,68,0.4)] hover:scale-125 hover:rotate-2 transition-all z-10 cursor-heart"
        >
          YES! 💖
        </button>

        <button
          onMouseEnter={moveNo}
          onClick={moveNo}
          style={noPosition.top !== 'auto' ? { position: 'fixed', ...noPosition, zIndex: 50 } : {}}
          className="w-full md:w-auto px-10 py-5 bg-gray-100 text-gray-400 text-xl font-bold rounded-2xl border-2 border-gray-200 transition-all duration-200 shadow-sm"
        >
          No
        </button>
      </div>

      <div className="mt-20 opacity-30 text-pink-300 text-4xl animate-pulse">
        ❤️❤️❤️
      </div>
    </div>
  );
};

export default ValentineGame;
