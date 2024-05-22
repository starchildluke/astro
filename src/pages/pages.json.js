import { getCollection } from 'astro:content';

export async function GET({params, request}) {
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

  const allAlbums = albums.map((data) => {
        const { slug, data: { title, pubDate, description } } = data;
        return {
          title: title,
          date: pubDate,
          description: description,
          url: `https://lukealexdavis.co.uk/music/${slug}/`
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
    posts, allLists, allMlogs, allMorsels, allAlbums, allRecortes, allReleaseNotes
    ).sort((a, b) => b.title - a.title);
  
  return new Response(JSON.stringify({ allColls })
  )
}

