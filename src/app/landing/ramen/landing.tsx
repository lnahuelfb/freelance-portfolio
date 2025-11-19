"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ButtonHome from "@/components/ui/ButtonHome";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur bg-red-700/90 border-b border-red-800"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Branding */}
        <Link href="#inicio" className="flex items-center gap-2 group" aria-label="Ir al inicio">
          <span className="text-white text-lg font-bold tracking-wide group-hover:text-red-100 transition">
            Ramen Izanami
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex gap-6 text-sm text-red-100 font-semibold"
          aria-label="Main navigation"
        >
          <a href="#inicio" className="hover:text-white transition">Inicio</a>
          <a href="#about" className="hover:text-white transition">Sobre nosotros</a>
          <a href="#menu" className="hover:text-white transition">Menú</a>
          <a href="#contact" className="hover:text-white transition">Reservas</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-red-700 border-t border-red-800 px-6 py-4 space-y-4 text-sm text-red-100 font-semibold"
            aria-label="Mobile navigation"
          >
            <a href="#about" className="block hover:text-white transition">Sobre nosotros</a>
            <a href="#menu" className="block hover:text-white transition">Menú</a>
            <a href="#contact" className="block hover:text-white transition">Reservas</a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Botón flotante para volver al portfolio */}
      <Link
        href="https://nahuelfb.dev"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 md:top-4 md:left-4 md:translate-x-0 z-50 flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-full shadow-md hover:bg-red-700 transition text-xs font-mono"
        aria-label="Volver al portfolio"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Portfolio</span>
      </Link>
    </header>
  );
};

