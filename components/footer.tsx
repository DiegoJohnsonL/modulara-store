import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/lib/consts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="bg-[#F3EEE6] text-[#51362D]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <Image src="/icons/footer-logo.svg" width={54} height={54} alt="Modulara logo" />
                    </div>
                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold md:font-semibold">Enlaces rápidos</h5>
                        <nav className="flex flex-col space-y-2">
                            <a href="#hero" className="hover:underline text-sm font-medium">
                                Inicio
                            </a>
                            <a href="#about" className="hover:underline text-sm font-medium">
                                Acerca de
                            </a>
                            <a href="#models" className="hover:underline text-sm font-medium">
                                Modelos
                            </a>
                            <a href="#contact" className="hover:underline text-sm font-medium">
                                Contacto
                            </a>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold md:font-semibold">Síguenos</h5>
                        <div className="flex space-x-4">
                            <Link href={SOCIALS.facebook} target="_blank">
                                <Button variant="ghost" size="icon">
                                    <Image src="/icons/facebook2.svg" width={9} height={18} alt="Facebook" />
                                </Button>
                            </Link>
                            <Link href={SOCIALS.instagram} target="_blank">
                                <Button variant="ghost" size="icon">
                                    <Image src="/icons/instagram2.svg" width={18} height={18} alt="Instagram" />
                                </Button>
                            </Link>
                            <Link href={SOCIALS.tiktok} target="_blank">
                                <Button variant="ghost" size="icon">
                                    <Image src="/icons/tiktok2.svg" width={18} height={18} alt="TikTok" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-[#9B5841] text-center">
                    <small className="text-xs">© {currentYear} Modulara. Todos los derechos reservados.</small>
                </div>
            </div>
        </footer>
    );
}
