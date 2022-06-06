// Static
						const frontmatter = {"title":"My 49 Favourite Albums of 2012","published":true,"date":"2 Jan 2013","layout":"../../layouts/BlogPost.astro","tags":["aoty","music"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-50-favourite-albums-of-2012.md";
						const url = "/post/my-50-favourite-albums-of-2012";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.x; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
