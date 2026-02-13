
import React, { useState } from 'react';

interface FlowerTransitionProps {
  onContinue: () => void;
}

const FlowerTransition: React.FC<FlowerTransitionProps> = ({ onContinue }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center animate-fade-in px-4 relative z-10">
      <div className="relative p-6 md:p-10">
        {/* Colorful Animated Flower Border */}
        <div className="absolute -top-8 -left-8 md:-top-16 md:-left-16 text-5xl md:text-8xl animate-bounce drop-shadow-xl z-20" style={{ animationDelay: '0s' }}>🌸</div>
        <div className="absolute -top-8 -right-8 md:-top-16 md:-right-16 text-5xl md:text-8xl animate-bounce drop-shadow-xl z-20" style={{ animationDelay: '0.2s' }}>🌹</div>
        <div className="absolute -bottom-8 -left-8 md:-bottom-16 md:-left-16 text-5xl md:text-8xl animate-bounce drop-shadow-xl z-20" style={{ animationDelay: '0.4s' }}>🌼</div>
        <div className="absolute -bottom-8 -right-8 md:-bottom-16 md:-right-16 text-5xl md:text-8xl animate-bounce drop-shadow-xl z-20" style={{ animationDelay: '0.6s' }}>🌷</div>
        
        {/* The Rose Bouquet Image Container with Glassmorphism */}
        <div className="glass p-3 md:p-5 rounded-[3.5rem] shadow-[0_30px_70px_rgba(255,105,180,0.5)] border-[10px] border-white overflow-hidden max-w-sm md:max-w-md transition-all duration-700 hover:scale-[1.05] hover:-rotate-1">
          {!imgError ? (
            <img 
              src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=1000" 
              alt="Beautiful Rose Bouquet" 
              className="w-full h-auto rounded-[2.5rem] shadow-inner"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-64 h-80 md:w-80 md:h-96 flex flex-col items-center justify-center bg-pink-50 rounded-[2.5rem] border-4 border-dashed border-pink-200 p-6 text-center">
              <span className="text-9xl mb-6 animate-pulse">🌹</span>
              <p className="text-pink-500 font-romantic text-3xl">A Rose Bouquet for Surbhi</p>
              <p className="text-pink-400 text-sm mt-2 italic">(Symbols of my love)</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-5xl md:text-7xl font-romantic text-pink-600 drop-shadow-md">
            For You, Surbhi
          </h2>
          <p className="text-2xl md:text-3xl text-pink-400 font-cursive font-bold italic tracking-wide">
            "Every petal represents a reason why I love you."
          </p>
        </div>

        <button
          onClick={onContinue}
          className="group relative px-20 py-6 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 text-white font-bold rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all text-3xl flex items-center justify-center gap-5 mx-auto overflow-hidden ring-8 ring-white/30"
        >
          <span className="relative z-10">Next</span>
          <span className="text-5xl transition-transform group-hover:scale-125 group-hover:rotate-12 relative z-10">🐱</span>
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default FlowerTransition;
