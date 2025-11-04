"use client";
import { motion } from "framer-motion";
import Divition from "@/components/ui/Divition";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-50 text-gray-900 pt-32 pb-24 px-4 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight leading-tight transition-colors duration-200 hover:text-indigo-600"
        >
          Desarrollo web profesional, sin vueltas
        </motion.h1>

        {/* Separador visual animado */}
        <Divition />
        
        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          Ayudo a jóvenes profesionales y expertos a tener sitios rápidos, escalables y defendibles. Cada línea de código está pensada para transmitir claridad, modularidad y criterio técnico.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Agendar llamada
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
