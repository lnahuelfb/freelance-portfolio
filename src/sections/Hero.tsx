"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-50 text-gray-900 pt-32 pb-24 px-4 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Título principal */}
        <h1 className="text-5xl font-bold tracking-tight leading-tight transition-colors duration-200 hover:text-indigo-600">
          Desarrollo web profesional, sin vueltas
        </h1>

        {/* Separador visual */}
        <div className="w-12 h-1 mx-auto bg-indigo-500 rounded-full" />

        {/* Subtítulo */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Ayudo a jóvenes profesionales y expertos a tener sitios rápidos, escalables y defendibles. Cada línea de código está pensada para transmitir claridad, modularidad y criterio técnico.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Agendar llamada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
