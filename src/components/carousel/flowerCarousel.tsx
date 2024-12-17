import {FlowerCarouselItem} from "@/components/carousel/flowerCarouselItem";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

import amaryllis from "@/assets/flowers/amaryllis.jpg";
import anemone from "@/assets/flowers/anemone.jpg"
import iris from "@/assets/flowers/iris.jpg"
import lego from "@/assets/flowers/lego.png"
import oeillets from "@/assets/flowers/oeillets.jpg"
import renoncules from "@/assets/flowers/renoncules.jpg"
import roses from "@/assets/flowers/roses.jpg"
import tulipes from "@/assets/flowers/tulipes.jpg"
import {cn} from "@/lib/utils";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {useRouter, useSearchParams} from "next/navigation";
import {FlowerPictureType} from "@/lib/schema/flowerPictureSchema";

const flowersData: FlowerPictureType[] = [
  {
    src: amaryllis.src,
    title: "amaryllis",
    description: "Elle symbolise la fierté, la beauté éclatante et la confiance en soi. Elle peut également représenter le succès après des efforts.",
  }, {
    src: anemone.src,
    title: "anemone",
    description: "Elle représente l'amour intense, la persévérance, l'affection ainsi que la confiance. ",
  }, {
    src: iris.src,
    title: "iris",
    description: "Souvent liée à la foi, à l'espoir, à la sagesse, à la bravoure et à l'admiration",
  }, {
    src: lego.src,
    title: "lego",
    description: "Elles ne faneront jamais dans le temps, et on s'amusera à construire ce bouquet ?",
  }, {
    src: oeillets.src,
    title: "oeillet",
    description: "Il représente la beauté et l'émotion. Il est également le symbole de l'ardeur et de la grâce parmi les fleurs",
  }, {
    src: renoncules.src,
    title: "renoncule",
    description: "Un bouquet de renoncules multicolores symbolise la séduction, le charme et l'attrait, signifiant : « Je suis séduit par tous vos charmes ».",
  }, {
    src: roses.src,
    title: "rose",
    description: "La fleur la plus emblématique et polyvalente, chaque couleur revêt une signification particulière et apporte des nuances aux sentiments que vous souhaitez exprimer",
  }, {
    src: tulipes.src,
    title: "tulipe",
    description: "Symbole de l’amour parfait. Les différentes couleurs expriment des nuances spécifiques (rouge : passion, jaune : bonheur, violet : royauté)",
  },
]

export function FlowerCarousel({className}: { className?: string }) {
  const [api, setApi] = useState<CarouselApi>()
  const [flowerTitle, setFlowerTitle] = useState(flowersData[0].title);
  const [flowerDescription, setFlowerDescription] = useState(flowersData[0].description);

  const searchParams = useSearchParams();
  const router = useRouter();
  const queries: { [key: string]: string } = {}

  const onClick = () => {
    for (const key of searchParams.keys()) {
      const data = searchParams.get(key);
      if (data) {
        queries[key] = data;
      }
    }
    queries["flower"] = flowerTitle;

    const queryParam = new URLSearchParams(queries);
    router.push(`/summary?${queryParam}`);
  }

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setFlowerTitle(flowersData[api.selectedScrollSnap()].title)
      setFlowerDescription(flowersData[api.selectedScrollSnap()].description)
    })
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className={cn("", className)}
      >
        <CarouselPrevious/>
        <CarouselContent>
          {
            flowersData.map((flower, index) => (
              <CarouselItem key={`flower-${index}`} className="sm:basis-1/3 md:basis-1/3">
                <FlowerCarouselItem data={flower}/>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselNext/>
      </Carousel>
      <div className="px-5 -mt-5 text-center text-sm text-muted-foreground">
        <b>{flowerTitle.charAt(0).toUpperCase() + flowerTitle.slice(1)}</b> - {flowerDescription}
      </div>
      <Button onClick={onClick}>"Je choisis ces fleurs"</Button>
    </>
  )
}
