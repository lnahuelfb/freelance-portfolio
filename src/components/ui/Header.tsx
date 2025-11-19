"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div whileHover={{ color: "#4f46e5" }} transition={{ duration: 0.2 }}>
    <Link
      href={href}
      className="relative px-1 after:content-[''] 
        after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-indigo-500 after:w-0 
        after:transition-all after:duration-200 hover:after:left-0 hover:after:w-full"
    >
      {children}
    </Link>
  </motion.div>
);

const links = [
  { name: "Inicio", href: "/#home" },
  { name: "Servicios", href: "/#services" },
  { name: "Sobre mí", href: "/#about" },
  { name: "Contacto", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      role="banner"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white text-gray-900 shadow-md fixed w-full z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Marca personal */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl font-bold tracking-tight transition-colors duration-200 hover:text-indigo-600"
        >
          <Link href="/#home">Nahuel Beschtedt</Link>
        </motion.h1>

        {/* Navegación desktop */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden md:flex space-x-6 text-sm font-medium tracking-wide"
        >
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Menú móvil */}
        <div className="md:hidden">
          <Menu as="div" className="relative">
            <Menu.Button
              aria-label="Abrir menú"
              onClick={() => setIsOpen(true)}
              className="text-3xl"
            >
              ☰
            </Menu.Button>

            <Transition
              as={Fragment}
              show={isOpen}
              enter="transition duration-300"
              enterFrom="opacity-0 scale-95 -translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="transition duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 -translate-y-4"
            >
              <Menu.Items
                static
                className="fixed inset-0 bg-white text-gray-900 shadow-lg flex flex-col items-center justify-center space-y-10 text-2xl"
              >
                <button
                  aria-label="Cerrar menú"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-4xl"
                >
                  ✕
                </button>

                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-indigo-600 transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
