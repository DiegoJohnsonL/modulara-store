import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TypographyH1, TypographyH5, TypographyP } from "@/components/ui/typography";
import { useEffect, useState } from "react";

type HeroCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function Hero({ images }: HeroCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {}, []);

  return (
    <div
      className="h-screen absolute  inset-0"
      onMouseDown={() => {
        setMouseDown((prev) => !prev);
      }}
      onMouseUp={() => {
        setMouseDown((prev) => !prev);
      }}
    >
      {/* background image */}
      <div className="absolute z-[5] h-full w-full">
        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{
            loop: true,
            align: "center",
          }}
        >
          <CarouselContent>
            {images?.map((image, index) => (
              <CarouselItem key={index} className="h-screen w-full p-0 relative z-10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-full opacity-80 object-cover  ${mouseDown ? "cursor-grabbing" : "cursor-grab"}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block left-5 bg-transparent border-0 text-white" />
          <CarouselNext className="hidden md:block right-5 bg-transparent border-0 text-white" />
        </Carousel>
      </div>
      <div className=" w-full relative z-10 flex items-center flex-col text-center gap-[21px] top-[122px] px-4 md:px-28">
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
        <div className="hidden md:block">
          <CarouselNavigation count={count} current={current} api={api} />
        </div>
      </div>
      <div className="md:hidden absolute z-10  bottom-4 left-1/2 -translate-x-1/2">
        <CarouselNavigation count={count} current={current} api={api} />
      </div>
    </div>
  );
}

function CarouselNavigation({ count, current, api }: { count: number; current: number; api?: CarouselApi }) {
  return (
    <div className="flex gap-[9px]">
      {Array.from({ length: count }).map((_, index) => {
        const selected = index === current;
        return (
          <Button
            variant={"ghost"}
            onClick={() => api?.scrollTo(index)}
            className={`size-3 p-0 rounded-full ${selected ? "bg-white ring-0" : "ring-2 ring-inset ring-white/30"}`}
          />
        );
      })}
    </div>
  );
}
