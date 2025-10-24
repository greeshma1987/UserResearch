import { createContext, useContext, useState, ReactNode } from "react";

export type Theme = "indigo" | "warm" | "cool";

interface ThemeColors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;
  accent: string;
  background: string;
  cardBg: string;
  text: string;
  textMuted: string;
  border: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeConfigs: Record<Theme, ThemeColors> = {
  indigo: {
    primary: "#4f46e5",
    primaryDark: "#3730a3",
    primaryLight: "#e0e7ff",
    secondary: "#8b5cf6",
    secondaryLight: "#f5f3ff",
    accent: "#ec4899",
    background: "#faf5ff",
    cardBg: "#ffffff",
    text: "#1e1b4b",
    textMuted: "#64748b",
    border: "#e0e7ff",
  },
  warm: {
    primary: "#f59e0b",
    primaryDark: "#d97706",
    primaryLight: "#fef3c7",
    secondary: "#fb923c",
    secondaryLight: "#fff7ed",
    accent: "#ef4444",
    background: "#fffbeb",
    cardBg: "#ffffff",
    text: "#78350f",
    textMuted: "#78716c",
    border: "#fed7aa",
  },
  cool: {
    primary: "#0ea5e9",
    primaryDark: "#0369a1",
    primaryLight: "#e0f2fe",
    secondary: "#06b6d4",
    secondaryLight: "#ecfeff",
    accent: "#8b5cf6",
    background: "#f0f9ff",
    cardBg: "#ffffff",
    text: "#0c4a6e",
    textMuted: "#64748b",
    border: "#bae6fd",
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("indigo");
  const colors = themeConfigs[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
