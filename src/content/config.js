import {defineCollection, z} from "astro:content";

const newsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),         // allows "2025-11-05" strings, coerced to Date
        author: z.string().optional(),
        description: z.string().min(10),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false)
    })
})

export const collections = {
    news: newsCollection
};
