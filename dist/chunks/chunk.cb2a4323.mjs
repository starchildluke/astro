// Static
						const frontmatter = {"title":"I am...","published":true,"date":"28 Jul 2017","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/i-am.md";
						const url = "/post/i-am";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.bh; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
