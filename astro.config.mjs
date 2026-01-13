import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import playformCompress from "@playform/compress";

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  server: { port: 4321 },
  integrations: [sitemap(), mdx(), playformCompress(
    {
      css: true,
      html: false,
      Image: true,
      JavaScript: false,
      SVG: false
    }
  )],
  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath]
  },
  trailingSlash: 'always',
  site: "https://lukealexdavis.co.uk",
  redirects: {
    "/post/": "/posts/",
    "/wiki/": "/jardim/",
    "/wikinotes/": "/recortes/",
    "/post/[...slug]": "/posts/[...slug]"
  }
});