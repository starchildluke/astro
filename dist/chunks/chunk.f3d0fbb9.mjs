// Static
						const frontmatter = {"title":"Today is a special day","published":true,"date":"29 Jan 2022","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/today-is-a-special-day.md";
						const url = "/post/today-is-a-special-day";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a1; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
