// Static
						const frontmatter = {"title":"Cherish","published":true,"date":"2 Aug 2021","layout":"../../layouts/BlogPost.astro","tags":null};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/cherish.md";
						const url = "/post/cherish";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b9; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
