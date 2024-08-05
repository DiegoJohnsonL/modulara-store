import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Acerca de", href: "#about" },
    { label: "Modelos", href: "#models" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="relative top-6 md:top-10 z-50 px-4 md:px-28">
      <nav className="flex gap-5 md:gap-8 justify-center">
        {navItems.map((item, index) => (
          <a href={item.href} key={index}>
            <Button className="p-0 text-white md:text-lg" variant={"link"}>
              {item.label}
            </Button>
          </a>
        ))}
      </nav>
    </header>
  );
}
