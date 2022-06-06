// Static
						const frontmatter = {"title":"My Record Store Day","published":true,"date":"20 Apr 2013","layout":"../../layouts/BlogPost.astro","tags":"music"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-record-store-day.md";
						const url = "/post/my-record-store-day";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ab; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
