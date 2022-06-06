// Static
						const frontmatter = {"title":"Everyone's a writer","published":true,"date":"10 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"writing"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/everyones-a-writer.md";
						const url = "/post/everyones-a-writer";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ag; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
