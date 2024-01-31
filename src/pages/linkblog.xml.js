import rss from '@astrojs/rss';
import linkblog from '../data/linkblog.json';
import site from '../data/site.json';

export async function get(context) {
  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    stylesheet: './style/pretty-feed-v3.xsl',
    items: linkblog.map((post) => ({
      title: post.title,
      description: post.description,
      link: post.url,
      content: post.description,
      pubDate: post.date
    }))
    });
  }