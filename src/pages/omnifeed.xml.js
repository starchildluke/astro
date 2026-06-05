import rss from '@astrojs/rss';
import site from '../data/site.json';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { getCollection } from 'astro:content';

const parser = new MarkdownIt();

const blogPosts = await getCollection('posts');
const lists = await getCollection("lists");
const mlogs = await getCollection("mlog");
const morsels = await getCollection("morsels");
const albums = await getCollection("music");
const recortes = await getCollection("recortes");
const releaseNotes = await getCollection("release-notes");
  
const posts = blogPosts.map((data) => {
    const { id, data: { title, pubDate, description } } = data;
    return {
      title: title,
      date: pubDate,
      description: description,
      url: `https://lukealexdavis.co.uk/posts/${id}/`
    };
  });

const allLists = lists.map((data) => {
    const { id, data: { title, pubDate, description } } = data;
    return {
      title: title,
      date: pubDate,
      description: description,
      url: `https://lukealexdavis.co.uk/lists/${id}/`
    };
  });

const allMlogs = mlogs.map((data) => {
      const { id, data: { title, pubDate, description } } = data;
      return {
        title: title,
        date: pubDate,
        description: description,
        url: `https://lukealexdavis.co.uk/mlog/${id}/`
      };
    });

const allMorsels = morsels.map((data) => {
      const { id, data: { title, pubDate, description } } = data;
      return {
        title: title,
        date: pubDate,
        description: description,
        url: `https://lukealexdavis.co.uk/morsels/${id}/`
      };
    });

const allRecortes = recortes.map((data) => {
        const { id, data: { title, pubDate, description } } = data;
        return {
          title: title,
          date: pubDate,
          description: description,
          url: `https://lukealexdavis.co.uk/recortes/${id}/`
        };
      });

const allReleaseNotes = releaseNotes.map((data) => {
      const { id, data: { title, pubDate, description } } = data;
      return {
        title: title,
        date: pubDate,
        description: description,
        url: `https://lukealexdavis.co.uk/release-notes/${id}/`
      };
    });

console.log(posts);

export async function GET(context) {
  const allColls = [].concat(
    posts, allLists, allMlogs, allMorsels, allRecortes, allReleaseNotes
  );
  return rss({
  title: site.title,
  description: site.description,
  site: context.site,
  items: allColls.map((post) => ({
    title: post.title,
    description: post.description,
    link: post.url,
    pubDate: post.date
  })).sort((a, b) => b.pubDate - a.pubDate)
  });
}