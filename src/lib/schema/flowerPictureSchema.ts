import {z} from "zod";

export const flowerPictureSchema = z.object({
  src: z.string(),
  title: z.string(),
  description: z.string(),
})

export type FlowerPictureType = z.infer<typeof flowerPictureSchema>
