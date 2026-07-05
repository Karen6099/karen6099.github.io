import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { StarfieldProvider } from './contexts/StarfieldContext';
import { DVDProvider } from './contexts/DVDContext';
import DVD from './components/Animations/DVD';
import StarField from './components/Animations/StarField';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
// import About from './components/About/About';
import FlightRadar from './components/FlightRadar/FlightRadar';
import Bowl from './components/Bowl/Bowl';
import FriendshipMeter from './components/FriendshipMeter/FriendshipMeter';
import VisitorTracker from './components/VisitorTracker/VisitorTracker';
// import Contact from './components/Contact/Contact';
import FloatingNav from './components/FloatingNav/FloatingNav';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const revealSection = sectionName => {
    setActiveSection(sectionName);
  };

  return (
    <ThemeProvider>
      <StarfieldProvider>
        <DVDProvider>
          <StarField />
          <DVD />
          <Navbar />
          <Hero />
          {/* <About /> */}
          {activeSection === 'flights' ? <FlightRadar /> : null}
          {activeSection === 'bowl' ? <Bowl /> : null}
          {activeSection === 'friendship' ? <FriendshipMeter /> : null}
          {activeSection === 'tracker' ? <VisitorTracker /> : null}
          {/* <Contact /> */}
          <FloatingNav onRevealSection={revealSection} />
          <div className="floating-bottom-blur"></div>
        </DVDProvider>
      </StarfieldProvider>
    </ThemeProvider>
  );
}

export default App;
