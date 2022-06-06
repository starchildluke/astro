// Static
						const frontmatter = {"title":"I'm Racially Tired","published":true,"date":"28 Apr 2018","layout":"../../layouts/BlogPost.astro","tags":["racism","me"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/im-racially-tired.md";
						const url = "/post/im-racially-tired";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.al; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
