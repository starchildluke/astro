// Static
						const frontmatter = {"title":"My New Obsession Is... Sega","date":"7 Jun 2017","layout":"../../layouts/BlogPost.astro","tags":"sega"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-new-obsession-is-sega.md";
						const url = "/post/my-new-obsession-is-sega";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.W; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
