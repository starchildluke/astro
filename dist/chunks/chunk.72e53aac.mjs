// Static
						const frontmatter = {"title":"Só cansado","date":"17 Feb 2020","layout":"../../layouts/BlogPost.astro","tags":"twitter"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/so-cansado.md";
						const url = "/post/so-cansado";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b0; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
