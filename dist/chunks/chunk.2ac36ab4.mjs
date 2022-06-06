// Static
						const frontmatter = {"title":"Beyond tired: Part 5","date":"15 Oct 2021","layout":"../../layouts/BlogPost.astro","tags":["beyond tired"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/beyond-tired-5.md";
						const url = "/post/beyond-tired-5";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aE; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
