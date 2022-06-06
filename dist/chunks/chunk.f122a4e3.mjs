// Static
						const frontmatter = {"title":"1 Year Later","published":true,"date":"27 May 2021","layout":"../../layouts/BlogPost.astro","slug":"/posts/1-year-later","tags":"black"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/1-year-later.md";
						const url = "/post/1-year-later";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aT; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
