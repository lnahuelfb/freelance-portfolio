"use client";
import Logo from './logo'
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Target } from "lucide-react";
import Link from "next/link";

const beneficios = [
  {
    title: "Importación bancaria",
    desc: "Sincronizá tus movimientos con trazabilidad total. Sin duplicados ni errores silenciosos.",
    icon: <TrendingUp className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Objetivos quirúrgicos",
    desc: "Definí metas y visualizá tu progreso con granularidad. Nada de barras decorativas.",
    icon: <Target className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Privacidad defendible",
    desc: "Tus datos no se comparten. Punto. Seguridad sin marketing.",
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
  },
];

const testimonios = [
  {
    quote: "Por fin una herramienta que no me obliga a exportar a Excel para entender mis gastos.",
    author: "Martín R., auditor financiero",
  },
  {
    quote: "La única app que no me vende humo. Los datos están, y son defendibles.",
    author: "Sofía G., desarrolladora freelance",
  },
];

const comparativa = [
  {
    label: "🧾 Excel",
    badge: "Manual",
    points: ["Sin alertas", "Sin proyección", "Sin privacidad", "Exportación constante"],
    highlight: false,
  },
  {
    label: "🎨 Apps genéricas",
    badge: "Decorativas",
    points: ["Sin trazabilidad", "Sin control real", "Con marketing", "Datos compartidos"],
    highlight: false,
  },
  {
    label: "FinanzApp",
    badge: "Quirúrgica",
    points: ["Automática", "Alertas defendibles", "Proyección granular", "Privacidad real"],
    highlight: true,
  },
]

const faq = [
  {
    q: "¿Necesito vincular mi cuenta bancaria?",
    a: "No es obligatorio. Podés cargar tus movimientos manualmente o importar desde archivo.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. No se comparten ni se almacenan en servidores externos. Todo queda en tu dispositivo.",
  },
  {
    q: "¿Tiene costo?",
    a: "No. FinanzApp es gratuita y sin letra chica. No pedimos tarjeta.",
  },
]


const FinanzasLanding = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono flex flex-col">

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/80 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Branding */}
          <Link href="#inicio" className="flex items-center gap-2 group">
            <Logo size={24} />
            <span className="text-green-400 text-base font-mono tracking-wide group-hover:text-green-300 transition">
              FinanzApp
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex gap-6 text-xs text-neutral-500 font-mono">
            <a href="#inicio" className="hover:text-neutral-300 transition">Inicio</a>
            <a href="#beneficios" className="hover:text-neutral-300 transition">Beneficios</a>
            <a href="#validacion" className="hover:text-neutral-300 transition">Validación</a>
            <a href="#comparativa" className="hover:text-neutral-300 transition">Comparativa</a>
            <a href="#cta" className="hover:text-neutral-300 transition">Empezar</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 px-6 bg-neutral-950" id='inicio'>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-green-400 leading-tight">
              Controlá tus finanzas<br />sin fórmulas mágicas
            </h2>
            <p className="text-base text-neutral-400">
              FinanzApp te muestra lo que importa: ingresos, gastos, objetivos y alertas. Sin humo. Sin distracciones.
            </p>
            <ul className="list-disc list-inside text-sm text-neutral-500 space-y-2">
              <li>Balance mensual con proyección</li>
              <li>Alertas de gasto innecesario</li>
              <li>Comparativas entre períodos</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Empezar sin tarjeta
            </motion.button>
          </motion.div>

          <motion.div
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 shadow-md space-y-4"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-500">Balance actual</span>
              <span className="text-green-400 font-semibold">$12.450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-500">Gastos este mes</span>
              <span className="text-red-400 font-semibold">−$3.200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-500">Objetivo ahorro</span>
              <span className="text-green-400 font-semibold">$5.000</span>
            </div>
            <div className="mt-6 h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
            </div>
            <motion.p
              className="text-xs text-neutral-500 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              60% alcanzado
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-6 py-20 bg-neutral-900 border-t border-neutral-800" id='beneficios'>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-green-400">¿Por qué FinanzApp?</h2>
            <p className="text-sm text-neutral-400">
              Porque no es otro dashboard decorativo. Es una herramienta quirúrgica para tomar decisiones reales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {beneficios.map((item, i) => (
              <motion.div
                key={i}
                className="bg-neutral-950 border border-neutral-800 rounded-md p-6 shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              >
                <div className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h3 className="text-green-400 font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validación social */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-neutral-950 border-t border-neutral-800" id='validacion'>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-green-400">Validación sin marketing</h2>
            <p className="text-sm text-neutral-400">
              FinanzApp ya fue usada por equipos técnicos, auditores y usuarios obsesionados con la trazabilidad.
            </p>
          </div>

          {/* Métricas */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { label: "Movimientos procesados", value: "1.2M+" },
              { label: "Alertas generadas", value: "87.000+" },
              { label: "Objetivos alcanzados", value: "42.500+" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-neutral-900 border border-neutral-800 rounded-md p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              >
                <p className="text-3xl font-bold text-green-400">{item.value}</p>
                <p className="text-sm text-neutral-500 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonios */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonios.map((item, i) => (
              <motion.div
                key={i}
                className="bg-neutral-900 border border-neutral-800 rounded-md p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 * i }}
              >
                <p className="text-sm text-neutral-400 italic">“{item.quote}”</p>
                <p className="text-xs text-neutral-500 mt-4 text-right">— {item.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Comparativa */}

      <section className="px-6 py-24 bg-neutral-950 border-t border-neutral-800" id="comparativa">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-green-400">FinanzApp vs. el resto</h2>
            <p className="text-sm text-neutral-400">
              No compite por estética. Compite por criterio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {comparativa.map((col, i) => (
              <motion.div
                key={i}
                className={`border rounded-lg p-6 shadow-sm ${col.highlight ? "border-green-600 bg-neutral-900" : "border-neutral-800 bg-neutral-950"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              >
                <div className="flex justify-between items-center mb-4">
                  {col.highlight ? (
                    <div className="flex items-center gap-2">
                      <Logo size={24} />
                      <h3 className="text-base font-semibold text-green-400">{col.label}</h3>
                    </div>
                  ) : (
                    <h3 className="text-base font-semibold text-neutral-300">{col.label}</h3>
                  )}
                  <span
                    className={`text-xs font-mono ${col.highlight ? "text-green-400" : "text-neutral-500"
                      }`}
                  >
                    {col.badge}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-neutral-400">
                  {col.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}

      <section className="px-6 py-20 bg-neutral-950 border-t border-neutral-800" id='faq'>
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-green-400 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
              >
                <h3 className="text-green-400 font-semibold">{item.q}</h3>
                <p className="text-sm text-neutral-400 mt-1">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA final */}
      <section className="text-center px-6 py-24 bg-gradient-to-b from-neutral-950 to-neutral-900 border-t border-neutral-800 shadow-inner" id='cta'>
        <motion.h2
          className="text-3xl font-bold text-green-400"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Probala sin compromiso
        </motion.h2>
        <motion.p
          className="text-sm text-neutral-500 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          No pedimos tarjeta. Solo tu curiosidad.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition shadow-lg"
        >
          Empezar ahora
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-800 py-6 px-6 text-center text-xs text-neutral-600 bg-neutral-950">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Logo size={24} />
          <span className="text-green-400 font-mono text-xs">FinanzApp</span>
        </div>
        <p>© 2025 FinanzApp. Datos privados, sin drama.</p>
        <span className="text-neutral-500">Landing SPA con trazabilidad visual y semántica defendible</span>
      </footer>

    </div>
  );
};

export default FinanzasLanding;
