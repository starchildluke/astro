// Static
						const frontmatter = {"title":"Proust Questionnaire - 2020","published":true,"date":"6 Sept 2020","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/proust-questionnaire-2020.md";
						const url = "/post/proust-questionnaire-2020";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.Q; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
