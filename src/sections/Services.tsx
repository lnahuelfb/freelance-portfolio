"use client";

const services = [
  {
    title: "Landing pages que convierten",
    description:
      "Diseño y desarrollo de páginas rápidas, optimizadas y defendibles para captar leads y clientes.",
  },
  {
    title: "Portfolios personalizados",
    description:
      "Creamos portfolios únicos que reflejan tu marca personal o profesional, con layouts quirúrgicos y animaciones sutiles.",
  },
  {
    title: "Webs a medida",
    description:
      "Soluciones web escalables, trazables y adaptadas a tus necesidades. Desde la arquitectura hasta la documentación técnica.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-50 text-gray-900 pt-24 pb-20 px-4 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Servicios que ofrezco
        </h2>

        {/* Separador visual */}
        <div className="w-12 h-1 mx-auto bg-indigo-500 rounded-full mb-8" />

        <p className="text-gray-700 text-base mb-10">
          Cada proyecto está pensado para ser modular, trazable y defendible ante cualquier equipo o cliente.
        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-md p-6 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
