// Static
						const frontmatter = {"title":"Morsel #1 - The Tag Suggester","published":true,"date":"15 Apr 2022","layout":"../../../layouts/BlogPost.astro"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/morsels/morsel-1.md";
						const url = "/post/morsels/morsel-1";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.bb; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
