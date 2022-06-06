// Static
						const frontmatter = {"title":"Beyond tired: Part 4","date":"12 July 2021","layout":"../../layouts/BlogPost.astro","tags":["beyond tired","racism"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/beyond-tired-4.md";
						const url = "/post/beyond-tired-4";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aD; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
