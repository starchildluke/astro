// Static
						const frontmatter = {"title":"Artistic Inspirations","published":true,"date":"24 Sept 2017","layout":"../../layouts/BlogPost.astro","tags":["art","inspiration"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/artistic-inspirations.md";
						const url = "/post/artistic-inspirations";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a2; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
