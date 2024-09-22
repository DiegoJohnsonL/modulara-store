import About from "@/components/about";
import Contact from "@/components/contact";
import Features2 from "@/components/features2";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Models from "@/components/models";
import Navbar from "@/components/navbar";
import WassaButton from "@/components/wassa-button";

export default function Home() {
    return (
        <div className="relative ">
            <div className="fixed z-20 mx-auto w-full">
                <Navbar />
            </div>
            <section className="relative h-screen bg-transparent" id="hero">
                <div className="fixed top-0 w-full">
                    <Hero />
                </div>
            </section>
            <div className="relative z-10">
                <About />
                <Features2 />
                <Models />
                <Contact />
                <Footer />
            </div>
            <WassaButton />
        </div>
    );
}
