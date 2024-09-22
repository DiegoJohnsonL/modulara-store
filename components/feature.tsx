"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
type FeatureProps = {
    title: string;
    description: string;
    side: "left" | "right";
    image: { src: string; alt: string };
};

const Feature: React.FC<FeatureProps> = ({ title, description, image, side }) => {
    const ref = useRef(null);
    const isLargeScreen = useMediaQuery("(min-width: 1024px)"); // lg breakpoint
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.7], [0, 1, 1, 0.0]);
    const [animatedStyle, setAnimatedStyle] = useState(isLargeScreen ? { opacity } : {});

    useEffect(() => {
        if (isLargeScreen) {
            setAnimatedStyle({ opacity });
        } else {
            setAnimatedStyle({});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLargeScreen]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 lg:gap-36 md:h-[65vh]"
        >
            <motion.div
                className={`flex flex-col gap-3 lg:gap-8 lg:pr-[35px] max-w-[481px] ${
                    side === "right" ? "lg:order-2" : ""
                }`}
                style={animatedStyle}
            >
                <h3 className="font-bold tracking-tight text-2xl md:text-[42px] md:leading-[52px] text-[#51362D]">
                    {title}
                </h3>
                <h5 className="font-normal md:font-medium text-base md:text-[22px] md:leading-8 text-[#9B5841]">
                    {description}
                </h5>
            </motion.div>
            <motion.img
                src={image.src}
                alt={image.alt}
                width={420}
                height={420}
                className={side === "right" ? "lg:order-1" : ""}
                style={animatedStyle}
            />
        </motion.div>
    );
};

export default Feature;
