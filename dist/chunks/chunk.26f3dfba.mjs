// Static
						const frontmatter = {"title":"Failure","published":true,"date":"21 Dec 2020","layout":"../../layouts/BlogPost.astro","description":"Before we ask people what they think success looks like, maybe we should ask what failure looks like.","tags":"failure"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/failure.md";
						const url = "/post/failure";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.ba; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
