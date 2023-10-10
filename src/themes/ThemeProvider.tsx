import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Theme, ThemeContextProps } from '../types/ThemeTypes';

const LightTheme: Theme = {
  background: '#ffffff',
  text: '#000000',
  primary: '#6200ee',
  //...
};

const DarkTheme: Theme = {
  background: '#000000',
  text: '#ffffff',
  primary: '#bb86fc',
  //...
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const toggleTheme = () => setIsLightTheme(!isLightTheme);
  const theme = isLightTheme ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
