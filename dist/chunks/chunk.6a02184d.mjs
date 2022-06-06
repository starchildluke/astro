// Static
						const frontmatter = {"title":"The meaning of life","published":true,"date":"27 Jan 2021","layout":"../../layouts/BlogPost.astro","tags":"life"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/the-meaning-of-life.md";
						const url = "/post/the-meaning-of-life";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ac; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
