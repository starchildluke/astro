// Static
						const frontmatter = {"title":"Musical Inspirations","date":"1 Mar 2017","layout":"../../layouts/BlogPost.astro","tags":["music","inspiration"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/musical-inspirations.md";
						const url = "/post/musical-inspirations";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a7; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
