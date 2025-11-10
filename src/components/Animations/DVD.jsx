import { useEffect, useRef, useState } from 'react';
import './DVD.css';

const DVD = () => {
  const dvdRef = useRef(null);
  const [position, setPosition] = useState({ 
    x: Math.random() * (window.innerWidth - 100), 
    y: Math.random() * (window.innerHeight - 100) 
  });
  const velocityRef = useRef({
    vx: (Math.random() - 0.5) * 6,
    vy: (Math.random() - 0.5) * 6
  });
  const hueRotationsRef = useRef([0, 45, 90, 135, 180, 225, 270, 315]);

  useEffect(() => {
    const animate = () => {
      setPosition(prev => {
        let newX = prev.x + velocityRef.current.vx;
        let newY = prev.y + velocityRef.current.vy;
        const width = 100;
        const height = 100;

        // Bounce off walls and change color
        if (newX <= 0 || newX >= window.innerWidth - width) {
          velocityRef.current.vx *= -1;
          changeColor();
        }
        if (newY <= 0 || newY >= window.innerHeight - height) {
          velocityRef.current.vy *= -1;
          changeColor();
        }

        return {
          x: Math.max(0, Math.min(newX, window.innerWidth - width)),
          y: Math.max(0, Math.min(newY, window.innerHeight - height))
        };
      });

      requestAnimationFrame(animate);
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const changeColor = () => {
    if (dvdRef.current) {
      const randomHue = hueRotationsRef.current[
        Math.floor(Math.random() * hueRotationsRef.current.length)
      ];
      dvdRef.current.style.filter = `hue-rotate(${randomHue}deg) saturate(1.2)`;
    }
  };

  return (
    <div
      ref={dvdRef}
      className="dvd-logo"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <img src="/dvd.svg" alt="DVD Logo" className="dvd-image" />
    </div>
  );
};

export default DVD;
