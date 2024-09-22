import Image from "next/image";

export default function Features2() {
    return (
        <section id="features" className="bg-[#F3EEE6] px-6 py-8 md:p-24">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[72px]">
                <div className="px-6 py-8 bg-white rounded-lg flex flex-col gap-2">
                    <div className="flex flex-col items-center justify-center gap-6 md:gap-4">
                        <Image
                            src="/images/feature1.png"
                            alt="features2"
                            width={65}
                            height={56}
                            className="object-contain"
                        />
                        <h3 className="text-2xl text-[#717171] text-center font-bold md:text-[28px] md:leading-8 md:font-extrabold ">
                            Personalización a <br /> detalle
                        </h3>
                    </div>
                    <p className="font-medium text-[#717171] text-center">
                        Ajusta el tamaño de los cajones y los colores para reflejar tu personalidad.
                    </p>
                </div>
                <div className="px-6 py-8 bg-white rounded-lg flex flex-col gap-2">
                    <div className="flex flex-col items-center justify-center gap-6 md:gap-4">
                        <Image
                            src="/images/feature2.png"
                            alt="features2"
                            width={65}
                            height={56}
                            className="object-contain"
                        />
                        <h3 className="text-2xl text-[#717171] text-center font-bold md:text-[28px] md:leading-8 md:font-extrabold ">
                            Ergonomía <br /> avanzada
                        </h3>
                    </div>
                    <p className="font-medium text-[#717171] text-center">
                        Nuestros escritorios están diseñados para mejorar tu postura y reducir la fatiga.
                    </p>
                </div>
                <div className="px-6 py-8 bg-white rounded-lg flex flex-col gap-2">
                    <div className="flex flex-col items-center justify-center gap-6 md:gap-4">
                        <Image
                            src="/images/feature3.png"
                            alt="features2"
                            width={65}
                            height={56}
                            className="object-contain"
                        />
                        <h3 className="text-2xl text-[#717171] text-center font-bold md:text-[28px] md:leading-8 md:font-extrabold ">
                            Materiales de <br /> alta calidad
                        </h3>
                    </div>
                    <p className="font-medium text-[#717171] text-center">
                        Melamina de alta calidad y atención al detalle, con la mejor relación costo-beneficio.
                    </p>
                </div>
            </div>
        </section>
    );
}
