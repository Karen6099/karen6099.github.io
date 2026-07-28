import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { StarfieldProvider } from './contexts/StarfieldContext';
import { DVDProvider } from './contexts/DVDContext';
import Hero from './components/Hero/Hero';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
import FloatingNav from './components/FloatingNav/FloatingNav';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [showLegacyBar, setShowLegacyBar] = useState(false);

  return (
    <ThemeProvider>
      <StarfieldProvider>
        <DVDProvider>
          <Hero
            activeSection={activeSection}
            onSelectSection={setActiveSection}
            showLegacyBar={showLegacyBar}
            onToggleLegacyBar={() => setShowLegacyBar(prev => !prev)}
          />
          {/* <About /> */}
          {/* <Contact /> */}
          {showLegacyBar && <FloatingNav onRevealSection={setActiveSection} />}
          {showLegacyBar && <div className="floating-bottom-blur"></div>}
        </DVDProvider>
      </StarfieldProvider>
    </ThemeProvider>
  );
}

export default App;
