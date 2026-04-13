import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center">
      <div className="mb-4 flex items-center justify-center gap-5">
        <a
          href="https://www.github.com/ravitejamanthu"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-slate-300 transition hover:-translate-y-0.5 hover:text-indigo-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/raviteja-manthu-64825b264"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-slate-300 transition hover:-translate-y-0.5 hover:text-indigo-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm text-slate-400">© 2026 Raviteja Manthu</p>
    </footer>
  );
}

export default Footer;
