// Static
						const frontmatter = {"title":"Beached","published":true,"date":"21 July 2021","layout":"../../layouts/BlogPost.astro","tags":"COVID-19"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/beached.md";
						const url = "/post/beached";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b8; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
