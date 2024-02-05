import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string().optional(),
		ref: z.array(z.string()).optional(),
	})
});

const intro = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string()
	})
});

export const collections = { 
	blog,
	intro
};
