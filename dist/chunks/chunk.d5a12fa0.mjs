// Static
						const frontmatter = {"title":"Release Notes #7","published":true,"date":"30 Apr 2022","layout":"../../../layouts/BlogPost.astro"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/release-notes/release-notes-7.md";
						const url = "/post/release-notes/release-notes-7";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aS; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
