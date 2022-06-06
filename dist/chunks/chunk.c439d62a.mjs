// Static
						const frontmatter = {"title":"You rocked my world, you know you did…","published":true,"date":"31 May 2011","layout":"../../layouts/BlogPost.astro","tags":["music","writing"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/you-rocked-my-world-you-know-you-did.md";
						const url = "/post/you-rocked-my-world-you-know-you-did";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.n; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
