// Static
						const frontmatter = {"title":"Boats, storms, and rockets","published":true,"date":"21 July 2021","layout":"../../layouts/BlogPost.astro","tags":"COVID-19 life"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/boats-storms-rockets.md";
						const url = "/post/boats-storms-rockets";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a5; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
