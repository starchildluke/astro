// Static
						const frontmatter = {"title":"Unusual side effect","published":true,"date":"26 Mar 2021","layout":"../../layouts/BlogPost.astro","tags":["phones"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/unusual-side-effect.md";
						const url = "/post/unusual-side-effect";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ad; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
