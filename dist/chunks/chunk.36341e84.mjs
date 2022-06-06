// Static
						const frontmatter = {"title":"The Colour Of Pi","published":true,"date":"3 Nov 2014","layout":"../../layouts/BlogPost.astro","tags":"maths"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/the-colour-of-pi.md";
						const url = "/post/the-colour-of-pi";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.at; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
