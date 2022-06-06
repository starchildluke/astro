// Static
						const frontmatter = {"title":"Black survival is Black excellence","date":"1 Jun 2020","layout":"../../layouts/BlogPost.astro","tags":"black"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/black-survival-is-black-excellence.md";
						const url = "/post/black-survival-is-black-excellence";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.p; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
