import { createContext, useState, useContext } from 'react';

const StarfieldContext = createContext();

export const StarfieldProvider = ({ children }) => {
  const [isStarfieldVisible, setIsStarfieldVisible] = useState(true);

  const toggleStarfield = () => {
    setIsStarfieldVisible(prev => !prev);
  };

  return (
    <StarfieldContext.Provider value={{ isStarfieldVisible, setIsStarfieldVisible, toggleStarfield }}>
      {children}
    </StarfieldContext.Provider>
  );
};

export const useStarfield = () => {
  const context = useContext(StarfieldContext);
  if (!context) {
    console.error('useStarfield must be used within StarfieldProvider');
  }
  return context;
};
