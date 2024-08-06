import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TypographyH1, TypographyH5 } from "@/components/ui/typography";
import { useEffect, useRef, useState } from "react";

type HeroCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function Hero({ images }: HeroCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [current, setCurrent] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {}, []);

  return (
    <div
      className="absolute h-screen w-full"
      onMouseDown={() => {
        setMouseDown((prev) => !prev);
      }}
      onMouseUp={() => {
        setMouseDown((prev) => !prev);
      }}
    >
      {/* Carousel */}
      <div className="absolute z-[5] size-full">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          plugins={[autoplay.current]}
          className="size-full"
        >
          <CarouselContent className="m-0 size-full">
            {images?.map((image, index) => (
              <CarouselItem key={index} className=" p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`size-full opacity-80 object-cover  object-[66%] md:object-center ${
                    mouseDown ? "cursor-grabbing" : "cursor-grab"
                  }`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="flex left-5 lg:left-[20%] bg-transparent border-0 text-white"
            onClick={(event) => {
              autoplay.current.reset();
              api?.scrollPrev();
            }}
          />
          <CarouselNext
            className="flex right-5 lg:right-[20%] bg-transparent border-0 text-white"
            onClick={() => {
              autoplay.current.reset();
              api?.scrollNext();
            }}
          />
        </Carousel>
      </div>
      <div className=" w-full relative z-10 flex items-center flex-col text-center gap-[21px] top-28 md:top-[122px] px-4 md:px-28">
        <div className="flex flex-col gap-3 items-center max-w-4xl">
          <img src={"/icons/hero-logo.svg"} alt="Modulara logo" width={48} height={48} />
          <div className="flex flex-col gap-6">
            <TypographyH1 className="text-white">Transforma tu espacio.</TypographyH1>
            <TypographyH5 className="text-white">
              Potencia tu forma de trabajar con escritorios modulares únicos adaptados a tu estilo de vida y
              necesidades.
            </TypographyH5>
          </div>
        </div>
        <CarouselNavigation
          count={images.length}
          current={current}
          onClick={(index) => {
            autoplay.current.reset();
            api?.scrollTo(index);
          }}
        />
      </div>
      <div className="size-full z-10 absolute inset-0 bg-black/10 pointer-events-none"></div>
    </div>
  );
}

function CarouselNavigation({
  count,
  current,
  onClick,
}: {
  count: number;
  current: number;
  onClick: (index: number) => void;
}) {
  return (
    <div className="flex gap-[9px]">
      {Array.from({ length: count }).map((_, index) => {
        const selected = index === current;
        return (
          <Button
            key={index}
            variant={"ghost"}
            onClick={() => onClick(index)}
            className={`size-2.5 md:size-3 p-0 rounded-full ${
              selected ? "bg-white ring-0" : "ring-2 ring-inset ring-white/30"
            }`}
          />
        );
      })}
    </div>
  );
}
