// Static
						const frontmatter = {"title":"We talk, work, and think different thanks to the Web","published":true,"date":"13 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":["the web","halt and catch fire"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/talk-work-think-different-thanks-web.md";
						const url = "/post/talk-work-think-different-thanks-web";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.l; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
