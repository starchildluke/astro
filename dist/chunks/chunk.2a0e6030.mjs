// Static
						const frontmatter = {"title":"Black Panther and therapy","published":true,"date":"29 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":["film","black panther","mental health","me"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/black-panther-and-therapy.md";
						const url = "/post/black-panther-and-therapy";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.O; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
