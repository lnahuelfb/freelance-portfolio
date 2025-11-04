"use client";
import { motion } from "framer-motion";
import Divition from "@/components/ui/Divition";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 text-gray-900 pt-24 pb-20 px-4 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md"
        >
          <Image
            src="/nahuel.jpg"
            alt="Foto profesional de Nahuel"
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold tracking-tight"
        >
          Sobre mí
        </motion.h2>

        <Divition />

        <div className="space-y-6 text-base text-gray-700 leading-relaxed text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Soy <span className="font-semibold text-indigo-600">arquitecto y desarrollador full-stack freelance</span>. Refactorizo sistemas legacy como quien opera sin anestesia: modularizo, documento y dejo trazabilidad quirúrgica en cada helper, migración o layout.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Me especializo en <span className="font-semibold text-indigo-600">migraciones sin deuda</span>, validaciones estructurales, visualización granular y flows frontend/backend que no dependen de frontends rotos. Cada componente que diseño está pensado para anticipar objeciones de QA, auditoría o clientes exigentes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            También diseño <span className="font-semibold text-indigo-600">portfolios y landings</span> que transmiten profesionalismo desde el primer scroll. Layouts claros, animaciones sutiles, semántica visual defendible.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
