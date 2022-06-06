// Static
						const frontmatter = {"title":"Media interests","published":true,"date":"3 Aug 2021","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/media-interests.md";
						const url = "/post/media-interests";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ay; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
