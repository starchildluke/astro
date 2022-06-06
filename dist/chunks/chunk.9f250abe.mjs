// Static
						const frontmatter = {"title":"Link dump #1","published":true,"date":"24 Mar 2021","layout":"../../layouts/BlogPost.astro","tags":["link dump"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/link-dump-1.md";
						const url = "/post/link-dump-1";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a_; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
