// Static
						const frontmatter = {"title":"My Albums Of The Year List: 2016","date":"1 Feb 2017","layout":"../../layouts/BlogPost.astro","tags":"aoty"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/aoty-2016.md";
						const url = "/post/aoty-2016";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b2; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
