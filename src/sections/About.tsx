"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 text-gray-900 pt-24 pb-20 px-4 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10">

        {/* Avatar animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-bold"
        >
          LF
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

        {/* Separador */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-1 mx-auto bg-indigo-500 rounded-full"
        />

        {/* Texto narrativo */}
        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
          {[
            "Soy arquitecto y desarrollador full-stack freelance. Refactorizo sistemas legacy como quien opera sin anestesia: modularizo, documento y dejo trazabilidad quirúrgica en cada helper, migración o layout.",
            "Me especializo en migraciones sin deuda, validaciones estructurales, visualización granular y flows frontend/backend que no dependen de frontends rotos. Cada componente que diseño está pensado para anticipar objeciones de QA, auditoría o clientes exigentes.",
            "También diseño portfolios y landing pages que transmiten profesionalismo desde el primer scroll. Layouts claros, animaciones sutiles, semántica visual defendible.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * i }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
