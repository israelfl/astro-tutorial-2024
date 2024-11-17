import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: "https://earnest-flan-223d1a.netlify.app",
  integrations: [preact(), db()],
  adapter: netlify()
});