// Static
						const frontmatter = {"title":"Public health","published":true,"date":"16 Nov 2021","layout":"../../layouts/BlogPost.astro","tags":null};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/public-health.md";
						const url = "/post/public-health";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aL; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
