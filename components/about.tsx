import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="w-full bg-white px-4 md:px-28 py-10 md:py-[72px] flex flex-col justify-center items-center gap-4 md:gap-6"
        >
            <div className="flex flex-col justify-center text-[#51362D] items-center text-center gap-3 mx-auto max-w-3xl">
                <label className="font-bold text-xs md:text-sm uppercase leading-6 tracking-[2px] opacity-50">
                    Diseño a tu medida
                </label>
                <h2 className="font-bold text-3xl md:text-[58px] md:leading-[70px] tracking-tighter">
                    Crea el espacio perfecto para ti.
                </h2>
            </div>
            <p className="font-medium text-[#B8AFAF] leading-none text-lg md:text-[22px] h-[28px] md:h-[32px] tracking-[7px] flex items-center">
                LIMA,&nbsp;&nbsp;PERU&nbsp;&nbsp;
                <Image
                    src="/images/peru-flag.png"
                    alt="peru flag"
                    width={25}
                    height={20}
                    className="object-contain inline-flex"
                />
            </p>
        </section>
    );
}
