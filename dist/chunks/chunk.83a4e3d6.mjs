// Static
						const frontmatter = {"title":"Last Name Jazz, First Name Hugh [Playlist]","date":"18 May 2017","layout":"../../layouts/BlogPost.astro","tags":["jazz","music"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/last-name-jazz-first-name-hugh.md";
						const url = "/post/last-name-jazz-first-name-hugh";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.w; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
