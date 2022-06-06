// Static
						const frontmatter = {"title":"Last Donut Of The Night: When Federer and Dilla United For One Weekend","date":"17 Dec 2016","layout":"../../layouts/BlogPost.astro"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/last-donut-of-the-night-when-federer-dilla-united-for-1-weekend.md";
						const url = "/post/last-donut-of-the-night-when-federer-dilla-united-for-1-weekend";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n._; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
