// Static
						const frontmatter = {"title":"Give The Drummer Sum: J Dilla’s Influence on the Modern Drummer","published":true,"date":"11 Dec 2020","layout":"../../layouts/BlogPost.astro","description":"J Dilla was mean on the MPC but his live drumming had influences on a number of his peers who have since helped carry his legacy on.","tags":["music","writing","J Dilla"]};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/j-dilla-influence-modern-drummer.md";
						const url = "/post/j-dilla-influence-modern-drummer";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.r; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
