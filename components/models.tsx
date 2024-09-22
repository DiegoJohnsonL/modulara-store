"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Models() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const handleCircleClick = (index: number) => {
        if (api) {
            api.scrollTo(index);
        }
    };

    return (
        <section id="models" className="bg-white p-6 md:p-20 md:h-screen flex flex-col w-full">
            <div className="flex flex-col gap-6 md:gap-12 flex-grow">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between">
                    <h2 className="font-bold text-3xl md:text-[58px] md:leading-[70px] flex-1 text-black">
                        Elige los colores que vayan contigo.
                    </h2>
                    <div className="flex-1">
                        <div className="h-full justify-end flex flex-col w-fit md:ml-auto gap-1 leading-[26px]">
                            <p className="uppercase font-bold text-sm tracking-wider text-[#51362D] opacity-50">
                                prueba el que quieras:
                            </p>
                            <div className="w-full flex gap-4 flex-wrap items-center py-2 md:py-4 ">
                                {images.map((image, index) => (
                                    <div
                                        className={cn(
                                            "size-7 md:size-9 aspect-square rounded-full cursor-pointer overflow-hidden",
                                            current === index + 1 && "ring-1 ring-[#dbdbdf] ring-offset-[3px]"
                                        )}
                                        key={index}
                                        onClick={() => handleCircleClick(index)}
                                    >
                                        <div
                                            className="w-full h-1/2"
                                            style={{ backgroundColor: image.colors[0] }}
                                        ></div>
                                        <div
                                            className="w-full h-1/2"
                                            style={{ backgroundColor: image.colors[1] }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow flex flex-col overflow-hidden w-full aspect-square md:aspect-auto">
                    <Carousel setApi={setApi} className="flex-grow relative w-full" opts={{ loop: true }}>
                        <CarouselContent className="h-full w-full">
                            {images.map((image, index) => (
                                <CarouselItem className="h-full w-full" key={index}>
                                    <div className="h-full w-full relative">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-contain md:object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

const images = [
    {
        src: "/AD/Almond-001.jpg",
        alt: "Almond",
        colors: ["#AA8F7B", "#D3D6E7"],
        properties: ["Elegant", "Warm"],
    },
    {
        src: "/AD/Mint-001.jpg",
        alt: "Mint",
        colors: ["#8EA29F", "#CCAAAB"],
        properties: ["Fresh", "Calming"],
    },
    {
        src: "/AD/Monochrome-001.jpg",
        alt: "Monochrome",
        colors: ["#222024", "#D8DAE6"],
        properties: ["Classic", "Versatile"],
    },
    {
        src: "/AD/Onyx-001.jpg",
        alt: "Onyx",
        colors: ["#575C6E", "#BBB8C2"],
        properties: ["Sophisticated", "Modern"],
    },
    {
        src: "/AD/Oreo-001.jpg",
        alt: "Oreo",
        colors: ["#3C3D4D", "#B3AFBC"],
        properties: ["Contrasting", "Playful"],
    },
    {
        src: "/AD/Twilight-001.jpg",
        alt: "Twilight",
        colors: ["#49556D", "#B9877E"],
        properties: ["Mysterious", "Luxurious"],
    },
    {
        src: "/AD/Vanilla-001.jpg",
        alt: "Vanilla",
        colors: ["#AA8F7B", "#D3D6E7"],
        properties: ["Subtle", "Timeless"],
    },
    {
        src: "/AD/Watermelon-001.jpg",
        alt: "Watermelon",
        colors: ["#BA8F90", "#B6CBD0"],
        properties: ["Vibrant", "Refreshing"],
    },
    {
        src: "/AD/Whiskey-001.jpg",
        alt: "Whiskey",
        colors: ["#62514F", "#BEBFD2"],
        properties: ["Rich", "Bold"],
    },
];
