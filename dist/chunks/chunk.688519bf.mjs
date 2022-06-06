// Static
						const frontmatter = {"title":"Feeling Guilty For Pursuing Your Passions","published":true,"date":"6 Dec 2017","layout":"../../layouts/BlogPost.astro","tags":["blogging","life"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/feeling-guilty-for-pursuing-your-passions.md";
						const url = "/post/feeling-guilty-for-pursuing-your-passions";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.d; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
