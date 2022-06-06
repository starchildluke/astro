// Static
						const frontmatter = {"title":"The Exclusive Website","published":true,"date":"27 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"the web"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/the-exclusive-website.md";
						const url = "/post/the-exclusive-website";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a4; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
