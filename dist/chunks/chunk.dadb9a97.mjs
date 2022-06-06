// Static
						const frontmatter = {"title":"Use Prince's purple for a:visited in your CSS","published":true,"date":"11 Mar 2020","layout":"../../layouts/BlogPost.astro","tags":["the web","css","Prince"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/prince-purple-a-visited-css.md";
						const url = "/post/prince-purple-a-visited-css";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.I; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
