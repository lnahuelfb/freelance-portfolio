"use client";
import { motion } from "framer-motion";
import Divition from "@/components/ui/Divition";

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Hero principal"
      className="bg-gray-50 text-gray-900 pt-32 pb-28 px-4 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight leading-tight transition-colors duration-200 hover:text-indigo-600"
        >
          Landings y portfolios <span className="text-indigo-600">que venden</span>
        </motion.h1>

        {/* Separador */}
        <Divition/>
        
        {/* Subtítulo con valor diferencial */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-16"
        >
          Construyo <strong>landing pages</strong> y <strong>portfolios profesionales</strong> que transmiten autenticidad y convierten visitas en clientes.  
          Nada de plantillas genéricas: cada layout está pensado para <em>defender tu marca</em>, con modularidad, spacing claro y narrativa persuasiva.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md font-semibold text-lg"
          >
            Agendar llamada
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block border border-indigo-600 text-indigo-600 px-8 py-4 rounded-md hover:bg-indigo-50 transition-colors duration-200 font-semibold text-lg"
          >
            Ver servicios
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
