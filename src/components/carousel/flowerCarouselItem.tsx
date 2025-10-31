"use client";

import {useState} from "react";

import {FlowerPictureType} from "@/lib/schema/flowerPictureSchema";

import NextImage from "@/components/NextImage";
import Skeleton from "@/components/Skeleton";
import {Card, CardContent} from "@/components/ui/card";

export function FlowerCarouselItem({data}: Readonly<{
  data: FlowerPictureType
}>) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="relative w-64 h-96 overflow-hidden">
      <CardContent className="relative w-full h-full">
        {!imageLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}
        <Skeleton className="absolute inset-0 w-full h-full" />
        <NextImage
          alt={data.description}
          src={data.src}
          layout="fill"
          className={`object-cover ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />
      </CardContent>
    </Card>
  )
}
