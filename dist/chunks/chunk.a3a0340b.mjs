// Static
						const frontmatter = {"title":"1001 Movies You Must See Before You Die (2008 edition)","published":true,"date":"21 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"film"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/1001-movies-you-must-see-before-you-die-2008-edition.md";
						const url = "/post/1001-movies-you-must-see-before-you-die-2008-edition";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
