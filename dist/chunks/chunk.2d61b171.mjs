// Static
						const frontmatter = {"title":"Where there's gold","date":"15 Apr 2021","layout":"../../layouts/BlogPost.astro","slug":"/posts/where-theres-gold","tags":["music","video"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/where-theres-gold.md";
						const url = "/post/where-theres-gold";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aq; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
