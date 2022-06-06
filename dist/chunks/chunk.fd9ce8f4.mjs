// Static
						const frontmatter = {"title":"Blogs and hats","published":true,"date":"24 Feb 2020","layout":"../../layouts/BlogPost.astro","tags":"blogging"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/blogs-and-hats.md";
						const url = "/post/blogs-and-hats";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aG; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
