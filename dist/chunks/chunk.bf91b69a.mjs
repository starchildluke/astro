// Static
						const frontmatter = {"title":"My Review of 2017","published":true,"date":"30 Dec 2017","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-review-of-2017.md";
						const url = "/post/my-review-of-2017";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.an; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
