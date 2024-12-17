import {z} from "zod";

export const dateResponseSchema = z.object({
  date: z.string(),
  foodPlaceGoogleMapsId: z.string(),
  activityPlaceGoogleMapsId: z.string(),
  flower: z.string(),
})

export type DateResponseType = z.infer<typeof dateResponseSchema>
