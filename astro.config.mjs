import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://brainslate.fr",
  integrations: [UnoCSS({ injectReset: true }), react(), mdx(), sitemap()],
});
