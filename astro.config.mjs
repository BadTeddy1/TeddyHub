// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  import sitemap from "@astrojs/sitemap";
  export default defineConfig({

site:"https://teddyhub-eight.vercel.app",

integrations:[

react(),

sitemap()

]

});

