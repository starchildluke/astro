// Static
						const frontmatter = {"title":"You don't have to learn Python to work here but it might help","description":"Python. It's a word that either strikes fear into the hearts of SEOs or ignites a fire in their bellies. I can tell you: I’ve felt both.","published":true,"date":"9 Mar 2022","layout":"../../layouts/BlogPost.astro","tags":"Python"};
						const file = "/Users/lukedavis/GitHub/astro/src/pages/post/you-dont-have-to-learn-python-but-it-might-help.md";
						const url = "/post/you-dont-have-to-learn-python-but-it-might-help";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
