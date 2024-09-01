import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH2, TypographyH5 } from "@/components/ui/typography";
import { motion } from "framer-motion";

function PhoneInput({ required, setEmailRequired }: { required: boolean; setEmailRequired: (value: boolean) => void }) {
  const [phone, setPhone] = useState("");

  const formatPhoneNumber = (value: string) => {
    const number = value.replace(/[^\d]/g, "");
    const groups = number.match(/^(\d{0,3})(\d{0,3})(\d{0,3})$/);

    if (!groups) return value;

    let formatted = "";
    if (groups[1]) formatted += groups[1];
    if (groups[2]) formatted += `-${groups[2]}`;
    if (groups[3]) formatted += `-${groups[3]}`;

    return formatted;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(event.target.value);
    setPhone(formatted);
  };

  return (
    <Input
      type="tel"
      placeholder="xxx-xxx-xxx"
      required={required}
      value={phone}
      onChange={handleChange}
      className="flex-1 bg-[#F3EEE6] border-[#9B5841] focus-visible:ring-0 focus-visible:ring-offset-0 text-[#51362D] placeholder-[#9B5841]/50 rounded-l-none"
      maxLength={11}
    />
  );
}

export default function Contact() {
  const [emailRequired, setEmailRequired] = useState(false);
  const [phoneRequired, setPhoneRequired] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneRequired(!event.target.value);
  };

  return (
    <section id="contact" className="p-6 md:pt-[157px] md:pb-44 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="flex-1 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="https://placehold.co/400"
            alt="Contact us"
            className="w-full h-auto rounded-lg shadow-lg"
            width={600}
            height={800}
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-6 text-center lg:text-left mb-12">
            <TypographyH2 className="text-[#51362D]">Contáctanos</TypographyH2>
            <TypographyH5 className="text-[#9B5841]">
              ¿Tienes preguntas o necesitas ayuda? Estamos aquí para ti.
            </TypographyH5>
          </div>
          <form className="space-y-6">
            <Input
              required
              type="text"
              placeholder="Nombre"
              className="bg-[#F3EEE6] border-[#9B5841] focus-visible:ring-[#9B5841] text-[#51362D] placeholder-[#9B5841]/50"
            />
            <div className="flex items-center gap-2">
              <div className="flex w-[30%] group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#9B5841] rounded-md">
                <span className="inline-flex items-center px-3 text-sm text-[#51362D] bg-[#F3EEE6] border border-r-0 border-[#9B5841] rounded-l-md">
                  +51
                </span>
                <PhoneInput required={phoneRequired} setEmailRequired={setEmailRequired} />
              </div>
              <span className="text-[#9B5841]">o</span>
              <Input
                type="email"
                placeholder="Correo electrónico"
                required={emailRequired}
                onChange={handleEmailChange}
                className="w-[70%] bg-[#F3EEE6] border-[#9B5841] focus-visible:ring-[#9B5841] text-[#51362D] placeholder-[#9B5841]/50"
              />
            </div>
            <Button type="submit" className="w-full bg-[#51362D] text-white hover:bg-[#51362D]/90">
              Enviar
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
