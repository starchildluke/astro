// Static
						const frontmatter = {"title":"Bad Boys For Years","date":"22 Jan 2020","layout":"../../layouts/BlogPost.astro","tags":"film"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/bad-boys-for-years.md";
						const url = "/post/bad-boys-for-years";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ae; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
