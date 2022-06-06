// Static
						const frontmatter = {"title":"Why do rich people make poor decisions?","published":true,"date":"5 Mar 2020","layout":"../../layouts/BlogPost.astro","tags":"money"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/why-do-rich-people-make-poor-decisions.md";
						const url = "/post/why-do-rich-people-make-poor-decisions";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.j; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
