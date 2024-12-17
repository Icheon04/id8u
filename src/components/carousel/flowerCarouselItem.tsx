"use client";

import NextImage from "@/components/NextImage";
import {Card, CardContent} from "@/components/ui/card";
import {FlowerPictureType} from "@/lib/schema/flowerPictureSchema";

export function FlowerCarouselItem({data}: Readonly<{
  data: FlowerPictureType
}>) {
  return (
    <Card className={"relative w-64 h-96"}>
      <CardContent className={"items-center justify-center"}>
        <NextImage useSkeleton alt={data.description} src={data.src} layout={'fill'} objectFit={'contain'}/>
      </CardContent>
    </Card>
  )
}
