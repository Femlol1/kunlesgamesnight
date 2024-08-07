import { z } from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(100, 'Title must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters').max(2000, 'Description must be at less than 2000 characters'),
    location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be at less than 400 characters,'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url(),

  })