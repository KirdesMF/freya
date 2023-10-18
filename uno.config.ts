// uno.config.ts
import { defineConfig, presetTypography, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  theme: {
    fontFamily: {
      inter: "Inter",
      gabarito: "Gabarito",
    },
    colors: {
      dark: "hsl(0, 0%, 10%)",
    },
  },
});
