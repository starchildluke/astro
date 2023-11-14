import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../data/site.json';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function get(context) {
  const lists = await getCollection('lists');
  const allPosts = lists.sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: allPosts.map((post) => ({
      link: `/lists/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    }))
    });
  }