// Static
						const frontmatter = {"title":"I'm not really one for speeches so I'll just say 'thanks'","published":true,"date":"9 Aug 2020","layout":"../../layouts/BlogPost.astro","tags":["racism","halt and catch fire"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/speeches-thanks.md";
						const url = "/post/speeches-thanks";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.az; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
