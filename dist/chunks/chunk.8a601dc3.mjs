// Static
						const frontmatter = {"title":"Halt and Make Fire","date":"10 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"the web"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/halt-and-make-fire.md";
						const url = "/post/halt-and-make-fire";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ah; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
