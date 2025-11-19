"use client";
import { motion } from "framer-motion";
import Divition from "@/components/ui/Divition";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      aria-label="Sobre mí"
      className="bg-gray-50 text-gray-900 pt-24 pb-20 px-4 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10">

        {/* Foto profesional */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md"
        >
          <Image
            src="/nahuel.jpg"
            alt="Nahuel Beschtedt - Arquitecto de software y desarrollador full-stack freelance"
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Título SEO */}
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

        {/* Texto optimizado */}
        <div className="space-y-6 text-base text-gray-700 leading-relaxed text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Soy <strong className="text-indigo-600">Nahuel Beschtedt</strong>, <strong>arquitecto de software y desarrollador full‑stack freelance</strong>. 
            Me dedico a <em>refactorizar sistemas legacy</em> y a crear experiencias digitales que transmiten confianza: 
            <strong>landings</strong> y <strong>portfolios</strong> que convierten visitantes en clientes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mi diferencial está en la <strong className="text-indigo-600">modularidad y trazabilidad</strong>. 
            Cada componente que diseño está pensado para <strong>anticipar objeciones</strong>, resistir auditorías y 
            <em>funcionar sin deuda técnica</em>. Eso significa proyectos más sólidos, escalables y defendibles.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Además, creo <strong className="text-indigo-600">webs a medida</strong> cuando tu negocio necesita algo único: 
            desde la arquitectura hasta la documentación técnica. Todo con un objetivo claro: 
            <em>que tu presencia digital venda mejor</em>.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
