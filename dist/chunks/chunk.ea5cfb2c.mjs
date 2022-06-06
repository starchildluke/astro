// Static
						const frontmatter = {"title":"My Albums Of The Year List: 2021","date":"1 Jan 2022","layout":"../../layouts/BlogPost.astro","tags":"aoty"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/aoty-2021.md";
						const url = "/post/aoty-2021";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b3; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
