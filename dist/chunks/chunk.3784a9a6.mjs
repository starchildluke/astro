// Static
						const frontmatter = {"title":"Get a website","published":true,"date":"4 Sept 2021","layout":"../../layouts/BlogPost.astro","tags":"the web"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/get-a-website.md";
						const url = "/post/get-a-website";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aK; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
