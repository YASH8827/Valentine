
import React, { useMemo } from 'react';

const BackgroundFlowers: React.FC = () => {
  const flowerEmojis = ['🌸', '🌻', '🌼', '🌷', '🌹', '🌺'];
  const flowers = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * (35 - 15) + 15}px`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * (12 - 6) + 6}s`,
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-pink-50/30">
      {flowers.map((f) => (
        <div
          key={f.id}
          className="heart-float"
          style={{
            left: f.left,
            fontSize: f.size,
            animationDelay: f.delay,
            animationDuration: f.duration,
            opacity: f.opacity,
          }}
        >
          {f.emoji}
        </div>
      ))}
    </div>
  );
};

export default BackgroundFlowers;
