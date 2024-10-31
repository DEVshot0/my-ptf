import React, { createContext, useState, useEffect } from 'react';

export const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(() => {
    const savedMode = localStorage.getItem('isNightMode');
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  const toggleNightMode = () => {
    setIsNightMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('isNightMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    localStorage.setItem('isNightMode', JSON.stringify(isNightMode));
  }, [isNightMode]);

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
