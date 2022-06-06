// Static
						const frontmatter = {"title":"Trolls and pills","published":true,"layout":"../../layouts/BlogPost.astro","date":"8 Sept 2020","tags":"the web"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/trolls-pills.md";
						const url = "/post/trolls-pills";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aX; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
