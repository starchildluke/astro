import rss from '@astrojs/rss';
import site from '../data/site.json';
import { getCollection } from 'astro:content';

export async function GET(context) {

  const collections = await Promise.all([
    getCollection('posts'),
    getCollection('lists'),
    getCollection('mlog'),
    getCollection('morsels'),
    getCollection('recortes'),
    getCollection('release-notes')
  ]);

  const allItems = collections.flatMap((collection) => {
    return collection.map((item) => {
      const collectionName = item.collection; 
      
      return {
        title: item.data.title,
        description: item.data.description,
        link: `https://lukealexdavis.co.uk/${collectionName}/${item.id}/`,
        pubDate: item.data.pubDate
      };
    });
  });

  allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: allItems
  });
}