import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../data/site.json';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const recortes = await getCollection('recortes');
  const allPosts = recortes.sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: allPosts.map((post) => ({
      link: `/recortes/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    }))
    });
  }