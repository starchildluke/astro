// Static
						const frontmatter = {"title":"4 Creative Article Ideas - Inspired By \"The Read\"","published":true,"date":"14 Apr 2018","layout":"../../layouts/BlogPost.astro","tags":"black"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/4-article-ideas-the-read.md";
						const url = "/post/4-article-ideas-the-read";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.T; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
