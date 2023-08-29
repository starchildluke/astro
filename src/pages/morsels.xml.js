import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import site from '../data/site.json';
import sanitizeHtml from 'sanitize-html';

const allPostsGlob = import.meta.glob('./post/morsels/*.{md,mdx}', {
  eager: true,
});

// Sort posts by newest first
const allPosts = Object.values(allPostsGlob).sort(
  (a, b) =>
    new Date(b.frontmatter.pubDate).valueOf() -
    new Date(a.frontmatter.pubDate).valueOf()
);

export async function get(context) {
  return rss({
    title: "Luke Alex Davis's Morsels",
    description: 'The RSS feed for my coding morsels.',
    site: context.site,
    items: allPosts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      content: sanitizeHtml(post.compiledContent()),
      ...post.frontmatter,
    })),
  });
}
