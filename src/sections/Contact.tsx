"use client";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Acá iría la lógica de envío (API, servicio externo, etc.)
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 text-gray-900 pt-24 pb-20 px-4 scroll-mt-24"
    >
      <div className="max-w-xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Contacto</h2>
        <div className="w-12 h-1 mx-auto bg-indigo-500 rounded-full" />

        <p className="text-base text-gray-700 leading-relaxed">
          Si tenés un proyecto en mente o querés mejorar tu sitio actual, completá el formulario y te respondo sin vueltas.
        </p>

        {submitted ? (
          <p className="text-green-600 font-semibold">Gracias por tu mensaje. Te responderé pronto.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="block w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Enviar mensaje
            </button>
          </form>

        )}
      </div>
    </section>
  );
};

export default Contact;
