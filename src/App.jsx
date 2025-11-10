import { ThemeProvider } from './contexts/ThemeContext';
import DVD from './components/Animations/DVD';
import StarField from './components/Animations/StarField';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import FloatingNav from './components/FloatingNav/FloatingNav';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <StarField />
      <DVD />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <FloatingNav />
      <div className="floating-bottom-blur"></div>
    </ThemeProvider>
  );
}

export default App;
