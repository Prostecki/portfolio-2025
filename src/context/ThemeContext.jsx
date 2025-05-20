import { createContext, useState, useEffect } from "react";
import { useContext } from "react";

export const ThemeContext = createContext();

// Константа для ключа localStorage
const THEME_STORAGE_KEY = "portfolio2025_theme_preference";

export function ThemeProvider({ children }) {
  // Initialize theme state from localStorage or default to 'system'
  const [theme, setTheme] = useState(() => {
    // Инициализируем состояние непосредственно из localStorage (если доступно)
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      return savedTheme || "system";
    }
    return "system";
  });

  // Determines actual theme (accounts for system preference when theme='system')
  const getActualTheme = () => {
    if (typeof window === "undefined") return "light"; // default value for SSR
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme;
  };

  // Effect for updating DOM and localStorage when theme changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const actualTheme = getActualTheme();

    // Toggle dark class on document root
    root.classList.toggle("dark", actualTheme === "dark");

    // Persist theme preference in localStorage with unique key
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.error("Could not save theme preference:", error);
    }

    // Handle system theme changes (only when theme='system')
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (theme === "system") {
        root.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  // Cycles through theme options: light → dark → system → light
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme, // Current selected theme (light/dark/system)
        setTheme, // Function to set theme directly
        toggleTheme, // Function to cycle through themes
        actualTheme: getActualTheme(), // Computed active theme (accounts for system)
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
