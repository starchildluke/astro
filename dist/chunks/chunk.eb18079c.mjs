// Static
						const frontmatter = {"title":"Ceci n’est pas une blog","published":true,"date":"7 Jun 2011","layout":"../../layouts/BlogPost.astro","tags":"blogging"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/ceci-nest-pas-un-blog.md";
						const url = "/post/ceci-nest-pas-un-blog";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a3; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
