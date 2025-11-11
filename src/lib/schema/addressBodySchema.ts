import {z} from "zod";

const ADDRESS_CATEGORIES = ["restaurant", "activity"] as const;
export type AddressCategories = typeof ADDRESS_CATEGORIES[number];


export const addressRetrieveSchema = z.object({
  addressId: z.string().uuid(),
})

export const addressBodySchema = z.object({
  title: z.string(),
  category: z.enum(ADDRESS_CATEGORIES),
  description: z.string(),
  street: z.string(),
  mapsUrl: z.string().url(),
})

export const addressSchema = addressBodySchema.merge(z.object({
  id: z.string().uuid(),
}))

export type Address = z.infer<typeof addressSchema>
