import rss from '@astrojs/rss';
import site from '../data/site.json';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { getCollection } from 'astro:content';
import pages from './pages.json.js';

const parser = new MarkdownIt();

const blogPosts = await getCollection('posts');
  const lists = await getCollection("lists");
  const mlogs = await getCollection("mlog");
  const morsels = await getCollection("morsels");
  const albums = await getCollection("music");
  const recortes = await getCollection("recortes");
  const releaseNotes = await getCollection("release-notes");
  
  const posts = blogPosts.map((data) => {
      const { slug, data: { title, pubDate, description } } = data;
      return {
        title: title,
        date: pubDate,
        description: description,
        url: `https://lukealexdavis.co.uk/posts/${slug}/`
      };
    });

  const allLists = lists.map((data) => {
      const { slug, data: { title, pubDate, description } } = data;
      return {
        title: title,
        date: pubDate,
        description: description,
        url: `https://lukealexdavis.co.uk/lists/${slug}/`
      };
    });

  const allMlogs = mlogs.map((data) => {
        const { slug, data: { title, pubDate, description } } = data;
        return {
          title: title,
          date: pubDate,
          description: description,
          url: `https://lukealexdavis.co.uk/mlog/${slug}/`
        };
      });

  const allMorsels = morsels.map((data) => {
        const { slug, data: { title, pubDate, description } } = data;
        return {
          title: title,
          date: pubDate,
          description: description,
          url: `https://lukealexdavis.co.uk/morsels/${slug}/`
        };
      });
  
  const allRecortes = recortes.map((data) => {
          const { slug, data: { title, pubDate, description } } = data;
          return {
            title: title,
            date: pubDate,
            description: description,
            url: `https://lukealexdavis.co.uk/recortes/${slug}/`
          };
        });

  const allReleaseNotes = releaseNotes.map((data) => {
        const { slug, data: { title, pubDate, description } } = data;
        return {
          title: title,
          date: pubDate,
          description: description,
          url: `https://lukealexdavis.co.uk/release-notes/${slug}/`
        };
      });

  const allColls = [].concat(
    posts, allLists, allMlogs, allMorsels, allRecortes, allReleaseNotes
    ).sort((a, b) => b.date - a.date);

export async function GET(context) {
    return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    stylesheet: './style/linkblog-pretty-feed-v3.xsl',
    items: allColls.map((post) => ({
      title: post.title,
      description: post.description,
      link: post.url,
      pubDate: post.date
    }))
    });
  }