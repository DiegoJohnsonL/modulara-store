"use client";

import { useState, useEffect, useCallback, useRef, forwardRef, useImperativeHandle } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import FullCircleStrokeAnimationCountdown from "./hero-carousel-countdow";

export interface CarouselHandle {
  nextSlide: () => void;
  prevSlide: () => void;
}

type CarouselProps = {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  images: {
    src: string;
    alt: string;
  }[];
  duration: number;
  transitionDuration: number;
};

const HeroCarousel = forwardRef<CarouselHandle, CarouselProps>(
  ({ images, currentIndex, setCurrentIndex, duration, transitionDuration }, ref) => {
    const [direction, setDirection] = useState(0);
    const timerRef = useRef<any | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = useCallback(() => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [isAnimating, setCurrentIndex, images.length]);

    const prevSlide = useCallback(() => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(-1);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [isAnimating, setCurrentIndex, images.length]);

    useImperativeHandle(ref, () => ({
      nextSlide,
      prevSlide,
    }));

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
        <div className="size-full z-[7] absolute inset-0 bg-black/10 pointer-events-none"></div>
        <div className="absolute size-full overflow-hidden opacity-90 z-[6]">
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
        </div>
      </div>
    );
  }
);

export default HeroCarousel;