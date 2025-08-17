"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Servicios", href: "#services" },
  { name: "Sobre mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

const Header = () => {
  return (
    <header className="bg-gray-800 text-white fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold cursor-pointer">Nahuel Fernandez</h1>

        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:underline transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu as="div" className="relative">
            <Menu.Button className="text-3xl">☰</Menu.Button>

            <Transition
              as={Fragment}
              enter="transition duration-300"
              enterFrom="translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition duration-200"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
            >
              <Menu.Items className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center space-y-10 text-2xl">
                <Menu.Button className="absolute top-6 right-6 text-4xl">✕</Menu.Button>
                {links.map((link) => (
                  <Menu.Item key={link.href}>
                    {({ active }) => (
                      <a
                        href={link.href}
                        className="relative px-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-yellow-400 after:w-0 after:transition-all after:duration-200 hover:after:left-0 hover:after:w-full"
                      >
                        {link.name}
                      </a>
                    )}
                  </Menu.Item>
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