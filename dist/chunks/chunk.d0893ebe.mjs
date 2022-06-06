// Static
						const frontmatter = {"title":"The Last 5 Games of the 2017 Australian Open","published":true,"date":"12 Mar 2018","layout":"../../layouts/BlogPost.astro","string":"gmpLSW47MPQ","tags":["Roger Federer","tennis"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/the-last-5-games-of-the-2017-australian-open.md";
						const url = "/post/the-last-5-games-of-the-2017-australian-open";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.c; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