const Hero = () => (
  <section
    id="inicio"
    className="relative bg-white text-red-700 pt-32 pb-24 px-4 text-center scroll-mt-24"
    style={{
      backgroundImage: "url('/ramen-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center center", // fuerza el centrado
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay neutro para contraste */}
    <div className="absolute inset-0 bg-black/30 z-0" />

    <div className="relative z-10 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-red-600"
      >
        Ramen Izanami
      </motion.h1>

      {/* Kanji/Japonés debajo del nombre */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-2 text-2xl md:text-3xl font-semibold text-white"
      >
        ラーメン イザナミ
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 text-lg text-white max-w-2xl mx-auto"
      >
        Auténtico <strong>ramen japonés</strong> en Buenos Aires. Caldos cocidos por horas, fideos artesanales y una experiencia inspirada en los <strong>izakaya de Tokio</strong>.
      </motion.p>

      <motion.a
        href="#menu"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-10 inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold"
      >
        Ver menú
      </motion.a>
    </div>
  </section>
);
const AboutUs = () => (
  <section
    id="about"
    className="relative bg-[#fdfaf6] text-gray-900 py-24 px-4 scroll-mt-24 overflow-hidden"
  >
    {/* Fondo decorativo estilo papel japonés */}
    <div className="absolute inset-0 bg-paper-jap opacity-10 pointer-events-none z-0" />

    <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Imagen ambientación japonesa */}
      <motion.img
        src="/images/interior-japones.jpg"
        alt="Interior restaurante japonés tradicional"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-xl shadow-lg object-cover w-full h-[400px]"
      />

      {/* Texto narrativo */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-left"
      >
        <h2 className="text-3xl font-bold tracking-tight text-red-700">
          Sobre Ramen Izanami
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          En <span className="font-semibold text-red-600">Ramen Izanami</span> honramos la tradición japonesa con un ritual gastronómico: <strong>caldos profundos</strong> que respiran durante horas, <strong>fideos hechos a mano</strong> y bowls servidos como ofrenda. Cada plato es un puente entre <strong>Buenos Aires</strong> y <strong>Tokio</strong>.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Nuestro espacio evoca los <strong>izakaya japoneses</strong>: madera oscura, faroles cálidos y vajilla artesanal. Aquí no solo comés ramen: vivís un instante japonés, íntimo y ceremonial.
        </p>
      </motion.div>
    </div>
  </section>
);

const ramenItems = [
  {
    name: "Shoyu Ramen",
    desc: "Caldo de soja, fideos artesanales, chashu, huevo marinado y cebolla verde.",
    img: "/images/shoyu.jpg",
    spicy: 1,
  },
  {
    name: "Miso Ramen",
    desc: "Base de miso rojo, maíz, manteca, fideos gruesos y alga nori.",
    img: "/images/miso.webp",
    spicy: 2,
  },
  {
    name: "Tonkotsu Ramen",
    desc: "Caldo de cerdo cocido 12 horas, fideos finos, chashu y cebolla verde.",
    img: "/images/tonkotsu.jpg",
    spicy: 3,
  },
  {
    name: "Veggie Ramen",
    desc: "Caldo de hongos, tofu grillado, fideos de arroz y brotes de bambú.",
    img: "/images/veggie.webp",
    spicy: 0,
  },
];

const SpicyMeter = ({ level }: { level: number }) => (
  <div className="flex items-center gap-1 mt-2">
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${i < level ? "bg-red-600" : "bg-gray-300"
          }`}
      />
    ))}
    <span className="ml-2 text-sm text-gray-500">Picante</span>
  </div>
);

const Menu = () => (
  <section id="menu" className="bg-white text-gray-900 py-24 px-4 scroll-mt-24">
    <div className="max-w-6xl mx-auto text-center space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold tracking-tight"
      >
        Menú de ramen japonés
      </motion.h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Elegí entre nuestras variedades de <strong>ramen tradicional japonés</strong>: desde el clásico <strong>Shoyu</strong> hasta el intenso <strong>Tonkotsu</strong>, pasando por el <strong>Miso</strong> y opciones <strong>veggie</strong>. Cada bowl está preparado con ingredientes frescos y técnicas auténticas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-left">
        {ramenItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-red-700">{item.name}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
              <SpicyMeter level={item.spicy} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


const Contact = () => (
  <section
    id="contact"
    className="bg-red-50 text-gray-900 py-24 px-4 scroll-mt-24"
  >
    <div className="max-w-xl mx-auto text-center space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold tracking-tight text-red-700"
      >
        Reservá tu mesa en Ramen Izanami
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-base text-gray-700"
      >
        Viví la experiencia del <strong>ramen japonés en Buenos Aires</strong>.
        Completá el formulario y asegurá tu lugar en nuestro espacio inspirado en los
        <strong> izakaya de Tokio</strong>. Te esperamos con ramen caliente, hospitalidad japonesa y un ambiente íntimo.
      </motion.p>

      <form className="space-y-6 text-left">
        {/* Datos básicos */}
        <input type="text" placeholder="Nombre completo" required className="w-full px-4 py-3 border rounded-md" />
        <input type="email" placeholder="Email" required className="w-full px-4 py-3 border rounded-md" />
        <select required className="w-full px-4 py-3 border rounded-md">
          <option value="">Cantidad de personas</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6+">6 o más</option>
        </select>

        {/* Opcionales */}
        <label className="block text-sm font-medium text-gray-600">
          Fecha y hora de la reserva
        </label>
        <input
          type="datetime-local"
          required
          className="w-full px-4 py-3 border rounded-md"
        />
        <textarea placeholder="Mensaje adicional (opcional)" rows={3} className="w-full px-4 py-3 border rounded-md resize-none" />

        <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition font-semibold">
          Reservar mesa
        </button>
      </form>

    </div>
  </section>
);

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Menu />
        <Contact />
      </main>
      <ButtonHome
        href="https://nahuelfb.dev"
        label="Portfolio"
        bgColor="bg-red-600"
        textColor="text-white"
        borderColor="border-red-700"
        hoverBgColor="hover:bg-red-700"
        hoverTextColor="hover:text-yellow-100"
        fontClass="font-sans"
      />
    </>
  );
};
export default Landing;