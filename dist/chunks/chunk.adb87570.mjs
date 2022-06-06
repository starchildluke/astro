// Static
						const frontmatter = {"title":"Beyond tired","published":true,"date":"30 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"beyond tired"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/beyond-tired.md";
						const url = "/post/beyond-tired";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aU; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
