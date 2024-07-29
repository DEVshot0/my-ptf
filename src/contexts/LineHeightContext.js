import React, { createContext, useState } from 'react';

export const LineHeightContext = createContext();

export const LineHeightProvider = ({ children }) => {
  const [lineHeight, setLineHeight] = useState(0);

  return (
    <LineHeightContext.Provider value={{ lineHeight, setLineHeight }}>
      {children}
    </LineHeightContext.Provider>
  );
};
