// Static
						const frontmatter = {"title":"Wander in Porto","published":true,"date":"24 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"portugal"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/wander-in-porto.md";
						const url = "/post/wander-in-porto";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aB; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
