import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		published: z.boolean().optional(),
		tags: z.array(z.string()),
		pubDate: z.string()
	})
});

const music = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/music" }),
	schema: z.object({
		title: z.string(),
		linerNotes: z.string(),
		image: z.string().optional(),
		pubDate: z.string(),
		url: z.string().url().optional()
	})
});

const mlog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/mlog" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
		pubDate: z.string()
	})
});

const recortes = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/recortes" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		published: z.boolean().optional(),
		pubDate: z.string(),
		latex: z.boolean().optional(),
		tags: z.array(z.string()).optional()
	}),
});

const releaseNotes = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/release-notes" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		published: z.boolean().optional(),
		pubDate: z.string(),
		tags: z.array(z.string()).optional()
	}),
});

const morsels = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/morsels" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		published: z.boolean().optional(),
		tags: z.array(z.string()).optional(),
		pubDate: z.string()
	}),
});

const lists = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/lists" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		published: z.boolean().optional(),
		pubDate: z.string(),
		tags: z.array(z.string()).optional()
	}),
});

const games = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/games" }),
	schema: z.object({
		name: z.string().optional(),
		developer: z.string().optional(),
		publisher: z.string().optional(),
		genre: z.string().optional(),
		imageURL: z.string().optional(),
		status: z.string().optional(),
		format: z.string().optional(),
		console: z.string().optional(),
		dateBeaten: z.string().or(z.date())
			.transform((val) => new Date(val)).optional()
	}),
});

export const collections = { 'posts': posts, 'recortes': recortes, 'release-notes': releaseNotes, 'morsels': morsels, 'lists': lists, 'mlog': mlog, 'music': music, 'games': games };
