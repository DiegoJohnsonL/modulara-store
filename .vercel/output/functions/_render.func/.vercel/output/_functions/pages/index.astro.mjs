import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_BB3OGfVh.mjs';
import 'kleur/colors';
import { c as cn, B as Button, $ as $$BaseLayout } from '../chunks/BaseLayout_B_cFhnvq.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";

function TypographyH1({ children, className }) {
  return /* @__PURE__ */ jsx("h1", { className: cn("font-bold text-4xl md:text-7xl", className), children });
}
function TypographyH5({ children, className }) {
  return /* @__PURE__ */ jsx("h5", { className: cn("font-medium text-base md:text-[22px] md:leading-8", className), children });
}

function Hero({ images }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "h-screen absolute  inset-0",
      onMouseDown: () => {
        setMouseDown((prev) => !prev);
      },
      onMouseUp: () => {
        setMouseDown((prev) => !prev);
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute z-[5] h-full w-full", children: /* @__PURE__ */ jsxs(
          Carousel,
          {
            className: "w-full",
            setApi,
            opts: {
              loop: true,
              align: "center"
            },
            children: [
              /* @__PURE__ */ jsx(CarouselContent, { children: images?.map((image, index) => /* @__PURE__ */ jsx(CarouselItem, { className: "h-screen w-full p-0 relative z-10", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: image.src,
                  alt: image.alt,
                  className: `h-full opacity-80 object-cover  ${mouseDown ? "cursor-grabbing" : "cursor-grab"}`
                }
              ) }, index)) }),
              /* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden md:block left-5 bg-transparent border-0 text-white" }),
              /* @__PURE__ */ jsx(CarouselNext, { className: "hidden md:block right-5 bg-transparent border-0 text-white" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: " w-full relative z-10 flex items-center flex-col text-center gap-[21px] top-[122px] px-4 md:px-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 items-center max-w-4xl", children: [
            /* @__PURE__ */ jsx("img", { src: "/icons/hero-logo.svg", alt: "Modulara logo", width: 48, height: 48 }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ jsx(TypographyH1, { className: "text-white", children: "Transforma tu espacio." }),
              /* @__PURE__ */ jsx(TypographyH5, { className: "text-white", children: "Potencia tu forma de trabajar con escritorios modulares únicos adaptados a tu estilo de vida y necesidades." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(CarouselNavigation, { count, current, api }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden absolute z-10  bottom-4 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx(CarouselNavigation, { count, current, api }) })
      ]
    }
  );
}
function CarouselNavigation({ count, current, api }) {
  return /* @__PURE__ */ jsx("div", { className: "flex gap-[9px]", children: Array.from({ length: count }).map((_, index) => {
    const selected = index === current;
    return /* @__PURE__ */ jsx(
      Button,
      {
        variant: "ghost",
        onClick: () => api?.scrollTo(index),
        className: `size-3 p-0 rounded-full ${selected ? "bg-white ring-0" : "ring-2 ring-inset ring-white/30"}`
      }
    );
  }) });
}

const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const images = [
    { src: "/renders/render-1.png", alt: "Modulara Render 1" },
    { src: "/renders/render-20.png", alt: "Modulara Render 5" },
    { src: "/renders/render-2.png", alt: "Modulara Render 2" },
    { src: "/renders/render-3.png", alt: "Modulara Render 3" },
    { src: "/renders/render-4.png", alt: "Modulara Render 4" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="h-screen w-full bg-[#9B5841] fixed"> ${renderComponent($$result, "Hero", Hero, { "images": images, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Diego/Desktop/dev/modulara-store/src/pages/_home/components/hero", "client:component-export": "default" })}  <div class="size-full z-10 absolute inset-0 bg-black/10 pointer-events-none"></div> </section>`;
}, "C:/Users/Diego/Desktop/dev/modulara-store/src/pages/_home/sections/heading.astro", void 0);

function Navbar() {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Acerca de", href: "#about" },
    { label: "Modelos", href: "#models" },
    { label: "Contacto", href: "#contact" }
  ];
  return /* @__PURE__ */ jsx("header", { className: "relative top-6 md:top-10 z-50 px-4 md:px-28", children: /* @__PURE__ */ jsx("nav", { className: "flex gap-5 md:gap-8 justify-center", children: navItems.map((item, index) => /* @__PURE__ */ jsx("a", { href: item.href, children: /* @__PURE__ */ jsx(Button, { className: "p-0 text-white md:text-lg", variant: "link", children: item.label }) }, index)) }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Welcome to Modulara" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative"> <!-- <div class="flex items-center justify-end top-10 right-5 absolute">
			<ModeToggle client:load/>
		</div> --> <!-- <Scene client:only="react"/> --> <div class="fixed z-20 mx-auto w-full">${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Diego/Desktop/dev/modulara-store/src/pages/_home/components/navbar", "client:component-export": "default" })}</div> <div class="fixed w-full"> ${renderComponent($$result2, "Heading", $$Heading, {})} </div> <div class="h-screen bg-transparent"></div> <div class="relative z-10"> <div class="w-full h-screen bg-black text-white grid place-content-center">content</div> <div class="w-full h-screen bg-[#F3EEE6] grid place-content-center">content</div> </div> </main> ` })}`;
}, "C:/Users/Diego/Desktop/dev/modulara-store/src/pages/index.astro", void 0);

const $$file = "C:/Users/Diego/Desktop/dev/modulara-store/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
