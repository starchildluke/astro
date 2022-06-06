// Static
						const frontmatter = {"title":"Morsel #4 - bulk upload to Internet Archive with waybackpy and advertools","published":true,"date":"26 May 2022","layout":"../../../layouts/BlogPost.astro"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/morsels/morsel-4.md";
						const url = "/post/morsels/morsel-4";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.be; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
