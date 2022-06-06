// Static
						const frontmatter = {"title":"Videos I've been watching to keep me going","published":true,"date":"5 May 2021","layout":"../../layouts/BlogPost.astro","tags":"video"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/videos-ive-been-watching-to-keep-me-going.md";
						const url = "/post/videos-ive-been-watching-to-keep-me-going";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.f; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
