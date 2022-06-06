// Static
						const frontmatter = {"title":"My Idea Debt","published":true,"date":"1 Feb 2017","description":"Earlier this week, I read about a concept called Idea Debt. It’s when you hold onto ideas without actually putting them into place.","layout":"../../layouts/BlogPost.astro","tags":"me"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/my-idea-debt.md";
						const url = "/post/my-idea-debt";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.aV; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
