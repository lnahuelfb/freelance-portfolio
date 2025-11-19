"use client";
import { useState, Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Divition from "@/components/ui/Divition";

const services: {
  title: string;
  description: string;
  type: "landing" | "portfolio" | null;
}[] = [
    {
      title: "Landing pages que convierten",
      description:
        "Diseño y desarrollo de landings rápidas, optimizadas para SEO y pensadas para captar leads y clientes.",
      type: "landing",
    },
    {
      title: "Portfolios profesionales",
      description:
        "Portfolios únicos que muestran tu trabajo con claridad y estilo. Layouts quirúrgicos, animaciones sutiles y contacto integrado.",
      type: "portfolio",
    },
    {
      title: "Webs a medida",
      description:
        "Soluciones web escalables y trazables, adaptadas a tu negocio. Desde la arquitectura hasta la documentación técnica.",
      type: null,
    },
  ];

const projectExamples = {
  landing: [
    {
      title: "Landing App Finanzas",
      description:
        "Página de conversión para una app de finanzas personales, con layout quirúrgico y CTA optimizado.",
      href: "/landing/finanzas",
    },
    {
      title: "Landing Restaurante Japonés",
      description:
        "Landing institucional para restaurante japonés especializado en ramen artesanal. Menú, estética visual y reserva online.",
      href: "/landing/ramen",
    },
  ],
  portfolio: [
    {
      title: "Portfolio Arquitecto de Interiores",
      description:
        "Presentación visual de proyectos arquitectónicos con renders 3D, planos interactivos y testimonios de clientes. Un portfolio que transmite confianza y profesionalismo desde el primer scroll.",
      href: "/portfolio/arquitecto",
    },
    {
      title: "Portfolio Diseñadora UX/UI",
      description:
        "Muestra de interfaces digitales con casos de estudio, prototipos navegables y métricas de impacto en conversión. Un portfolio pensado para vender ideas y diferenciarse en el mercado.",
      href: "/portfolio/uxui",
    },
  ]
};

const Services = () => {
  const [modalType, setModalType] = useState<"landing" | "portfolio" | null>(null);

  const openModal = (type: "landing" | "portfolio") => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <section
        id="services"
        aria-label="Servicios"
        className="bg-gray-50 text-gray-900 pt-24 pb-20 px-4 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight mb-8" // más espacio debajo del título
          >
            Servicios que ofrezco
          </motion.h2>
          <Divition />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 text-base mt-16 mb-16 max-w-2xl mx-auto"
          >
            Cada proyecto está diseñado para ser <strong>modular, trazable y defendible</strong>.
            Mi objetivo es que tu web no solo se vea bien, sino que <em>genere resultados reales</em>.
          </motion.p>


          <div className="grid gap-8 md:grid-cols-3 text-left">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-white shadow-sm rounded-md p-6 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                {service.type && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => openModal(service.type!)}
                    className="mt-auto inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Ver ejemplos
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal dinámico */}
      <Transition show={modalType !== null} as={Fragment}>
        <Dialog onClose={closeModal} className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 space-y-6">
                <Dialog.Title className="text-2xl font-bold text-center text-indigo-600">
                  {modalType === "landing"
                    ? "Ejemplos de Landing Pages"
                    : "Ejemplos de Portfolios"}
                </Dialog.Title>

                <div className="space-y-4">
                  {modalType &&
                    projectExamples[modalType!].map((project, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {project.description}
                        </p>
                        <Link
                          href={project.href}
                          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                        >
                          Ver
                        </Link>
                      </div>
                    ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={closeModal}
                    className="text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer"
                  >
                    Volver al inicio
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Services;
