"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Link } from "./link";
gsap.registerPlugin(ScrollTrigger);

interface NavbarStyle {
    backgroundColor: string;
    textColor: string;
    padding: string;
}

export default function Navbar() {
    const navItems = [
        { label: "Home", href: "#hero" },
        { label: "Acerca de", href: "#about" },
        { label: "Modelos", href: "#models" },
        { label: "Contacto", href: "#contact" },
    ];
    const navRef = useRef<HTMLHeadingElement>(null);
    const [navbarStyle, setNavbarStyle] = useState<NavbarStyle>({
        backgroundColor: "transparent",
        textColor: "white",
        padding: "py-6 md:py-10",
    });

    useGSAP(() => {
        const navbar = navRef.current;
        if (!navbar) return;

        const sections = ["hero", "about", "features", "models", "contact"];
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: `#${section}`,
                start: "top 80px",
                end: index === sections.length - 1 ? "bottom bottom" : "bottom 80px",
                onEnter: () => updateNavbarStyle(section),
                onEnterBack: () => updateNavbarStyle(section),
            });
        });

        function updateNavbarStyle(section: string) {
            const styles: Record<string, Omit<NavbarStyle, "padding">> = {
                hero: { backgroundColor: "transparent", textColor: "white" },
                about: { backgroundColor: "white", textColor: "#51362D" },
                features: { backgroundColor: "#f3eee6", textColor: "#51362D" },
                models: { backgroundColor: "white", textColor: "#51362D" },
                contact: { backgroundColor: "white", textColor: "#51362D" },
            };

            const newPadding = section === "hero" ? "py-6 md:py-10" : "py-4 md:py-6";

            gsap.to(navbar, {
                backgroundColor: styles[section].backgroundColor,
                color: styles[section].textColor,
                duration: 0.1, // Fast color transition
                onComplete: () =>
                    setNavbarStyle({
                        ...styles[section],
                        padding: newPadding,
                    }),
            });

            // Animate padding separately with a slower transition
            gsap.to(navbar, {
                padding: newPadding,
                duration: 0.5, // Slower padding transition
                ease: "power2.inOut",
            });
        }
    }, []);

    return (
        <header
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-28 ${navbarStyle.padding} transition-all duration-300`}
            style={{ backgroundColor: navbarStyle.backgroundColor, color: navbarStyle.textColor }}
        >
            <nav className="flex gap-5 md:gap-8 justify-center">
                {navItems.map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                        className="text-sm md:text-lg underline-offset-4 hover:underline font-medium"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
