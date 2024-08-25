import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypographyH1, TypographyH5 } from "@/components/ui/typography";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroCarousel from "../hero-carousel";

type HeroCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function Hero({ images }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="absolute h-screen w-full bg-[#9B5841]">
      {/* Carousel */}
      <div className="absolute z-[5] size-full">
        <HeroCarousel
          images={images}
          currentIndex={current}
          setCurrentIndex={setCurrent}
          duration={2}
          transitionDuration={0.9}
        />
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
      </div>
    </div>
  );
}




