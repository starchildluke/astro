// Static
						const frontmatter = {"title":"My Album of the Year List: 2014","published":true,"date":"9 Feb 2015","layout":"../../layouts/BlogPost.astro","tags":["music","aoty"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-album-of-the-year-list-2014.md";
						const url = "/post/my-album-of-the-year-list-2014";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.y; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
