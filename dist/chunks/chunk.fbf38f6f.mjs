// Static
						const frontmatter = {"title":"Khruangbin & Federer","published":true,"date":"12 Jun 2018","layout":"../../layouts/BlogPost.astro","tags":["Roger Federer","Khruangbin","music","tennis"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/khruangbin-and-federer.md";
						const url = "/post/khruangbin-and-federer";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a0; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
