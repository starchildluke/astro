// Static
						const frontmatter = {"title":"5 Ways You Can Support Me","date":"16 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/support-me.md";
						const url = "/post/support-me";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b1; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
