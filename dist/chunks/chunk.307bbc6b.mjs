// Static
						const frontmatter = {"title":"If I were a rich man #1","date":"22 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"keith haring"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/if-i-were-a-rich-man-1.md";
						const url = "/post/if-i-were-a-rich-man-1";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.$; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
