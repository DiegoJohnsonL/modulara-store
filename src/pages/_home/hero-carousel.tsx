"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import FullCircleStrokeAnimationCountdown from "./hero-carousel-countdow";

type CarouselProps = {
  currentIndex: number;
  setCurrentIndex: any;
  images: {
    src: string;
    alt: string;
  }[];
  duration: number;
  transitionDuration: number;
};

export default function HeroCarousel({
  images,
  currentIndex,
  setCurrentIndex,
  duration,
  transitionDuration,
}: CarouselProps) {
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<any | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
  }, [isAnimating, setCurrentIndex, images.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + images.length) % images.length);
  }, [isAnimating, setCurrentIndex, images.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(nextSlide, duration * 1000);
  }, [nextSlide, duration]);

  useEffect(() => {
    if (!isAnimating) {
      resetTimer();
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [resetTimer, isAnimating]);

  const handleButtonClick = (action: () => void) => {
    action();
    resetTimer();
  };

  const variants = {
    enter: (direction: number) => ({
      clipPath: direction > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    }),
    center: {
      clipPath: "inset(0 0 0 0)",
    },
    exit: (direction: number) => ({
      clipPath: direction < 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    }),
  };

  return (
    <div className="relative size-full">
      <div className="size-full z-10 absolute inset-0 bg-black/15 pointer-events-none"></div>
      <div className="absolute size-full overflow-hidden opacity-85 z-[6]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover object-[66%] md:object-center"
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          />
        ))}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            onAnimationComplete={() => setIsAnimating(false)}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: transitionDuration, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: 2 }}
          >
            <img
              src={images[currentIndex].src}
              alt={`Current Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover object-[66%] md:object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute size-full z-10">
          <Button
            variant={"outline"}
            size={"icon"}
            className={
              "absolute size-11 md:size-20 rounded-full flex top-1/2 -translate-y-1/2 left-5 lg:left-[19%] bg-transparent border-0 text-white"
            }
            onClick={() => handleButtonClick(prevSlide)}
            disabled={false}
          >
            <ChevronLeft className="size-5 md:size-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className={
              "absolute size-11 md:size-20 rounded-full top-1/2 -translate-y-1/2 flex right-5 lg:right-[19%] bg-transparent border-0 text-white"
            }
            disabled={false}
            onClick={() => handleButtonClick(nextSlide)}
          >
            <ChevronRight className="size-5 md:size-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
      <div className="absolute flex items-center justify-center bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-[7]">
        <div className="flex gap-2.5">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ring-2 ring-inset ring-white/50 duration-500 delay-200 ease-in-out ${
                index === currentIndex ? "bg-white" : "bg-transparent "
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

