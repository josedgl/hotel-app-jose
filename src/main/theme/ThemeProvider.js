import React, { createContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { PureLightTheme } from './schemes/PureLightTheme';

export const ThemeContext = createContext({});

const ThemeProviderWrapper = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      <ThemeProvider theme={PureLightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;