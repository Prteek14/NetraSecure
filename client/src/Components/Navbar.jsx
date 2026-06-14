import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];
  const desktopLinkClass =
    "rounded px-3 py-2 text-md font-medium transition-colors duration-200 hover:bg-sky-500/15 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400";
  const mobileLinkClass =
    "block rounded px-3 py-3 font-medium transition-colors duration-200 hover:bg-sky-500/15 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400";

  return (
    <nav className=" left-0 right-0 z-50 fixed inset-x-0 top-0  flex w-full items-center justify-between border-b border-sky-500 bg-transparent p-2 px-6 backdrop-blur-lg">
      <img src="./Netra_logo.webp" alt="Site_logo" className="w-20 h-20 rounded-full" />

      <ul className="hidden w-2/3 items-center justify-end gap-4 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={desktopLinkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded border border-sky-500 text-xl text-white transition-colors duration-200 hover:bg-sky-500/15 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 md:hidden"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isMenuOpen && (
        <ul className="absolute left-0 right-0 top-full flex flex-col border-b border-sky-500 bg-slate-950/95 px-6 py-4 backdrop-blur-lg md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={mobileLinkClass}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
