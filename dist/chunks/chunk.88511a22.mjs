// Static
						const frontmatter = {"title":"It's binary time!","layout":"../../layouts/BlogPost.astro","date":"3 Dec 2020","tags":"maths"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/its-binary-time.md";
						const url = "/post/its-binary-time";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ax; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
