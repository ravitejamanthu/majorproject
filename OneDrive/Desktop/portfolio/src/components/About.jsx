import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeading title="About" subtitle="Professional summary and profile overview." />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        whileHover={{ y: -4 }}
        className="card-premium hover-glow rounded-3xl p-8"
      >
        <p className="text-base leading-8 text-slate-700 dark:text-slate-300 md:text-lg">
          I am a Full Stack Java Developer with hands-on experience in Java, Spring Boot, React,
          and REST APIs. I focus on building scalable backend systems and efficient web
          applications.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
