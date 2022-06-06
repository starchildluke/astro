// Static
						const frontmatter = {"title":"Meta-meta-blogging","published":true,"date":"23 Jan 2021","layout":"../../layouts/BlogPost.astro","tags":"blogging"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/meta-meta-blogging.md";
						const url = "/post/meta-meta-blogging";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aj; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
