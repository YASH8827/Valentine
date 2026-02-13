
import React from 'react';

interface ApologyLetterProps {
  onStart: () => void;
}

const ApologyLetter: React.FC<ApologyLetterProps> = ({ onStart }) => {
  return (
    <div className="max-w-2xl mx-auto p-8 glass rounded-3xl shadow-2xl animate-fade-in my-12 text-center">
      <h1 className="text-5xl font-romantic text-red-600 mb-8">Dearest Surbhi,</h1>
      
      <div className="space-y-6 text-lg text-gray-700 font-serif italic leading-relaxed text-left">
        <p>
          I’m sorry, Surbhi… for leaving you alone. I know you felt really bad that, just like last time, 
          I was repeating the same mistakes again.
        </p>
        <p>
          But I don’t want to quit like last time. Maybe I’ve come out of my fantasy world now, and 
          I’ll pay more attention to things. I won’t just assume things in my head anymore.
        </p>
        <p>
          I truly care about you, and I love you. I’m sorry for being stupid.
        </p>
      </div>

      <div className="mt-12">
        <button
          onClick={onStart}
          className="group relative px-14 py-4 bg-gradient-to-r from-pink-400 to-red-400 text-white font-bold rounded-full shadow-lg hover:shadow-pink-300/50 hover:scale-110 active:scale-95 transition-all text-2xl flex items-center justify-center gap-3 mx-auto overflow-hidden"
        >
          <span className="relative z-10">Next</span>
          <span className="text-3xl transition-transform group-hover:rotate-12 group-hover:scale-125">🐱</span>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
      
      <p className="mt-8 text-sm text-gray-400 font-cursive text-2xl opacity-80">Always yours.</p>
    </div>
  );
};

export default ApologyLetter;
