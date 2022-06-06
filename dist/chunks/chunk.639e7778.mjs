// Static
						const frontmatter = {"title":"Morsel #3 - a custom font preload fix in WordPress","published":true,"date":"25 May 2022","layout":"../../../layouts/BlogPost.astro"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/morsels/morsel-3.md";
						const url = "/post/morsels/morsel-3";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.bd; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
