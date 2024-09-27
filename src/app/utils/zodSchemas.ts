import {z} from "zod"

export const blogSchema = z.object({
    name: z.string().min(1).max(35),
    description: z.string().min(1).max(140),
    subdirectory: z.string().min(1).max(35),

});

export const PostSchema = z.object({
    title: z.string().min(1).max(100),
    slug: z.string().min(1).max(190),
    smallDescription: z.string().min(1).max(200),
    articleContent: z.string().min(1),
});