// Static
						const frontmatter = {"title":"12 Facts I Didn't Know About Pokémon","published":true,"date":"28 Sept 2017","layout":"../../layouts/BlogPost.astro","tags":"pokémon"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/12-facts-i-didnt-know-about-pokemon.md";
						const url = "/post/12-facts-i-didnt-know-about-pokemon";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.o; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
