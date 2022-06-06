// Static
						const frontmatter = {"title":"Still Elephant","published":true,"date":"13 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"film"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/still-elephant.md";
						const url = "/post/still-elephant";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aI; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
