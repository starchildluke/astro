// Static
						const frontmatter = {"title":"Somebody* on life learning","published":true,"date":"14 July 2020","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/somebody-on-life-learning.md";
						const url = "/post/somebody-on-life-learning";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.R; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
