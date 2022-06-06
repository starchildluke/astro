// Static
						const frontmatter = {"title":"Have you heard of codeswitching?","date":"15 Feb 2020","layout":"../../layouts/BlogPost.astro","tags":["codeswitching","life"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/have-you-heard-of-codeswitching.md";
						const url = "/post/have-you-heard-of-codeswitching";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.u; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
