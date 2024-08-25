"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type HeroCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<any>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(nextSlide, 2000);
  }, [nextSlide]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

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
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Slide ${index + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: index === currentIndex ? 1 : 0 }}
        />
      ))}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 2 }}
        >
          <img
            src={images[currentIndex].src}
            alt={`Current Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between z-10">
        <Button onClick={() => handleButtonClick(prevSlide)} variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button onClick={() => handleButtonClick(nextSlide)} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
