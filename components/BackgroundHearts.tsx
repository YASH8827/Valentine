
import React, { useMemo } from 'react';

const BackgroundHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * (40 - 15) + 15}px`,
      delay: `${Math.random() * 15}s`,
      duration: `${Math.random() * (20 - 10) + 10}s`,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-float text-red-400"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            opacity: heart.opacity,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default BackgroundHearts;
