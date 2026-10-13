import { z } from "zod";

//for creating a new restaurant
// export const RestaurantSchema = z.object({
export const RestaurantSchema = z.object({
    name: z.string().min(1),
    location: z.string().min(1),
    cuisines: z.array(z.string().min(1)),
    // description: z.string(),
    // image: z.string(),
    // phone: z.string(),
})

// for post request
export const RestaurantDetailsSchema = z.object({
    links: z.array(z.object({
        name: z.string().min(1),
        url: z.string().min(1)
    })),
    contact: z.object({
        phone: z.string().min(1),
        email: z.email(),
    })
})

export type Restaurant = z.infer<typeof RestaurantSchema>
export type RestaurantDetails = z.infer<typeof RestaurantDetailsSchema>
