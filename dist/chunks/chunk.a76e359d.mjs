// Static
						const frontmatter = {"title":"Future job: Web historian","published":true,"date":"20 Feb 2020","layout":"../../layouts/BlogPost.astro","tags":"the web"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/future-job-web-historian.md";
						const url = "/post/future-job-web-historian";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.U; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
