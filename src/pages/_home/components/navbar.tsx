import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Acerca de", href: "#about" },
    { label: "Modelos", href: "#models" },
    { label: "Contacto", href: "#contact" },
  ];
  const navRef = useRef<HTMLHeadingElement>(null);
  const [padding, setPadding] = useState("py-6 md:py-10");

  useGSAP(() => {
    const navbar = navRef.current;
    gsap.to(navbar, {
      scrollTrigger: {
        trigger: "#hero", // Replace with your hero section's ID or class
        start: "bottom 88px",
        onEnter: () => {
          gsap.to(navbar, {
            backgroundColor: "white",
            color: "#51362D",

            onStart: () => {
              setPadding("py-4 md:py-6");
            },
          });
        },
        onLeaveBack: () => {
          gsap.to(navbar, {
            backgroundColor: "transparent",
            color: "white",

            onStart: () => {
              setPadding("py-6 md:py-10");
            },
          });
        },
      },
    });
  });

  return (
    <header ref={navRef} className={`relative z-50 px-4 md:px-28 ${padding} text-white transition-all duration-500`}>
      <nav className="flex gap-4 md:gap-8 justify-center">
        {navItems.map((item, index) => (
          <a href={item.href} key={index}>
            <a className={`md:text-lg underline-offset-4 hover:underline`}>{item.label}</a>
          </a>
        ))}
      </nav>
    </header>
  );
}
