import {z} from "zod";

export const dateRequestSchema = z.object({
  date: z.string(),
  restaurant: z.string(),
  restaurantMapsUrl: z.string(),
  activity: z.string(),
  activityMapsUrl: z.string(),
  flower: z.string(),
})

export type DateRequestType = z.infer<typeof dateRequestSchema>
