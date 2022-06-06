// Static
						const frontmatter = {"title":"New normal","published":true,"date":"6 Sept 2021","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/new-normal.md";
						const url = "/post/new-normal";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a$; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
