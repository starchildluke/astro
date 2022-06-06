// Static
						const frontmatter = {"title":"Back on Twitter","published":true,"date":"28 Aug 2021","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/back-on-twitter.md";
						const url = "/post/back-on-twitter";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.av; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
