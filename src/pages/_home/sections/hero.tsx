import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypographyH1, TypographyH5, TypographyLabel } from "@/components/ui/typography";
import { useCallback, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroCarousel, { CarouselHandle } from "../hero-carousel";

type HeroCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function Hero({ images }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<CarouselHandle>(null);

  const handleNextSlide = useCallback(() => {
    carouselRef.current?.nextSlide();
  }, []);

  const handlePrevSlide = useCallback(() => {
    carouselRef.current?.prevSlide();
  }, []);

  return (
    <div className="absolute h-screen max-h-[100svh] w-full bg-[#9B5841]">
      {/* Carousel */}
      <div className="absolute z-[5] size-full">
        <HeroCarousel
          ref={carouselRef}
          images={images}
          currentIndex={current}
          setCurrentIndex={setCurrent}
          duration={1.7}
          transitionDuration={2}
        />
      </div>
      {/* Navigation Buttons */}
      <div className="absolute size-full z-20">
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute size-11 md:size-16 rounded-full hover:bg-white/30 hover:text-[#9B5841] flex top-1/2 -translate-y-1/2 left-5 lg:left-[19%] bg-transparent border-0 text-white z-40"
          onClick={handlePrevSlide}
        >
          <ChevronLeft className="size-5 md:size-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute size-11 md:size-16 rounded-full hover:bg-white/30 hover:text-[#9B5841] top-1/2 -translate-y-1/2 flex right-5 lg:right-[19%] bg-transparent border-0 text-white z-40"
          onClick={handleNextSlide}
        >
          <ChevronRight className="size-5 md:size-6 font-bold" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className="absolute hidden md:block left-4 bottom-4 md:left-24 md:bottom-9 z-[7]">
        <div className="flex gap-5 flex-col text-center">
          <TypographyLabel className="text-white">DESCUBRE MÁS</TypographyLabel>
          <div className="flex items-center gap-[30px]">
            <a href="https://www.facebook.com" target="_blank">
              <Button className="rounded-full bg-white/20 hover:bg-white/40" size={"icon"} variant={"ghost"}>
                <img src="/icons/facebook.svg" alt="Facebook" width={15} height={18} className="w-[15px] h-[18px]" />
              </Button>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <Button className="rounded-full bg-white/20 hover:bg-white/40" size={"icon"} variant={"ghost"}>
                <img src="/icons/instagram.svg" alt="Instagram" width={18} height={18} className="w-[18px] h-[18px]" />
              </Button>
            </a>
            <a href="https://www.tiktok.com" target="_blank">
              <Button className="rounded-full bg-white/20 hover:bg-white/40" size={"icon"} variant={"ghost"}>
                <img src="/icons/tiktok.svg" alt="TikTok" width={16} height={16} className="w-[16px] h-[18px]" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto relative z-10 flex items-center justify-center flex-col w-fit text-center gap-[21px] top-48 px-4 md:px-28">
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