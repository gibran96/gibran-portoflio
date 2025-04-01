
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getSunriseSunsetTimes } from '../utils/seoHelpers';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    // Check for saved theme preference or use sunrise/sunset
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Use sunset/sunrise to determine theme
      const checkDayNightCycle = async () => {
        try {
          const { sunrise, sunset } = await getSunriseSunsetTimes();
          const now = new Date();
          const isNightTime = now < sunrise || now > sunset;
          setIsDarkMode(isNightTime);
        } catch (error) {
          console.error('Error determining day/night cycle:', error);
          // Fallback to system preference
          setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
      };
      
      checkDayNightCycle();
    }
  }, []);

  useEffect(() => {
    // Update document class when theme changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
