"use client";

import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";
import {z} from "zod";

import {Address} from "@/lib/schema/addressBodySchema";

import Button from "@/components/buttons/Button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Spinner} from "@/components/ui/spinner";

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

export function GoogleMapsAddressCard({data, redirectUrl, placeKeyQuery}: Readonly<{
  data: Address,
  redirectUrl: string,
  placeKeyQuery: string
}>) {
  const [clicked, setClicked] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const onclick = () => {
    setClicked(true);
    const queries: { [key: string]: string } = {}
    for (const key of searchParams.keys()) {
      const data = searchParams.get(key);
      if (data) {
        queries[key] = data;
      }
    }
    queries[placeKeyQuery] = data.id;

    const queryParam = new URLSearchParams(queries);
    router.push(`${redirectUrl}?${queryParam}`);
  }

  return (
    <Card className="w-auto mx-2">
      <CardHeader className="py-5">
        <CardTitle className="max-sm:text-lg">{data.title}</CardTitle>
        <CardDescription>{`${data.street}`}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div>
          <p>{`${data.description}`}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="justify-center md:min-h-[40px] md:min-w-[200px]">
            <Link href={data.mapsUrl} target="_blank">Aller sur google maps (jsp où c'est)</Link>
          </Button>
          <Button onClick={onclick} className="justify-center md:min-h-[40px] md:min-w-[200px]">
            {clicked ? (<Spinner/>) : ("Allez, je prends celui là !")}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
