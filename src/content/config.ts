import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		published: z.boolean().optional(),
		tags: z.array(z.string()),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		layout: z.string()
	})
});

const music = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		linerNotes: z.string(),
		image: z.string().optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		layout: z.string(),
		url: z.string().url().optional()
	})
});

const mlog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		layout: z.string()
	})
});

const recortes = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		published: z.boolean().optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val).toLocaleDateString('en-gb', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		})),
		layout: z.string(),
		tags: z.array(z.string()).optional()
	}),
});

const releaseNotes = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		published: z.boolean().optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		layout: z.string()
	}),
});

const morsels = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		published: z.boolean().optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		layout: z.string()
	}),
});

const lists = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		published: z.boolean().optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		layout: z.string(),
		tags: z.array(z.string()).optional()
	}),
});

export const collections = { 'posts': posts, 'recortes': recortes, 'release-notes': releaseNotes, 'morsels': morsels, 'lists': lists, 'mlog': mlog, 'music': music };
