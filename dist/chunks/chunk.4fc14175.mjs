// Static
						const frontmatter = {"title":"Headless chickens","date":"16 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"COVID-19"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/headless-chickens.md";
						const url = "/post/headless-chickens";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ak; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
