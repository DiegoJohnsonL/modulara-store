import Feature from "./feature";

const features = [
    {
        title: "Personalización a detalle",
        description:
            "Cambia el tamaño de los cajones, de tu escritorio y juega con los colores, creando un espacio que refleja tu personalidad y optimice tu productividad.",
        image: { src: "https://placehold.co/420", alt: "placeholder" },
    },
    {
        title: "Ergonomía avanzada",
        description:
            "Nuestros escritorios están diseñados para mejorar tu postura y reducir la fatiga. Te aseguramos comodidad y bienestar en cada momento.",
        image: { src: "https://placehold.co/420", alt: "placeholder" },
    },
    {
        title: "Materiales de alta calidad",
        description:
            "Hechos con melamina de alta calidad y un cuidado meticuloso en cada detalle, nuestros escritorios ofrecen durabilidad y resistencia, con el mejor precio costo - beneficio.",
        image: { src: "https://placehold.co/420", alt: "placeholder" },
    },
];

export default function Features() {
    return (
        <section id="features" className="p-6 md:pt-[157px] md:pb-44 bg-[#F3EEE6]">
            <div className="flex flex-col mx-auto gap-10 md:gap-0">
                {features.map((feature, index) => (
                    <Feature key={index} {...feature} side={index % 2 === 0 ? "left" : "right"} />
                ))}
            </div>
        </section>
    );
}
