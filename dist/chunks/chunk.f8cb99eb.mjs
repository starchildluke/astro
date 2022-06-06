// Static
						const frontmatter = {"title":"What are your most used apps?","published":true,"date":"18 Dec 2021","layout":"../../layouts/BlogPost.astro"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/what-are-your-most-used-apps.md";
						const url = "/post/what-are-your-most-used-apps";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.D; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
