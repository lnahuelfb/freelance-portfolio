"use client";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 text-gray-900 pt-24 pb-20 px-4 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10">
        {/* Avatar o ícono */}
        <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-bold">
          LF
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold tracking-tight">
          Sobre mí
        </h2>

        {/* Separador */}
        <div className="w-12 h-1 mx-auto bg-indigo-500 rounded-full" />

        {/* Texto narrativo */}
        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
          <p>
            Soy arquitecto y desarrollador full-stack freelance. Refactorizo sistemas legacy como quien opera sin anestesia: modularizo, documento y dejo trazabilidad quirúrgica en cada helper, migración o layout.
          </p>
          <p>
            Me especializo en migraciones sin deuda, validaciones estructurales, visualización granular y flows frontend/backend que no dependen de frontends rotos. Cada componente que diseño está pensado para anticipar objeciones de QA, auditoría o clientes exigentes.
          </p>
          <p>
            También diseño portfolios y landing pages que transmiten profesionalismo desde el primer scroll. Layouts claros, animaciones sutiles, semántica visual defendible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
