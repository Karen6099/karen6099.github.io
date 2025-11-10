import { createContext, useContext } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const darkModeValue = useDarkMode();

  return (
    <ThemeContext.Provider value={darkModeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
