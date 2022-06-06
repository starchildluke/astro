// Static
						const frontmatter = {"title":"Visualising @nyt_said_first","published":true,"date":"27 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"words"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/nyt-first-said-visualisation.md";
						const url = "/post/nyt-first-said-visualisation";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.B; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
