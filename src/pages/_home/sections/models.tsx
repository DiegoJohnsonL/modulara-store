import { TypographyH2 } from "@/components/ui/typography";

export default function Models() {
  return (
    <section id="models" className="bg-white p-6 md:p-20 min-h-screen">
      <div className="mx-auto flex flex-col gap-6 justify-center ">
        <div className="flex flex-col md:flex-row gap-12 justify-between w-full">
          <TypographyH2 className="flex-1 text-black">Elige los colores que vayan contigo.</TypographyH2>
          <div className="flex-1  ">
            <div className="pr-16 py-3.5 flex flex-col gap-1 w-fit ml-auto">
              <label className="font-bold text-xs md:text-sm uppercase leading-6 tracking-[2px] opacity-50">
                prueba el que quieras:
              </label>
              <div className="bg-black w-[324px]">colores</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
