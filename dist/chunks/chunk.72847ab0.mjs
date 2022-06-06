// Static
						const frontmatter = {"title":"The Problem With Google It","published":true,"date":"9 Jan 2016","layout":"../../layouts/BlogPost.astro","tags":"knowledge"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/the-problem-with-google-it.md";
						const url = "/post/the-problem-with-google-it";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.M; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
