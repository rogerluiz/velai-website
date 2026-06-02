"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { defaultTheme, type ThemeId } from "./themes";

const STORAGE_KEY = "velai-theme";

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(defaultTheme);

  // On mount, read saved preference (anti-flash already handled by the
  // inline script in layout.tsx — here we just sync React state)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (saved) setThemeState(saved);
  }, []);

  function setTheme(id: ThemeId) {
    setThemeState(id);
    localStorage.setItem(STORAGE_KEY, id);
    document.documentElement.setAttribute("data-theme", id);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
