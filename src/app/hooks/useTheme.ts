import { useEffect, useState } from "react";
import { readPreference, savePreference } from '../utils/preferences';

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = readPreference("portfolio-theme");
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    savePreference("portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#080b12' : '#f6f8fc');
  }, [theme]);

  return { theme, toggleTheme: () => setTheme((value) => (value === "dark" ? "light" : "dark")) };
}
