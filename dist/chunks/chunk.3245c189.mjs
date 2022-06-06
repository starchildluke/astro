// Static
						const frontmatter = {"title":"Banana rum cake recipe","published":true,"date":"5 July 2010","layout":"../../layouts/BlogPost.astro","tags":"recipes"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/banana-rum-cake-recipe.md";
						const url = "/post/banana-rum-cake-recipe";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.Z; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
