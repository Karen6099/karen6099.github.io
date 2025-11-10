import { useEffect } from 'react';
import './StarField.css';

const StarField = () => {
  useEffect(() => {
    const createStarfield = () => {
      const starCount = 100;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-fall';

        const randomLeft = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 10;
        const randomDuration = 5 + Math.random() * 10;
        const randomDrift = (Math.random() - 0.5) * 300;

        star.style.left = randomLeft + 'px';
        star.style.animationDelay = randomDelay + 's';
        star.style.animationDuration = randomDuration + 's';
        star.style.setProperty('--tx', randomDrift + 'px');
        star.style.opacity = Math.random() * 0.6 + 0.4;

        document.body.appendChild(star);
      }
    };

    createStarfield();

    return () => {
      // Cleanup stars on unmount
      document.querySelectorAll('.star-fall').forEach(star => star.remove());
    };
  }, []);

  return null;
};

export default StarField;
