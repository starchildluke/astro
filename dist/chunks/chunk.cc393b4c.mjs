// Static
						const frontmatter = {"title":"They don't see us as human","published":true,"date":"22 Apr 2021","layout":"../../layouts/BlogPost.astro","tags":"life"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/they-dont-see-us-as-human.md";
						const url = "/post/they-dont-see-us-as-human";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.S; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
