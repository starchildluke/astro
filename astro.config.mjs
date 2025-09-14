import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  server: { port: 4321 },
  integrations: [sitemap(), mdx()],
  trailingSlash: 'always',
  site: "https://lukealexdavis.co.uk",
  redirects: {
    "/post/": "/posts/",
    "/wiki/": "/jardim/",
    "/wikinotes/": "/recortes/",
    "/post/[...slug]": "/posts/[...slug]"
  }
});
