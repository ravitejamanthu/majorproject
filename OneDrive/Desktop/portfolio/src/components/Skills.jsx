import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className="bg-slate-100/70 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Skills" subtitle="Core technologies and tools I work with." />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-premium hover-glow"
            >
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                    >
                      <Icon />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
