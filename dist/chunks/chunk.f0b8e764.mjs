// Static
						const frontmatter = {"title":"What's the obsession with folding phone?","date":"25 May 2020","layout":"../../layouts/BlogPost.astro","tags":"phones"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/whats-the-obsession-with-folding-phone.md";
						const url = "/post/whats-the-obsession-with-folding-phone";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.i; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
