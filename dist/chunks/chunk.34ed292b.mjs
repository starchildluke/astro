// Static
						const frontmatter = {"title":"Morsel #2 - The YouTube Thumbnail Extractor","published":true,"date":"01 May 2022","layout":"../../../layouts/BlogPost.astro"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/morsels/morsel-2.md";
						const url = "/post/morsels/morsel-2";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.bc; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
