import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://earnest-flan-223d1a.netlify.app",
  integrations: [preact()]
});