// Static
						const frontmatter = {"title":"COVID-19","published":true,"date":"14 Mar 2020","layout":"../../layouts/BlogPost.astro","tags":"COVID-19"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/covid-19.md";
						const url = "/post/covid-19";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b7; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
