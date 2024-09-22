"use client";

import { useLenis } from "@/lib/lenis";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    fallback?: React.ElementType;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    offset?: number;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
    { href, fallback = "div", onClick, offset, ...props },
    ref
) {
    const lenis = useLenis();
    const pathname = usePathname();

    if (!href || typeof href !== "string") {
        const Tag = fallback;

        return <Tag ref={ref} onClick={onClick} {...props} href={href} />;
    }

    const isExternal = href.startsWith("http");

    if (isExternal) {
        props.target = "_blank";
        props.rel = "noopener noreferrer";
    }

    const isAnchor = href.startsWith("#") || href.startsWith(`${pathname}#`);

    return (
        <NextLink
            ref={ref}
            onClick={(e) => {
                if (isAnchor && lenis) {
                    e.preventDefault();
                    lenis.scrollTo(href, { offset });
                }
                onClick?.(e);
            }}
            {...props}
            href={href}
        />
    );
});
