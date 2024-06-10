import { getCollection } from 'astro:content';

export async function GET({params, request}) {
  const blogPosts = await getCollection('posts');
  
  const posts = blogPosts.map((data) => {
      const { data: { title } } = data;
      return {
        title
      };
    });
  
  return new Response(JSON.stringify({ posts })
  )
}

