// Static
						const frontmatter = {"title":"Inspiring Creatives For 2017","date":"4 Jan 2017","layout":"../../layouts/BlogPost.astro","tags":"creativity"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/10-inspiring-creatives-2017.md";
						const url = "/post/10-inspiring-creatives-2017";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.E; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
