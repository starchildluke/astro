import { getCollection } from 'astro:content';

export async function GET({params, request}) {
  const blogPosts = await getCollection('posts');
  const lists = await getCollection("lists");
  const mlogs = await getCollection("mlog");
  const morsels = await getCollection("morsels");
  const recortes = await getCollection("recortes");
  const releaseNotes = await getCollection("release-notes");
  
  const posts = blogPosts.map((data) => {
      const { slug, data: { title, pubDate, description } } = data;
      return {
        title: title,
        date: pubDate,
        description: description,
        url: `https://lukealexdavis.co.uk/posts/${slug}/`,
        body: data.body
      };
    });

  const allLists = lists.map((data) => {
      const { slug, data: { title, pubDate, description } } = data;
      return {
        title: title,
        date: pubDate,
        description: description,
        url: `https://lukealexdavis.co.uk/lists/${slug}/`,
        body: data.body
      };
    });

  const allMlogs = mlogs.map((data) => {
        const { slug, data: { title, pubDate, description } } = data;
        return {
          title: title,
          date: pubDate,
          description: description,
          url: `https://lukealexdavis.co.uk/mlog/${slug}/`,
          body: data.body
        };
      });

  const allMorsels = morsels.map((data) => {
        const { slug, data: { title, pubDate, description } } = data;
        return {
          title: title,
          date: pubDate,
          description: description,
          url: `https://lukealexdavis.co.uk/morsels/${slug}/`,
          body: data.body
        };
      });
  
  const allRecortes = recortes.map((data) => {
          const { slug, data: { title, pubDate, description } } = data;
          return {
            title: title,
            date: pubDate,
            description: description,
            url: `https://lukealexdavis.co.uk/recortes/${slug}/`,
            body: data.body
          };
        });

  const allReleaseNotes = releaseNotes.map((data) => {
        const { slug, data: { title, pubDate, description } } = data;
        return {
          title: title,
          date: pubDate,
          description: description,
          url: `https://lukealexdavis.co.uk/release-notes/${slug}/`,
          body: data.body
        };
      });

  const allColls = [].concat(
    posts, allLists, allMlogs, allMorsels, allRecortes, allReleaseNotes
    ).sort((a, b) => b.date - a.date);
  
  return new Response(JSON.stringify({ allColls })
  )
}

