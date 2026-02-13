
import React from 'react';

interface PromiseDayProps {
  onContinue: () => void;
}

const PromiseDay: React.FC<PromiseDayProps> = ({ onContinue }) => {
  const promises = [
    "Surbhi i promise ki me tujhe kabhi akela nahi choduga.",
    "I promise to listen more and assume less.",
    "I promise to cherish every moment we share.",
    "I promise to keep choosing you, every single day."
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center animate-fade-in px-4 py-12 relative z-10">
      <div className="max-w-2xl w-full glass p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-white text-center space-y-8">
        <div className="space-y-4">
          <div className="text-7xl md:text-8xl animate-pulse">🤝✨</div>
          <h1 className="text-5xl md:text-7xl font-romantic text-red-600">Happy Promise Day</h1>
          <p className="text-2xl text-pink-500 font-cursive">My Dearest Surbhi</p>
        </div>

        <div className="space-y-6 py-6">
          {promises.map((text, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 bg-white/40 p-4 rounded-2xl border border-pink-100 hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="text-2xl">💝</span>
              <p className="text-lg md:text-xl text-gray-700 font-serif italic text-left leading-tight">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <button
            onClick={onContinue}
            className="group relative px-16 py-5 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all text-2xl flex items-center justify-center gap-3 mx-auto overflow-hidden ring-4 ring-red-100"
          >
            <span className="relative z-10">I Promise Forever</span>
            <span className="text-3xl transition-transform group-hover:scale-125 group-hover:rotate-12 relative z-10">💍</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
      
      <p className="mt-8 text-pink-400 font-cursive text-2xl animate-bounce">
        A promise made is a heart kept...
      </p>
    </div>
  );
};

export default PromiseDay;
