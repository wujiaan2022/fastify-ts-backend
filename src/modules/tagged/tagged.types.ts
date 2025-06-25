import { z } from "zod"

export const taggedPostSchema = z.object({
    id: z.number(),
    img_url: z.string().url(),
    caption: z.string(),
    tagged_by: z.string(), // new field
})
