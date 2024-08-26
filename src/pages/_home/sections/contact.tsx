import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH2, TypographyH5 } from "@/components/ui/typography";

export default function Contact() {
  return (
    <section id="contact" className="p-6 md:pt-[157px] md:pb-44 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-6 text-center mb-12">
          <TypographyH2 className="text-[#51362D]">Contáctanos</TypographyH2>
          <TypographyH5 className="text-[#9B5841]">
            ¿Tienes preguntas o necesitas ayuda? Estamos aquí para ti.
          </TypographyH5>
        </div>
        <form className="space-y-6">
          <Input
            type="text"
            placeholder="Nombre"
            className="bg-[#F3EEE6] border-[#9B5841] focus-visible:ring-[#9B5841] text-[#51362D] placeholder-[#9B5841]/50"
          />
          <Input
            type="email"
            placeholder="Correo electrónico"
            className="bg-[#F3EEE6] border-[#9B5841] focus-visible:ring-[#9B5841] text-[#51362D] placeholder-[#9B5841]/50"
          />
          <Button type="submit" className="w-full bg-[#51362D] text-white hover:bg-[#51362D]/90">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
}
