import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<>
{/* Top Navbar */}
<nav className="fixed top-0 left-0 z-50 w-full h-16   flex items-center justify-between px-4 md:px-12 backdrop-blur
border-b border-emerald-400/40 shadow-[0_10px_24px_-14px_rgba(52,211,153,0.8)] transition-colors
bg-slate-100/80 text-neutral-900 dark:bg-neutral-900/80 dark:text-white
"
      >
        {/* Logo */}
        <a href="#home">
          <h1 className="text-2xl font-bold tracking-wide">AN</h1>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#home" className="hover:text-emerald-400">Home</a>
          <a href="#about" className="hover:text-emerald-400">About</a>
          <a href="#skills" className="hover:text-emerald-400">Skills</a>
          <a href="#project" className="hover:text-emerald-400">Projects</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition"
        >
          <Menu />
        </button>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* Mobile Side Menu */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-full w-64
          flex flex-col justify-between
          px-6 py-6
          transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          bg-slate-100 text-neutral-900
          dark:bg-neutral-950 dark:text-white
        `}
      >
        <div>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setMenuOpen(false)}>
              <X />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-lg">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#project" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
