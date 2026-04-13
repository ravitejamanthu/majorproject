import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const items = [
  'Research paper: "Bone Fracture Detection System" published in Journal of Neonatal Surgery, 2025.',
  "Completed Full Stack Java Developer training with hands-on work in Java, Spring Boot, React, and APIs."
];

function Achievements() {
  return (
    <section className="bg-slate-100/70 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Achievements" subtitle="Milestones in learning and innovation." />
        <div className="relative grid gap-5 md:grid-cols-2">
          <div className="absolute left-2 top-0 hidden h-full w-0.5 bg-gradient-to-b from-indigo-400 to-blue-500/20 md:block" />
          {items.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="card-premium hover-glow relative rounded-2xl md:ml-6"
            >
              <div className="flex items-start gap-3">
                <FaAward className="mt-1 text-indigo-600 dark:text-indigo-300" />
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
