// Static
						const frontmatter = {"title":"What is blackness?","published":true,"date":"18 Feb 2019","layout":"../../layouts/BlogPost.astro","tags":"black"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/blackness.md";
						const url = "/post/blackness";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b4; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
