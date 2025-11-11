import { ThemeProvider } from './contexts/ThemeContext';
import { StarfieldProvider } from './contexts/StarfieldContext';
import { DVDProvider } from './contexts/DVDContext';
import DVD from './components/Animations/DVD';
import StarField from './components/Animations/StarField';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import FlightRadar from './components/FlightRadar/FlightRadar';
// import Contact from './components/Contact/Contact';
import FloatingNav from './components/FloatingNav/FloatingNav';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <StarfieldProvider>
        <DVDProvider>
          <StarField />
          <DVD />
          <Navbar />
          <Hero />
          <About />
          <FlightRadar />
          {/* <Contact /> */}
          <FloatingNav />
          <div className="floating-bottom-blur"></div>
        </DVDProvider>
      </StarfieldProvider>
    </ThemeProvider>
  );
}

export default App;
