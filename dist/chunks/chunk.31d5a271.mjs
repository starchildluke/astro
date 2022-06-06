// Static
						const frontmatter = {"title":"Things that aren&#39;t in the U.S. Constitution","published":true,"date":"24 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"USA"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/not-in-the-constitution.md";
						const url = "/post/not-in-the-constitution";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.Y; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
