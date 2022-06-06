// Static
						const frontmatter = {"title":"My Favourite Albums of 2020","date":"31 Dec 2020","layout":"../../layouts/BlogPost.astro","tags":"aoty"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/fave-albums-2020.md";
						const url = "/post/fave-albums-2020";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ar; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
