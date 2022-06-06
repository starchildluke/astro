// Static
						const frontmatter = {"title":"Blogging gratitude","published":true,"date":"8 Nov 2021","layout":"../../layouts/BlogPost.astro","tags":"blogging"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/blogging-gratitude.md";
						const url = "/post/blogging-gratitude";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.af; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
