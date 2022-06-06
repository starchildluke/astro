// Static
						const frontmatter = {"title":"Review: Jamiroquai – Rock Dust Light Star","published":true,"date":"11 Nov 2010","layout":"../../layouts/BlogPost.astro","tags":["music","Jamiroquai","writing"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/jamiroquai-rock-dust-light-star-review.md";
						const url = "/post/jamiroquai-rock-dust-light-star-review";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.g; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
