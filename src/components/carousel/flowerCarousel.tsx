"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useCallback, useEffect, useState} from "react";

import {FlowerPictureType} from "@/lib/schema/flowerPictureSchema";
import {cn} from "@/lib/utils";

import Button from "@/components/buttons/Button";
import {FlowerCarouselItem} from "@/components/carousel/flowerCarouselItem";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {Spinner} from "@/components/ui/spinner";

import amaryllis from "@/assets/flowers/amaryllis.jpg";
import anemone from "@/assets/flowers/anemone.jpg"
import iris from "@/assets/flowers/iris.jpg"
import lego from "@/assets/flowers/lego.png"
import oeillets from "@/assets/flowers/oeillets.jpg"
import renoncules from "@/assets/flowers/renoncules.jpg"
import roses from "@/assets/flowers/roses.jpg"
import tulipes from "@/assets/flowers/tulipes.jpg"

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [flowerTitle, setFlowerTitle] = useState(flowersData[0].title);
  const [flowerDescription, setFlowerDescription] = useState(flowersData[0].description);
  const [clicked, setClicked] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const queries: { [key: string]: string } = {}

  const onClick = () => {
    setClicked(true);
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

  const onSelect = useCallback(() => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap());
    setFlowerTitle(flowersData[api.selectedScrollSnap()].title);
    setFlowerDescription(flowersData[api.selectedScrollSnap()].description);
  }, [api]);

  const handleFlowerClick = (index: number) => {
    if (!api) return
    api.scrollTo(index)
  };

  useEffect(() => {
    if (!api) return

    onSelect()
    api.on("select", onSelect)

    return () => {
      api.off('select', onSelect);
      return
    }
  }, [api, onSelect]);

  return (
    <div className="flex flex-col">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          watchDrag: true,
        }}
        className={cn("w-full max-sm:max-w-[260px]", className)}
      >
        <CarouselPrevious/>
        <CarouselContent>
          {
            flowersData.map((flower, index) => (
              <CarouselItem
                key={`flower-${index}`}
                onClick={() => {
                  handleFlowerClick(index)
                }}
                className=" sm:basis-1/3 md:basis-1/3 cursor-pointer"
              >
                <div className={cn(
                  "transition-all duration-500 ease-out",
                  index === selectedIndex
                    ? 'scale-100'
                    : 'scale-90 opacity-70'
                )}>
                  <FlowerCarouselItem data={flower}/>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselNext className="md:mr-14"/>
      </Carousel>
      <div className="px-5 -mt-5 text-center text-sm text-muted-foreground">
        <b>{flowerTitle.charAt(0).toUpperCase() + flowerTitle.slice(1)}</b> - {flowerDescription}
      </div>

      {/*TODO changer ce div et le mettre ailleurs*/}
      <div className="flex justify-center py-5">
        <Button onClick={onClick} className="justify-center min-h-[40px] min-w-[200px] w-fit">
          {clicked ? (<Spinner/>) : (
            "Je choisis ces fleurs"
          )}
        </Button>
      </div>
    </div>
  )
}
