// Static
						const frontmatter = {"title":"Release Notes #4","published":true,"date":"20 Mar 2022","layout":"../../../layouts/BlogPost.astro"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/release-notes/release-notes-4.md";
						const url = "/post/release-notes/release-notes-4";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aP; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
