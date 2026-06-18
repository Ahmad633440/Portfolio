import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-3 font-semibold tracking-wide text-white"
          >

            <span className="hidden sm:inline text-lg">Ahmad Nazir</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative transition-all duration-300 hover:text-violet-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm text-violet-200 transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:bg-violet-500/20"
            >
              Contact
              <ArrowRight size={16} />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 text-white transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed top-0 left-0 z-50 h-full w-full max-w-xs border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl transition-all duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-6">
          <div>
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300/80">
                  Menu
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  Navigation
                </h2>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="rounded-xl p-2 transition-all duration-300 hover:bg-slate-900 hover:text-violet-300"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-3 text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-slate-200 transition-all duration-300 hover:bg-slate-900 hover:text-violet-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-xl">
            <p className="font-medium text-violet-300">
              Portfolio ready for next step
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Responsive layout, polished motion, and consistent design across
              every section.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

