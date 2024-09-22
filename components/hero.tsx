"use client";

import { Button } from "@/components/ui/button";
import { useCallback, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroCarousel, { CarouselHandle } from "./hero-carousel";
import Image from "next/image";
import { SOCIALS } from "@/lib/consts";

const images = [
    { src: "/renders/MVP - Almond.jpg", alt: "Modulara MVP Almond" },
    { src: "/renders/MVP - Mint.jpg", alt: "Modulara MVP Mint" },
    { src: "/renders/MVP - Monochrome.jpg", alt: "Modulara MVP Monochrome" },
    { src: "/renders/MVP - Oreo.jpg", alt: "Modulara MVP Oreo" },
    { src: "/renders/MVP - Twilight.jpg", alt: "Modulara MVP Twilight" },
    { src: "/renders/MVP - Vanilla.jpg", alt: "Modulara MVP Vanilla" },
    { src: "/renders/MVP - Watermelon.jpg", alt: "Modulara MVP Watermelon" },
    { src: "/renders/MVP - Whiskey.jpg", alt: "Modulara MVP Whiskey" },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const carouselRef = useRef<CarouselHandle>(null);

    const handleNextSlide = useCallback(() => {
        carouselRef.current?.nextSlide();
    }, []);

    const handlePrevSlide = useCallback(() => {
        carouselRef.current?.prevSlide();
    }, []);

    return (
        <div className="absolute h-screen max-h-[100vh] w-full bg-[#9B5841]">
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
            <div className="">
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="absolute size-11 md:size-16 rounded-full hover:bg-transparent hover:text-white flex top-1/2 -translate-y-1/2 left-5  bg-transparent border-0 text-white z-40"
                    onClick={handlePrevSlide}
                >
                    <ChevronLeft className="size-5 md:size-6" />
                    <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="absolute size-11 md:size-16 rounded-full hover:bg-transparent hover:text-white top-1/2 -translate-y-1/2 flex right-5  bg-transparent border-0 text-white z-40"
                    onClick={handleNextSlide}
                >
                    <ChevronRight className="size-5 md:size-6 font-bold" />
                    <span className="sr-only">Next slide</span>
                </Button>
            </div>
            <div className="absolute hidden md:block left-4 bottom-4 md:left-24 md:bottom-20 z-[8]">
                <div className="flex gap-5 flex-col text-center">
                    <label className="font-bold text-sm tracking-wide text-white">DESCUBRE MÁS</label>
                    <div className="flex items-center gap-[30px]">
                        <a href={SOCIALS.facebook} target="_blank">
                            <Button
                                className="rounded-full bg-white/20 hover:bg-white/40"
                                size={"icon"}
                                variant={"ghost"}
                            >
                                <Image
                                    src="/icons/facebook.svg"
                                    alt="Facebook"
                                    width={15}
                                    height={18}
                                    className="w-[15px] h-[18px]"
                                />
                            </Button>
                        </a>
                        <a href={SOCIALS.instagram} target="_blank">
                            <Button
                                className="rounded-full bg-white/20 hover:bg-white/40"
                                size={"icon"}
                                variant={"ghost"}
                            >
                                <Image
                                    src="/icons/instagram.svg"
                                    alt="Instagram"
                                    width={18}
                                    height={18}
                                    className="w-[18px] h-[18px]"
                                />
                            </Button>
                        </a>
                        <a href={SOCIALS.tiktok} target="_blank">
                            <Button
                                className="rounded-full bg-white/20 hover:bg-white/40"
                                size={"icon"}
                                variant={"ghost"}
                            >
                                <Image
                                    src="/icons/tiktok.svg"
                                    alt="TikTok"
                                    width={16}
                                    height={16}
                                    className="w-[16px] h-[18px]"
                                />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto relative z-10 flex items-center justify-center flex-col w-fit text-center gap-[21px] top-48 px-4 md:px-28">
                <div className="flex flex-col gap-3 items-center max-w-4xl ">
                    <Image src={"/icons/hero-logo.svg"} alt="Modulara logo" width={48} height={48} />
                    <div className="flex flex-col gap-6">
                        <h1 className="font-semibold md:font-bold text-4xl md:text-7xl text-white">
                            Transforma tu espacio.
                        </h1>
                        <h5 className="font-normal md:font-medium text-base md:text-[22px] md:leading-8 text-white">
                            Potencia tu forma de trabajar con escritorios modulares únicos adaptados a tu estilo de vida
                            y necesidades.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
