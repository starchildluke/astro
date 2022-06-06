// Static
						const frontmatter = {"title":"Connections","published":true,"date":"9 Dec 2021","layout":"../../layouts/BlogPost.astro","tags":null};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/connections.md";
						const url = "/post/connections";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aZ; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
