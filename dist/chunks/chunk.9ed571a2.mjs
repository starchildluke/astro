// Static
						const frontmatter = {"title":"The Numbers Game: Roger Federer","published":true,"date":"10 July 2021","layout":"../../layouts/BlogPost.astro","tags":["Roger Federer","tennis","lists"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/roger-federer-numbers-game.md";
						const url = "/post/roger-federer-numbers-game";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.L; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
