"use client";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="relative px-1 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-indigo-500 after:w-0 after:transition-all after:duration-200 hover:after:left-0 hover:after:w-full hover:text-indigo-600"
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

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Nombre y año */}
        <div className="text-sm text-center md:text-left">
          <p className="font-semibold text-gray-900">
            <strong>Nahuel Beschtedt</strong>
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>

        {/* Navegación footer */}
        <nav
          role="navigation"
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium tracking-wide"
        >
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
};


export default Footer;