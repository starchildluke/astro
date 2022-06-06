// Static
						const frontmatter = {"title":"RIP MJ - 8 Years On","date":"25 Jun 2017","layout":"../../layouts/BlogPost.astro","tags":["music","michael jackson"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/rip-mj-8-years-on.md";
						const url = "/post/rip-mj-8-years-on";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ap; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
