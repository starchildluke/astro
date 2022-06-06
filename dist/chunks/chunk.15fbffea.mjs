// Static
						const frontmatter = {"title":"Night off","published":true,"date":"8 Mar 2021","layout":"../../layouts/BlogPost.astro","tags":"women"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/night-off.md";
						const url = "/post/night-off";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b5; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
