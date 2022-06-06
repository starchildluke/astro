// Static
						const frontmatter = {"title":"Introducing RALTS (Really Awesome Lexicon and Tag Suggester)","published":true,"date":"28 Feb 2022","layout":"../../layouts/BlogPost.astro","tags":"python"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/introducing-ralts.md";
						const url = "/post/introducing-ralts";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.am; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
