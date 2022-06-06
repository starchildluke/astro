// Static
						const frontmatter = {"title":"How To Use Twitter Lists To Reduce Your Following Count","published":true,"date":"25 Nov 2018","layout":"../../layouts/BlogPost.astro","tags":"twitter"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/twitter-lists-reduce-following-count.md";
						const url = "/post/twitter-lists-reduce-following-count";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.m; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
