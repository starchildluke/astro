// Static
						const frontmatter = {"title":"Blogging as self-expression","published":true,"date":"17 May 2021","layout":"../../layouts/BlogPost.astro","slug":"/posts/blogging-as-self-expression","tags":"blogging"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/blogging-as-self-expression.md";
						const url = "/post/blogging-as-self-expression";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.F; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
