
import React, { useState } from 'react';

interface PasswordGateProps {
  onUnlock: () => void;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // The secret password is "Surbhi"
  const SECRET_CODE = "Surbhi"; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === SECRET_CODE.toLowerCase()) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fff5f5] px-4">
      <div className="heart-float fixed inset-0 opacity-20 text-red-200">❤️</div>
      
      <div className={`glass p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-md w-full text-center transition-all duration-500 border-2 ${error ? 'shake border-red-400' : 'border-white'}`}>
        <div className="text-6xl mb-6 animate-pulse">🔒</div>
        <h2 className="text-4xl font-romantic text-red-600 mb-2">Private Access</h2>
        <p className="text-gray-500 font-cursive text-xl mb-8">Enter the secret name of my favorite person to enter...</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Hint: Her Name"
            className="w-full px-6 py-4 rounded-full border-2 border-pink-100 focus:border-red-400 outline-none text-center text-2xl transition-all placeholder:text-gray-300 bg-white/50"
          />
          
          {error && <p className="text-red-500 font-bold animate-bounce">Oops! That's not the right person. 🥺</p>}
          
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-xl"
          >
            Unlock My Heart
          </button>
        </form>
        
        <p className="mt-8 text-[10px] text-gray-400 tracking-widest uppercase">Strictly for Surbhi</p>
      </div>

      <style>{`
        .shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default PasswordGate;
