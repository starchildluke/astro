// Static
						const frontmatter = {"title":"Release Notes #3","published":true,"date":"30 Sept 2021","layout":"../../../layouts/BlogPost.astro"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/release-notes/release-notes-3.md";
						const url = "/post/release-notes/release-notes-3";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aO; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
