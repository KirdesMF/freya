// uno.config.ts
import { defineConfig, presetTypography, presetUno } from "unocss";

const COLORS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
  "link",
] as const;

function generateColors() {
  return COLORS.reduce(
    (acc, color) => {
      acc[`${color}`] = `hsl(var(--${color}))`;
      return acc;
    },
    {} as Record<string, string>,
  );
}

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  theme: {
    fontFamily: {
      inter: "Inter",
      gabarito: "Gabarito",
    },
    colors: {
      ...generateColors(),
    },
    borderRadius: {
      DEFAULT: "var(--radius)",
    },
  },
});
