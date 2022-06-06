// Static
						const frontmatter = {"title":"To Be Childlike And Not Childish","date":"4 Jun 2017","layout":"../../layouts/BlogPost.astro","tags":"life"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/to-be-childlike-and-not-childish.md";
						const url = "/post/to-be-childlike-and-not-childish";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.t; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
