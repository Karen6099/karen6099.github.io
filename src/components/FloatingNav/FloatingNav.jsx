import { useTheme } from '../../contexts/ThemeContext';
import './FloatingNav.css';

const FloatingNav = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="floating-nav">
      <button onClick={() => handleScroll('home')} className="nav-btn" title="Home">
        🏠
      </button>
      <button onClick={() => handleScroll('about')} className="nav-btn" title="About">
        👤
      </button>
      <button onClick={() => handleScroll('projects')} className="nav-btn" title="Projects">
        💼
      </button>
      <a href="https://github.com" className="nav-btn" title="GitHub" target="_blank" rel="noopener noreferrer">
        🐙
      </a>
      <a href="https://linkedin.com" className="nav-btn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
        💼
      </a>
      <button onClick={toggleDarkMode} className="nav-btn" title="Toggle Theme">
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default FloatingNav;
