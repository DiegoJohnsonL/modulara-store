import { cn } from "@/lib/utils";

type TypographyProps = {
  children?: React.ReactNode;
  className?: string;
};

export function TypographyH1({ children, className }: Readonly<TypographyProps>) {
  return <h1 className={cn("font-semibold md:font-bold text-4xl md:text-7xl", className)}>{children}</h1>;
}

export function TypographyH2({ children, className }: Readonly<TypographyProps>) {
  return <h2 className={cn("font-bold text-3xl md:text-[58px] md:leading-[70px]", className)}>{children}</h2>;
}

export function TypographyH3({ children, className }: Readonly<TypographyProps>) {
  return <h4 className={cn("", className)}>{children}</h4>;
}

export function TypographyH4({ children, className }: Readonly<TypographyProps>) {
  return <h4 className={cn("", className)}>{children}</h4>;
}
export function TypographyH5({ children, className }: Readonly<TypographyProps>) {
  return (
    <h5 className={cn("font-normal md:font-medium text-base md:text-[22px] md:leading-8", className)}>{children}</h5>
  );
}
export function TypographyP({ children, className }: Readonly<TypographyProps>) {
  return <p className={cn("", className)}>{children}</p>;
}

export function TypographySmall({ children, className }: Readonly<TypographyProps>) {
  return <small className={cn("", className)}>{children}</small>;
}

export function TypographyExtraSmall({ children, className }: Readonly<TypographyProps>) {
  return <small className={cn("", className)}>{children}</small>;
}
