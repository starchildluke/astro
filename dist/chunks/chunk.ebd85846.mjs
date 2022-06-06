// Static
						const frontmatter = {"title":"24 Hour Virus","published":true,"date":"19 Jan 2020","layout":"../../layouts/BlogPost.astro","tags":["illness","life"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/24-hour-virus.md";
						const url = "/post/24-hour-virus";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aJ; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
