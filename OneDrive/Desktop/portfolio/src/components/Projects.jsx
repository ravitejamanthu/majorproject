import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeading
        title="Projects"
        subtitle="Premium project highlights with technologies and outcomes."
      />

      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -10, scale: 1.01 }}
            className="card-premium hover-glow group rounded-3xl p-7"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:from-indigo-500/20 dark:to-blue-500/20 dark:text-indigo-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href={project.demo || "#"}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:bg-slate-800"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
