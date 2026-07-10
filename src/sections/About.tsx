import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <SectionTitle
        title="About Me"
        subtitle="A brief introduction about my professional journey."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-xl border border-slate-800 bg-slate-900 p-8"
      >
        <p className="text-lg leading-8 text-slate-300">
          I'm a <span className="text-blue-400 font-semibold">Senior Java Backend Engineer</span> with
          over <span className="text-blue-400 font-semibold">8 years of experience</span> building
          scalable enterprise applications using Java, Spring Boot, REST APIs, Oracle, and MySQL.
        </p>

        <p className="mt-6 leading-8 text-slate-300">
          Throughout my career, I've worked with leading organizations including
          HCL Technologies, Capgemini, mPhatek, and Syntel, delivering solutions
          for banking, financial services, and enterprise clients.
        </p>

        <p className="mt-6 leading-8 text-slate-300">
          Recently, I've expanded my expertise into
          <span className="text-blue-400 font-semibold"> Generative AI</span>,
          workflow automation using
          <span className="text-blue-400 font-semibold"> n8n</span>, and
          AI-assisted business solutions, combining traditional backend engineering
          with modern AI technologies.
        </p>
      </motion.div>
    </section>
  );
}