import { TypographyH5, TypographySmall } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#F3EEE6] text-[#51362D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img src="/icons/footer-logo.svg" alt="Modulara logo" className="h-10 w-auto" />
            <TypographySmall className="font-medium text-sm">Transformando espacios.</TypographySmall>
          </div>
          <div className="space-y-4">
            <TypographyH5 className="text-lg font-semibold md:font-semibold">Enlaces rápidos</TypographyH5>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="hover:underline text-sm">
                Inicio
              </a>
              <a href="#about" className="hover:underline text-sm">
                Acerca de
              </a>
              <a href="#models" className="hover:underline text-sm">
                Modelos
              </a>
              <a href="#contact" className="hover:underline text-sm">
                Contacto
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <TypographyH5 className="text-lg font-semibold md:font-semibold">Síguenos</TypographyH5>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#9B5841] text-center">
          <TypographySmall className="text-xs">
            © {currentYear} Modulara. Todos los derechos reservados.
          </TypographySmall>
        </div>
      </div>
    </footer>
  );
}
