
import React, { useState } from 'react';
import BackgroundHearts from './components/BackgroundHearts';
import BackgroundFlowers from './components/BackgroundFlowers';
import LoveLetter from './components/LoveLetter';
import RomanticVision from './components/RomanticVision';
import ValentineGame from './components/ValentineGame';
import ApologyLetter from './components/ApologyLetter';
import FlowerTransition from './components/FlowerTransition';
import PromiseDay from './components/PromiseDay';
import { AppSection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.LANDING);

  const renderContent = () => {
    switch (activeSection) {
      case AppSection.LANDING:
        return <ApologyLetter onStart={() => setActiveSection(AppSection.FLOWER_TRANSITION)} />;
      case AppSection.FLOWER_TRANSITION:
        return <FlowerTransition onContinue={() => setActiveSection(AppSection.PROMISE_DAY)} />;
      case AppSection.PROMISE_DAY:
        return <PromiseDay onContinue={() => setActiveSection(AppSection.QUESTION)} />;
      case AppSection.QUESTION:
        return (
          <div className="py-12 px-4 animate-fade-in">
            <ValentineGame onAccepted={() => setActiveSection(AppSection.HOME)} />
          </div>
        );
      case AppSection.HOME:
        return (
          <div className="text-center space-y-8 py-20 animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-romantic text-red-600 animate-pulse drop-shadow-md">
              Valentine's Love Hub
            </h1>
            <p className="text-xl md:text-2xl text-pink-500 font-cursive max-w-2xl mx-auto px-4">
              Now that we're officially Valentines, explore the special space I built just for us. 
              Every corner of this site has a piece of my heart.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-4">
              <button
                onClick={() => setActiveSection(AppSection.POEM)}
                className="group p-8 md:p-10 glass rounded-[3rem] hover:bg-white transition-all transform hover:-translate-y-2 shadow-xl border-2 border-pink-100"
              >
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">📜</div>
                <h3 className="text-2xl font-bold text-gray-800">Love Poems</h3>
                <p className="text-gray-500 mt-2">Personalized messages written by AI, inspired by you.</p>
              </button>
              
              <button
                onClick={() => setActiveSection(AppSection.VISION)}
                className="group p-8 md:p-10 glass rounded-[3rem] hover:bg-white transition-all transform hover:-translate-y-2 shadow-xl border-2 border-pink-100"
              >
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">🌅</div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                <p className="text-gray-500 mt-2">Let's visualize our next romantic getaway together.</p>
              </button>
            </div>
          </div>
        );
      case AppSection.POEM:
        return (
          <div className="py-12 px-4 animate-fade-in">
            <LoveLetter />
          </div>
        );
      case AppSection.VISION:
        return (
          <div className="py-12 px-4 animate-fade-in">
            <RomanticVision />
          </div>
        );
      default:
        return null;
    }
  };

  const showNav = ![AppSection.LANDING, AppSection.FLOWER_TRANSITION, AppSection.PROMISE_DAY, AppSection.QUESTION].includes(activeSection);

  return (
    <div className="min-h-screen relative font-sans text-gray-900 selection:bg-red-200">
      {/* Background selection */}
      {[AppSection.FLOWER_TRANSITION, AppSection.PROMISE_DAY].includes(activeSection) ? (
        <BackgroundFlowers />
      ) : (
        <BackgroundHearts />
      )}
      
      {/* Navigation - Only show in the Hub areas */}
      {showNav && (
        <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center animate-fade-in shadow-sm">
          <div 
            onClick={() => setActiveSection(AppSection.HOME)} 
            className="text-2xl md:text-3xl font-romantic text-red-600 cursor-pointer hover:scale-105 transition-transform"
          >
            Love Hub ❤️
          </div>
          <div className="flex gap-4 md:gap-10">
             <button 
                onClick={() => setActiveSection(AppSection.HOME)}
                className={`text-xs md:text-sm font-bold transition-colors uppercase tracking-widest ${activeSection === AppSection.HOME ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
             >
               Home
             </button>
             <button 
                onClick={() => setActiveSection(AppSection.POEM)}
                className={`text-xs md:text-sm font-bold transition-colors uppercase tracking-widest ${activeSection === AppSection.POEM ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
             >
               Poem
             </button>
             <button 
                onClick={() => setActiveSection(AppSection.VISION)}
                className={`text-xs md:text-sm font-bold transition-colors uppercase tracking-widest ${activeSection === AppSection.VISION ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
             >
               Vision
             </button>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className={`relative z-10 ${showNav ? 'pt-24' : 'pt-4'}`}>
        <div className="container mx-auto px-4">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center text-gray-400 text-sm">
        <p className="font-cursive text-xl text-pink-300">Infinite love for Surbhi</p>
      </footer>
    </div>
  );
};

export default App;
