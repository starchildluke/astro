// Static
						const frontmatter = {"title":"Chocolate fudge cake recipe","published":true,"date":"5 July 2010","layout":"../../layouts/BlogPost.astro","tags":"recipes"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/chocolate-fudge-cake-recipe.md";
						const url = "/post/chocolate-fudge-cake-recipe";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.G; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
