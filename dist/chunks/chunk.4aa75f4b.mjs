// Static
						const frontmatter = {"title":"It's not computer science!","published":true,"date":"14 Dec 2021","layout":"../../layouts/BlogPost.astro","tags":null};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/its-not-computer-science.md";
						const url = "/post/its-not-computer-science";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.V; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
