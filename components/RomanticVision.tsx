
import React, { useState } from 'react';
import { generateRomanticImage } from '../services/geminiService';

const RomanticVision: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const url = await generateRomanticImage(prompt);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 glass rounded-3xl shadow-2xl mt-12">
      <h2 className="text-4xl font-romantic text-red-600 text-center mb-8">Visualize Our Dream Date</h2>
      
      {!imageUrl ? (
        <div className="space-y-4">
          <p className="text-center text-gray-600 mb-4">Describe a place or scene you want to visit with your partner.</p>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-xl border-2 border-pink-100 focus:border-red-400 outline-none"
            placeholder="e.g., A picnic under the Eiffel Tower at sunset with cherry blossoms"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className="w-full py-4 bg-gradient-to-r from-red-400 to-pink-400 text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? 'Painting your vision...' : 'Generate Vision ✨'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img src={imageUrl} alt="Romantic Vision" className="w-full h-auto object-cover" />
          </div>
          <p className="text-center text-gray-600 italic">"May our future be as beautiful as this."</p>
          <button
            onClick={() => setImageUrl(null)}
            className="w-full py-3 border-2 border-pink-200 text-pink-600 font-bold rounded-xl hover:bg-pink-50 transition-all"
          >
            Imagine Something Else
          </button>
        </div>
      )}
    </div>
  );
};

export default RomanticVision;
