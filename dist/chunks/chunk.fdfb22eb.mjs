// Static
						const frontmatter = {"title":"Keep writing anyway","published":true,"date":"3 Feb 2022","layout":"../../layouts/BlogPost.astro","tags":"blogging"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/keep-writing-anyway.md";
						const url = "/post/keep-writing-anyway";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aa; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
