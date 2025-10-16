"use client";

const Home = () => {
  return (
    <section id="home" className="bg-gray-50 text-gray-900 pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 transition-colors duration-200 hover:text-indigo-600">
          Desarrollo web profesional, sin vueltas
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Ayudo a jóvenes profesionales y expertos a tener sitios rápidos, escalables y defendibles.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Agendar llamada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
