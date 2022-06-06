// Static
						const frontmatter = {"title":"Gains","published":true,"date":"11 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"illness"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/gains.md";
						const url = "/post/gains";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.bg; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
