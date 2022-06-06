// Static
						const frontmatter = {"title":"Sustained grief","published":true,"date":"28 Feb 2021","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/sustained-grief.md";
						const url = "/post/sustained-grief";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aA; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
