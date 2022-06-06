// Static
						const frontmatter = {"title":"12 Things I Learnt In My 2nd Year As A Professional SEO","date":"4 Mar 2021","description":"I've been a SEO for 2 years now. But what more have I learnt? I wrote a list of 12 things I've picked up over that period.","layout":"../../layouts/BlogPost.astro","tags":"SEO"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/second-year-professional-seo.md";
						const url = "/post/second-year-professional-seo";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.C; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
