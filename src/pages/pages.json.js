import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET({params, request}) {
  const blogPosts = await getCollection('posts');
  const lists = await getCollection("lists");
  const mlogs = await getCollection("mlog");
  const morsels = await getCollection("morsels");
  const albums = await getCollection("music");
  const recortes = await getCollection("recortes");
  const releaseNotes = await getCollection("release-notes");
  
  const posts = blogPosts.map((data) => {
      const { slug, body, data: { title, pubDate, description } } = data;
      return {
        url: `https://lukealexdavis.co.uk/posts/${slug}/`,
        title: title,
        date: pubDate,
        description: description,
        body: sanitizeHtml(parser.render(body))
      };
    });

  const allLists = lists.map((data) => {
      const { slug, body, data: { title, pubDate, description } } = data;
      return {
        url: `https://lukealexdavis.co.uk/lists/${slug}/`,
        title: title,
        date: pubDate,
        description: description,
        body: sanitizeHtml(parser.render(body))
      };
    });

  const allMlogs = mlogs.map((data) => {
        const { slug, body, data: { title, pubDate, description } } = data;
        return {
          url: `https://lukealexdavis.co.uk/mlog/${slug}/`,
          title: title,
          date: pubDate,
          description: description,
          body: sanitizeHtml(parser.render(body))
        };
      });

  const allMorsels = morsels.map((data) => {
        const { slug, body, data: { title, pubDate, description } } = data;
        return {
          url: `https://lukealexdavis.co.uk/morsels/${slug}/`,
          title: title,
          date: pubDate,
          description: description,
          body: sanitizeHtml(parser.render(body))
        };
      });

  const allAlbums = albums.map((data) => {
        const { slug, body, data: { title, pubDate, description } } = data;
        return {
          title: title,
          date: pubDate,
          description: description,
          url: `https://lukealexdavis.co.uk/music/${slug}/`
        };
      });
  
  const allRecortes = recortes.map((data) => {
          const { slug, body, data: { title, pubDate, description } } = data;
          return {
            url: `https://lukealexdavis.co.uk/recortes/${slug}/`,
            title: title,
            date: pubDate,
            description: description,
            body: sanitizeHtml(parser.render(body))
          };
        });

  const allReleaseNotes = releaseNotes.map((data) => {
        const { slug, body, data: { title, pubDate, description } } = data;
        return {
          url: `https://lukealexdavis.co.uk/release-notes/${slug}/`,
          title: title,
          date: pubDate,
          description: description,
          body: sanitizeHtml(parser.render(body))
        };
      });

  const allColls = [].concat(
    posts, allLists, allMlogs, allMorsels, allAlbums, allRecortes, allReleaseNotes
    ).sort((a, b) => b.date - a.date);
  
  return new Response(JSON.stringify({ allColls })
  )
}

