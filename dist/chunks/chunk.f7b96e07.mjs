// Static
						const frontmatter = {"title":"Saddam Hussein had a Bacon number of 3","date":"14 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":["Saddam Hussein","Kevin Bacon"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/saddam-hussein-bacon-number-3.md";
						const url = "/post/saddam-hussein-bacon-number-3";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.z; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
