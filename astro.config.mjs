import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
  site: "https://lukealexdavis.co.uk",
  trailingSlash: 'always'
});
