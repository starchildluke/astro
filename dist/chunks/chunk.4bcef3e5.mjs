// Static
						const frontmatter = {"title":"My Five Favourite Video Games of All Time","published":true,"date":"5 Aug 2017","layout":"../../layouts/BlogPost.astro","tags":["gaming","lists"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-five-favourite-video-games-of-all-time.md";
						const url = "/post/my-five-favourite-video-games-of-all-time";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.e; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
