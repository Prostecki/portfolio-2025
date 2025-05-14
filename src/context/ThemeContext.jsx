import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialize theme state from localStorage or default to 'system'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });

  // Determines actual theme (accounts for system preference when theme='system')
  const getActualTheme = () => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return theme;
  };

  // Applies theme changes and sets up system theme listener
  useEffect(() => {
    const root = document.documentElement;
    const actualTheme = getActualTheme();

    // Toggle dark class on document root
    root.classList.toggle('dark', actualTheme === 'dark');

    // Persist theme preference in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }

    // Handle system theme changes (only when theme='system')
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        root.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  // Cycles through theme options: light → dark → system → light
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{
      theme,          // Current selected theme (light/dark/system)
      setTheme,       // Function to set theme directly
      toggleTheme,    // Function to cycle through themes
      actualTheme: getActualTheme() // Computed active theme (accounts for system)
    }}>
      {children}
    </ThemeContext.Provider>
  );
}
