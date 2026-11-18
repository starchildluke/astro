import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import matter from 'gray-matter';

import playformCompress from "@playform/compress";

const subfolders = ['posts', 'lists', 'mlog', 'morsels', 'music',
  'posts', 'recortes', 'release-notes']; 

const excludedPages = new Set();

subfolders.forEach((folder) => {
  const dir = `./src/content/${folder}`;
  
  if (!existsSync(dir)) return;

  readdirSync(dir)
    .filter((f) => /\.mdx?$/i.test(f))
    .forEach((f) => {
      const { data } = matter(readFileSync(`${dir}/${f}`, 'utf8'));
      
      const robots = data.robots;
      const hasNoIndex = Array.isArray(robots) 
        ? robots.includes("noindex") 
        : robots?.includes("noindex");
        
      const isUnpublished = data.published === false;

      if (hasNoIndex || isUnpublished) {
        const slug = f.replace(/\.mdx?$/i, '');
        excludedPages.add(`/${folder}/${slug}/`);
      }
    });
});

export default defineConfig({
  server: { port: 4321 },
  integrations: [
    sitemap({
    filter: (page) => !excludedPages.has(new URL(page).pathname)
  }),
  mdx(),
  playformCompress(
    {
      css: true,
      html: false,
      Image: true,
      JavaScript: false,
      SVG: false
    }
  )],
  trailingSlash: 'always',
  site: "https://lukealexdavis.co.uk",
  redirects: {
    "/post/": "/posts/",
    "/wiki/": "/jardim/",
    "/wikinotes/": "/recortes/",
    "/post/[...slug]": "/posts/[...slug]"
  }
});