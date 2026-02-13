
import React, { useState } from 'react';
import { generateLovePoem } from '../services/geminiService';
import { PoemData } from '../types';

const LoveLetter: React.FC = () => {
  const [name, setName] = useState('');
  const [traits, setTraits] = useState('');
  const [poem, setPoem] = useState<PoemData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!name) return;
    setLoading(true);
    try {
      const result = await generateLovePoem(name, traits);
      setPoem(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 glass rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-red-200/50">
      <h2 className="text-4xl font-romantic text-red-600 text-center mb-8">Personalized Love Poem</h2>
      
      {!poem ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Partner's Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-xl border-2 border-pink-100 focus:border-red-400 outline-none transition-colors"
              placeholder="e.g., Sarah"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Things you love about them</label>
            <textarea
              className="w-full px-4 py-2 rounded-xl border-2 border-pink-100 focus:border-red-400 outline-none transition-colors h-24"
              placeholder="e.g., her laugh, the way she drinks tea, her kindness..."
              value={traits}
              onChange={(e) => setTraits(e.target.value)}
            />
          </div>
          <button
            onClick={handleGenerate}
            disabled={loading || !name}
            className="w-full py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? 'Crafting your poem...' : 'Generate Romantic Poem ❤️'}
          </button>
        </div>
      ) : (
        <div className="animate-fade-in">
          <div className="bg-white/50 p-8 rounded-2xl border-2 border-red-50 shadow-inner">
            <h3 className="text-3xl font-cursive text-red-500 mb-6 text-center">{poem.title}</h3>
            <div className="whitespace-pre-wrap text-lg text-gray-800 leading-relaxed font-serif italic text-center">
              {poem.content}
            </div>
          </div>
          <button
            onClick={() => setPoem(null)}
            className="mt-6 text-red-400 hover:text-red-600 transition-colors block mx-auto font-medium"
          >
            Create Another One
          </button>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;
