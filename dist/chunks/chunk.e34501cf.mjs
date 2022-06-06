// Static
						const frontmatter = {"title":"Proust Questionnaire","published":true,"date":"2 Sept 2012","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/proust-questionnaire.md";
						const url = "/post/proust-questionnaire";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a8; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
