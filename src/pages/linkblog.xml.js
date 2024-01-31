import rss from '@astrojs/rss';
import linkblog from '../data/linkblog.json';
import site from '../data/site.json';

export async function get(context) {
  return rss({
    title: "Luke's Linkblog",
    description: "A linkblog about all kinds of topics including SEO, AI, music, life, and the Web.",
    site: site.url + 'linkblog',
    stylesheet: './style/linkblog-pretty-feed-v3.xsl',
    items: linkblog.map((post) => ({
      title: post.title,
      description: post.description,
      link: post.url,
      content: post.description,
      pubDate: post.date
    }))
    });
  }