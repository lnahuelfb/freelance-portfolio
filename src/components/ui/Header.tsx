"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="relative px-1 after:content-[''] 
    after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-indigo-500 after:w-0 after:transition-all after:duration-200 
    hover:after:left-0 hover:after:w-full hover:text-indigo-600"
  >
    {children}
  </a>
);

const links = [
  { name: "Inicio", href: "#home" },
  { name: "Servicios", href: "#services" },
  { name: "Sobre mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header role="banner" className="bg-white text-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Nombre como marca personal, clickeable */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight transition-colors duration-200 hover:text-indigo-600"
        >
          Nahuel Beschtedt
        </a>

        {/* Navegación desktop */}
        <nav role="navigation" className="hidden md:flex space-x-6 text-sm font-medium tracking-wide">
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
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
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
                  <NavLink key={link.href} href={link.href}>
                    <span onClick={() => setIsOpen(false)}>{link.name}</span>
                  </NavLink>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
