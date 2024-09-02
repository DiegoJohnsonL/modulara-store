import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { TypographyH2 } from "@/components/ui/typography";
import Autoplay from "embla-carousel-autoplay";
import { Pause, PauseCircle, Play, PlayCircleIcon } from "lucide-react";
import { useRef, useState } from "react";

type ModelsProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function Models({ images }: ModelsProps) {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section id="models" className="bg-white p-6 md:p-20 h-screen">
      <div className="mx-auto flex flex-col gap-6 md:gap-12 justify-center items-stretch h-full">
        <div className="flex flex-col md:flex-row gap-12 justify-between w-full">
          <TypographyH2 className="flex-1 text-black">Elige los colores que vayan contigo.</TypographyH2>
          <div className="flex-1 ">
            <div className="h-full  justify-end pr-16 flex flex-col w-fit ml-auto">
              <div className=" w-full md:w-[324px] flex gap-4">
                {images.map((image, index) => (
                  <div className="size-9 rounded-full bg-red-500" key={index}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow  flex gap-4 md:gap-6">
          <div className=" h-full  w-1/2 md:w-[65%] relative">
            <Carousel setApi={setApi} className="size-full" plugins={[autoplay.current]} opts={{ loop: true }}>
              <CarouselContent className="h-full m-0">
                {images.map((image, index) => (
                  <CarouselItem className="p-0" key={index}>
                    <img src={image.src} alt={image.alt} className=" w-full h-full object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <Button
                variant={"outline"}
                className="absolute rounded-full bottom-4 left-4 border-none bg-transparent size-10 p-0 hover:bg-transparent hover:text-black font-light"
              >
                {false ? <PlayCircleIcon className="size-full" /> : <PauseCircle className="size-full" />}
              </Button>
            </Carousel>
          </div>
          <div className=" h-full  w-1/2 md:w-[35%] relative">
            <img
              src="https://placehold.co/400"
              alt="model-2"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
