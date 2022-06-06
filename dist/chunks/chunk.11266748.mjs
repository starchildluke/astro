// Static
						const frontmatter = {"title":"1 vs 10,000","published":true,"date":"3 May 2020","layout":"../../layouts/BlogPost.astro","tags":"blogging"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/1-vs-10-000.md";
						const url = "/post/1-vs-10-000";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aY; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
