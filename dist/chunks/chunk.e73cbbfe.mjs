// Static
						const frontmatter = {"title":"2017 Needs Brevity And Nuance","published":true,"date":"1 Jan 2017","layout":"../../layouts/BlogPost.astro","tags":"life"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/2017-needs-brevity-nuance.md";
						const url = "/post/2017-needs-brevity-nuance";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.N; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
