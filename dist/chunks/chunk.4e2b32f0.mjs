// Static
						const frontmatter = {"title":"BOOM! Tetris for Jeff","published":true,"date":"23 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":"gaming"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/boom-tetris-for-jeff.md";
						const url = "/post/boom-tetris-for-jeff";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a6; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
