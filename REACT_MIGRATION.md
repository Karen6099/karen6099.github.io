# React Migration Guide

This guide will help you convert the static portfolio into a modern React application.

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Basic React knowledge

## 🚀 Quick Setup

```bash
# Create a new React app
npx create-react-app portfolio-app
cd portfolio-app

# Install additional dependencies (optional)
npm install framer-motion react-icons
```

## 📁 Recommended React Component Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Projects.css
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   ├── SkillCategory.jsx
│   │   └── Skills.css
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── Animations/
│   │   ├── DVD.jsx
│   │   ├── StarField.jsx
│   │   └── Animations.css
│   └── FloatingNav/
│       ├── FloatingNav.jsx
│       └── FloatingNav.css
├── hooks/
│   ├── useDarkMode.js
│   └── useScrollAnimation.js
├── contexts/
│   └── ThemeContext.jsx
├── App.jsx
├── App.css
└── index.js
```

## 🔧 Component Examples

### App.jsx (Main Component)

```jsx
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import DVD from './components/Animations/DVD';
import StarField from './components/Animations/StarField';
import FloatingNav from './components/FloatingNav/FloatingNav';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <DVD />
        <StarField />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <FloatingNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### useDarkMode.js (Custom Hook)

```javascript
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};
```

### ThemeContext.jsx

```jsx
import { createContext, useContext } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

### DVD.jsx (Bouncing Animation)

```jsx
import { useEffect, useRef, useState } from 'react';
import './Animations.css';

const DVD = () => {
  const dvdRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ 
    vx: (Math.random() - 0.5) * 6, 
    vy: (Math.random() - 0.5) * 6 
  });

  useEffect(() => {
    const animate = () => {
      setPosition(prev => {
        let newX = prev.x + velocity.vx;
        let newY = prev.y + velocity.vy;
        let newVx = velocity.vx;
        let newVy = velocity.vy;

        if (newX <= 0 || newX >= window.innerWidth - 100) {
          newVx *= -1;
        }
        if (newY <= 0 || newY >= window.innerHeight - 100) {
          newVy *= -1;
        }

        setVelocity({ vx: newVx, vy: newVy });

        return {
          x: Math.max(0, Math.min(newX, window.innerWidth - 100)),
          y: Math.max(0, Math.min(newY, window.innerHeight - 100))
        };
      });
    };

    const frame = setInterval(animate, 1000 / 60);
    return () => clearInterval(frame);
  }, [velocity]);

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
```

### StarField.jsx

```jsx
import { useEffect } from 'react';
import './Animations.css';

const StarField = () => {
  useEffect(() => {
    const createStars = () => {
      const container = document.body;
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

        container.appendChild(star);
      }
    };

    createStars();
  }, []);

  return null;
};

export default StarField;
```

### FloatingNav.jsx

```jsx
import { useTheme } from '../hooks/useTheme';
import './FloatingNav.css';

const FloatingNav = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="floating-nav-bar">
      <div className="floating-nav-item">
        <a href="#home" className="nav-icon-btn" title="Home">
          {/* SVG Icon */}
        </a>
      </div>
      {/* More nav items */}
      <button 
        onClick={toggleTheme} 
        className="nav-icon-btn"
        title="Toggle Theme"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default FloatingNav;
```

## 🎨 CSS to React Stylesheets

Move your CSS from `styles/style.css` to individual component CSS files:

1. **Global Styles** → `src/index.css` or `src/App.css`
2. **Component Styles** → `src/components/ComponentName/ComponentName.css`
3. **Animations** → `src/components/Animations/Animations.css`

## 🔄 State Management

### Using React Hooks (Recommended for small projects)
- `useState()` for component state
- `useContext()` for theme sharing
- `useEffect()` for animations

### Using Redux (For larger projects)
```bash
npm install redux react-redux
```

## 📦 Deployment

### Deploy to GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://github.com/karen6099.github.io",
"deploy": "npm run build && gh-pages -d build"

# Deploy
npm run deploy
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the build folder to Netlify
```

## 🚀 Performance Optimization

1. **Code Splitting**
   ```jsx
   const About = React.lazy(() => import('./components/About/About'));
   ```

2. **Memoization**
   ```jsx
   export default React.memo(ProjectCard);
   ```

3. **Image Optimization**
   - Use WebP format for images
   - Lazy load images
   - Use responsive images with `srcSet`

## 📚 Useful Libraries

- **framer-motion** - Smooth animations
- **react-icons** - Icon library
- **classnames** - Conditional CSS classes
- **react-observe** - Intersection Observer
- **zustand** - Lightweight state management

## 🎯 Next Steps

1. Create the React app structure
2. Convert HTML to components
3. Move CSS to component files
4. Implement hooks and context
5. Test and optimize
6. Deploy to GitHub Pages or Vercel

## 📖 Resources

- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)
- [CSS-in-JS Options](https://styled-components.com/)
- [React Best Practices](https://reactjs.org/docs/thinking-in-react.html)

---

Happy coding! 🚀
