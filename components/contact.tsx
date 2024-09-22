"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="p-6 pb-20 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                    className="flex-1 hidden lg:block"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Image
                        src="/images/form.png"
                        alt="Contact us"
                        className="w-full h-auto rounded-lg shadow-sm"
                        width={1400}
                        height={1400}
                        quality={100}
                    />
                </motion.div>
                <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="flex flex-col gap-2 text-center lg:text-left mb-5 md:mb-10">
                        <h2 className="font-bold text-3xl md:text-[58px] md:leading-[70px] text-[#51362D]">
                            Contáctanos
                        </h2>
                        <h5 className="font-normal md:font-medium text-base md:text-[22px] md:leading-8 text-[#9B5841]">
                            ¿Tienes preguntas o necesitas ayuda?
                        </h5>
                    </div>
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    );
}

function ContactForm() {
    return (
        <form className="space-y-4 md:space-y-6">
            <Input
                required
                type="text"
                placeholder="Nombre"
                className="bg-[#F3EEE6] border-[#9B5841] placeholder:text-[#9B5841]/50 focus-visible:ring-[#9B5841] text-[#51362D]"
            />
            <div className="flex items-center gap-4 md:gap-2 flex-col md:flex-row">
                <div className="flex w-full md:w-[30%] group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#9B5841] rounded-md">
                    <span className="inline-flex items-center px-3 text-sm text-[#51362D] bg-[#F3EEE6] border border-r-0 border-[#9B5841] rounded-l-md">
                        +51
                    </span>
                    <Input
                        type="tel"
                        placeholder="999-999-999"
                        className="flex-1 placeholder:text-[#9B5841]/50 bg-[#F3EEE6] border-[#9B5841] focus-visible:ring-0 focus-visible:ring-offset-0 text-[#51362D] rounded-l-none"
                        maxLength={11}
                    />
                </div>
                <Input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full md:w-[70%] bg-[#F3EEE6] border-[#9B5841] focus-visible:ring-[#9B5841] text-[#51362D] placeholder:text-[#9B5841]/50"
                />
            </div>
            <Textarea
                placeholder="Mensaje (opcional)"
                className="bg-[#F3EEE6] border-[#9B5841] focus-visible:ring-[#9B5841] text-[#51362D] placeholder:text-[#9B5841]/50"
            />
            <Button type="submit" className="w-full bg-[#51362D] text-white hover:bg-[#51362D]/90">
                Enviar
            </Button>
        </form>
    );
}
