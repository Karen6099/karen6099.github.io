import { createContext, useState, useContext } from 'react';

const DVDContext = createContext();

export const DVDProvider = ({ children }) => {
  const [isDVDVisible, setIsDVDVisible] = useState(true);

  const toggleDVD = () => {
    setIsDVDVisible(prev => !prev);
  };

  return (
    <DVDContext.Provider value={{ isDVDVisible, setIsDVDVisible, toggleDVD }}>
      {children}
    </DVDContext.Provider>
  );
};

export const useDVD = () => {
  const context = useContext(DVDContext);
  if (!context) {
    console.error('useDVD must be used within DVDProvider');
  }
  return context;
};
