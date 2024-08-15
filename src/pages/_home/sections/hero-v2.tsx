import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypographyH1, TypographyH5 } from "@/components/ui/typography";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HeroCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function HeroV2({ images }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const onNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const onPrevious = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  console.log(current);
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
        {images?.map((image, index, array) => (
          <motion.img
            key={index}
            variants={{
              next: { clipPath: "inset(0 0 0 0)" },
              previous: { clipPath: "inset(0 0 0 100%)" },
              visible: { clipPath: "inset(0 0 0 0)" },
              hidden: { clipPath: "inset(0 0 0 100%)" },
            }}
            initial="hidden"
            animate={current === index || current === index + 1 ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeIn" }}
            src={image.src}
            alt={image.alt}
            className={`size-full absolute top-0 right-0 opacity-100 object-cover  object-[66%] md:object-center ${
              mouseDown ? "cursor-grabbing" : "cursor-grab"
            }`}
          />
        ))}
        <Button
          variant={"outline"}
          size={"icon"}
          className={
            "absolute h-8 w-8 rounded-full flex top-1/2 -translate-y-1/2 left-5 lg:left-[20%] bg-transparent border-0 text-white z-10"
          }
          onClick={onPrevious}
          disabled={false}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className={
            "absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 flex right-5 lg:right-[20%] bg-transparent border-0 text-white"
          }
          disabled={false}
          onClick={onNext}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className=" mx-auto relative z-10 flex items-center flex-col w-fit text-center gap-[21px] top-28 md:top-[122px] px-4 md:px-28">
        <div className="flex flex-col gap-3 items-center max-w-4xl ">
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
            setCurrent(index);
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
