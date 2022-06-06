// Static
						const frontmatter = {"title":"Hayfever and Histamines","date":"26 Jun 2017","layout":"../../layouts/BlogPost.astro","tags":["hayfever","illness"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/hayfever-and-histamines.md";
						const url = "/post/hayfever-and-histamines";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.X; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
