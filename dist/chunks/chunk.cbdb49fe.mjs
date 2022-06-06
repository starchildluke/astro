// Static
						const frontmatter = {"title":"Beyond tired: Part 2","published":true,"date":"1 Sept 2020","layout":"../../layouts/BlogPost.astro","tags":["beyond tired","racism"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/beyond-tired-part-2.md";
						const url = "/post/beyond-tired-part-2";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a9; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
