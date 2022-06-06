// Static
						const frontmatter = {"title":"We Need To Use The Lang Attribute More","published":true,"date":"14 Jun 2018","layout":"../../layouts/BlogPost.astro","tags":["the web","css"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/we-need-to-use-the-lang-attribute-more.md";
						const url = "/post/we-need-to-use-the-lang-attribute-more";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.h; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
