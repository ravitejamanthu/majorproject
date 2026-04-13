import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="floating-orb absolute left-16 top-20 h-52 w-52 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/25" />
        <div className="floating-orb-delay absolute right-14 top-36 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-400/20" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-20 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
            Full Stack Java Developer
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            <span className="text-gradient">Raviteja Manthu</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600 dark:text-slate-300 md:text-lg">
            Building scalable web applications using Java, Spring Boot, and React
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-gradient hover-glow">
              View Projects
            </a>
            <a href="/Raviteja-Manthu-Resume.txt" download className="btn-outline hover-glow">
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-3xl p-7 shadow-2xl shadow-indigo-200/30 dark:shadow-black/30"
        >
          <div className="mb-6 flex justify-center">
            <img
              src="/profile.png"
              alt="Raviteja Manthu profile"
              className="h-44 w-44 rounded-2xl border border-indigo-300/60 object-cover shadow-lg shadow-indigo-400/20 dark:border-indigo-400/40"
            />
          </div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Professional Focus</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>- Java and Spring Boot backend architecture</li>
            <li>- React.js based responsive frontend development</li>
            <li>- Secure authentication and REST API integration</li>
            <li>- Performance-focused full-stack implementation</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
