// Static
						const frontmatter = {"title":"This is my content creation flow","date":"19 Mar 2020","layout":"../../layouts/BlogPost.astro","tags":["the web","blogging"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/this-is-my-content-creation-flow.md";
						const url = "/post/this-is-my-content-creation-flow";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.s; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
