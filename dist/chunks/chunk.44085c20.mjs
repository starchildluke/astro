// Static
						const frontmatter = {"title":"My Albums of the Year: 2011","published":true,"date":"31 Dec 2011","layout":"../../layouts/BlogPost.astro","tags":"aoty"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-favourite-albums-of-the-year-2011.md";
						const url = "/post/my-favourite-albums-of-the-year-2011";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.k; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
