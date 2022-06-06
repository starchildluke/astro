// Static
						const frontmatter = {"title":"The Luke 100","published":true,"date":"12 Dec 2017","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/the-luke-100.md";
						const url = "/post/the-luke-100";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aW; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
