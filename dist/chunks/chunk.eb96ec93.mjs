// Static
						const frontmatter = {"title":"Black and Tired","date":"21 Jun 2020","layout":"../../layouts/BlogPost.astro","tags":["beyond tired","racism"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/black-and-tired.md";
						const url = "/post/black-and-tired";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aw; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
