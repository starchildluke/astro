// Static
						const frontmatter = {"title":"Kamala Harris is still a cop","date":"13 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":["USA"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/kamala-harris-is-still-a-cop.md";
						const url = "/post/kamala-harris-is-still-a-cop";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.A; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
