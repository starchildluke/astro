// Static
						const frontmatter = {"title":"19 Things I Learnt In My First Year As A Professional SEO","date":"11 Feb 2020","description":"I've been a SEO for a year now. But what have I learnt? I wrote a list of 19 things I've picked up over that period.","layout":"../../layouts/BlogPost.astro","tags":"SEO"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/first-year-professional-seo.md";
						const url = "/post/first-year-professional-seo";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.H; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
