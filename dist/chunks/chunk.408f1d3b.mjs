// Static
						const frontmatter = {"title":"32","published":true,"date":"25 Nov 2021","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/32.md";
						const url = "/post/32";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.bi; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
