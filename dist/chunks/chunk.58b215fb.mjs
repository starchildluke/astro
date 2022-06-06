// Static
						const frontmatter = {"title":"Beyond tired: Part 3","date":"6 Jan 2021","layout":"../../layouts/BlogPost.astro","tags":["beyond tired","COVID-19"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/beyond-tired-3.md";
						const url = "/post/beyond-tired-3";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aC; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
