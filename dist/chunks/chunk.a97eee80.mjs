// Static
						const frontmatter = {"title":"Teams I Look Out For, Post-Man Utd (Updated for 2021)","date":"10 July 2021","layout":"../../layouts/BlogPost.astro","tags":"football"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/teams-i-look-out-for-post-man-utd.md";
						const url = "/post/teams-i-look-out-for-post-man-utd";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.q; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
