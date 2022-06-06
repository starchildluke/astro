// Static
						const frontmatter = {"title":"Eight","published":true,"date":"15 Feb 2019","layout":"../../layouts/BlogPost.astro","tags":"life"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/eight.md";
						const url = "/post/eight";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.bf; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
