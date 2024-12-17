"use client";

import {z} from "zod";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";

export const cardSchema = z.object({
  title: z.string(),
  address: z.object({
    street: z.string(),
    location: z.string(),
    district: z.string(),
  }),
  pictureUrl: z.string(),
  rating: z.number(),
  googleMapsId: z.string(),
  googleMapsUrl: z.string(),
})

export type CardDataType = z.infer<typeof cardSchema>

export function GoogleMapsAddressCard({data, redirectUrl, placeKeyQuery}: Readonly<{
  data: CardDataType,
  redirectUrl: string,
  placeKeyQuery: string
}>) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onclick = () => {
    const queries: { [key: string]: string } = {}
    for (const key of searchParams.keys()) {
      const data = searchParams.get(key);
      if (data) {
        queries[key] = data;
      }
    }
    queries[placeKeyQuery] = data.googleMapsId;

    const queryParam = new URLSearchParams(queries);
    router.push(`${redirectUrl}?${queryParam}`);
  }

  return (
    <Card className="w-auto border-2">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{`${data.address.street}, ${data.address.district}, ${data.address.location}`}</p>
        <p>noté: {data.rating}</p>
        <div className="items-center space-x-3">
          <Button>
            <Link href={data.googleMapsUrl} target={"_blank"}>Aller sur google maps</Link>
          </Button>
          <Button onClick={onclick}>Je prends celui là !</Button>
        </div>
      </CardContent>
    </Card>
  )
}
