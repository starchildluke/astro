import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [sitemap(), mdx()],
  site: "https://lukealexdavis.co.uk"
});
