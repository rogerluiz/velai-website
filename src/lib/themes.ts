export type ThemeId = "ambar" | "oceano" | "floresta" | "aurora" | "terra" | "gelo";

export interface Theme {
  id: ThemeId;
  name: string;
  emoji: string;
  /** Used only for the preview swatches in the switcher UI */
  preview: {
    accent: string;
    bg: string;
  };
}

export const themes: Theme[] = [
  {
    id: "ambar",
    name: "Âmbar",
    emoji: "🕯️",
    preview: { accent: "#f6b91a", bg: "#0f1120" },
  },
  {
    id: "oceano",
    name: "Oceano",
    emoji: "🌊",
    preview: { accent: "#22d3ee", bg: "#071c2e" },
  },
  {
    id: "floresta",
    name: "Floresta",
    emoji: "🌿",
    preview: { accent: "#34d399", bg: "#071a0f" },
  },
  {
    id: "aurora",
    name: "Aurora",
    emoji: "✨",
    preview: { accent: "#c084fc", bg: "#0e0820" },
  },
  {
    id: "terra",
    name: "Terra",
    emoji: "🪨",
    preview: { accent: "#fb923c", bg: "#1a0e07" },
  },
  {
    id: "gelo",
    name: "Gelo",
    emoji: "❄️",
    preview: { accent: "#60a5fa", bg: "#07101e" },
  },
];

export const defaultTheme: ThemeId = "ambar";
