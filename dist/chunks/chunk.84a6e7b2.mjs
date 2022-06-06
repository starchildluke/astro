// Static
						const frontmatter = {"title":"Open Offices Are Overrated","published":true,"date":"5 Oct 2017","layout":"../../layouts/BlogPost.astro","tags":"video"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/open-offices-are-overrated.md";
						const url = "/post/open-offices-are-overrated";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.K; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
