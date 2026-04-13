import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeading title="Contact" subtitle="Let us connect and build something impactful." />
      <div className="grid gap-7 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="card-premium hover-glow"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contact Information</h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-600 dark:text-indigo-300" />
              <a href="mailto:manthuravi2004@gmail.com">manthuravi2004@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-indigo-600 dark:text-indigo-300" />
              <a href="tel:+919398556522">9398556522</a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-indigo-600 transition hover:scale-110 dark:text-indigo-300" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/raviteja-manthu-64825b264"
                className="transition hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-indigo-600 transition hover:scale-110 dark:text-indigo-300" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/ravitejamanthu"
                className="transition hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          whileHover={{ y: -4 }}
          className="card-premium hover-glow"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send a Message</h3>
          <div className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-sm text-slate-800 outline-none ring-indigo-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-sm text-slate-800 outline-none ring-indigo-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded-lg border border-slate-300 bg-white/80 px-4 py-2.5 text-sm text-slate-800 outline-none ring-indigo-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
            <button
              type="button"
              className="hover-glow rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
