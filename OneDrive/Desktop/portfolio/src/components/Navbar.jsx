import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiMoon, HiSun, HiX } from "react-icons/hi";
import { navLinks } from "../data";

function Navbar({ darkMode, onToggleTheme, mobileOpen, onToggleMobile }) {
  return (
    <header className="glass sticky top-0 z-50 border-b border-slate-200/70 dark:border-slate-800/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Raviteja
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-slate-700 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className="hover-glow rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>
          <a
            href="https://www.github.com/ravitejamanthu"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-1 text-xl text-slate-700 transition hover:-translate-y-0.5 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/raviteja-manthu-64825b264"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-1 text-xl text-slate-700 transition hover:-translate-y-0.5 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <button
          type="button"
          onClick={onToggleMobile}
          className="rounded-md border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200 md:hidden"
          aria-label="Open mobile menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="glass border-t border-slate-200 px-4 py-4 dark:border-slate-800 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={onToggleMobile}
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-full border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
            <a
              href="https://www.github.com/ravitejamanthu"
              target="_blank"
              rel="noreferrer"
              className="text-lg text-slate-700 dark:text-slate-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/raviteja-manthu-64825b264"
              target="_blank"
              rel="noreferrer"
              className="text-lg text-slate-700 dark:text-slate-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
