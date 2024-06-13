import { z } from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(100, 'Aye mi o, How long is the Title Smh'),
    description: z.string().min(3, 'Description must be at least 3 characters').max(500, 'Aye mi o, How long is this Story Smh, What is it , a novel!'),
    location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Aye mi o,'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url(),

  })