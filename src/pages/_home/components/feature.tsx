import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypographyH3, TypographyH5, TypographyP } from "@/components/ui/typography";
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

  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0.0]);

  const animatedStyle = isLargeScreen ? { opacity } : {};

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-28 h-screen"
    >
      <motion.div
        className={`flex flex-col gap-3 lg:gap-8 lg:pr-[35px] ${side === "right" ? "lg:order-2" : ""}`}
        style={animatedStyle}
      >
        <TypographyH3 className="text-[#51362D]">{title}</TypographyH3>
        <TypographyH5 className="text-[#9B5841]">{description}</TypographyH5>
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
