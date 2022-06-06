// Static
						const frontmatter = {"title":"If Nobody Listened, Would I Still Make Music?","date":"18 Dec 2016","layout":"../../layouts/BlogPost.astro","tags":["music","me"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/if-nobody-listened.md";
						const url = "/post/if-nobody-listened";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ai; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
