// Static
						const frontmatter = {"title":"How much do my blogs cost?","published":true,"date":"24 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"blogging"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/how-much-do-my-blogs-cost.md";
						const url = "/post/how-much-do-my-blogs-cost";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.P; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
