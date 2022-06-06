// Static
						const frontmatter = {"title":"My Phone History","published":true,"date":"21 Jun 2018","layout":"../../layouts/BlogPost.astro","tags":["tech","me"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-phone-history.md";
						const url = "/post/my-phone-history";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.as; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
