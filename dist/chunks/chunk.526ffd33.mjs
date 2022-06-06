// Static
						const frontmatter = {"title":"My Week In Lisbon","published":true,"date":"3 Dec 2017","layout":"../../layouts/BlogPost.astro","tags":["me","lisbon"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-week-in-lisbon.md";
						const url = "/post/my-week-in-lisbon";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ao; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
