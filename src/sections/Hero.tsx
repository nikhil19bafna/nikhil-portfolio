import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <p className="mb-4 text-blue-400">👋 Hello, I'm</p>

       <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
  Nikhil <span className="text-blue-400">Bafna</span>
</h1>
        <p className="text-2xl mt-6 text-slate-300">

Senior Java Backend Engineer

</p>

<p className="mt-6 text-lg leading-8 text-slate-400">
  Designing scalable enterprise applications with Java & Spring Boot
  while building intelligent AI-powered workflow automation using
  Generative AI and n8n.
</p>

       
<a
  href="/resume.pdf"
  className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-700/30 transition duration-300 hover:scale-105 hover:bg-blue-500"
>
  <Download size={18} />
  Download Resume
</a>

<a
  href="#projects"
  className="flex items-center gap-2 rounded-xl border border-blue-500 px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-600"
>
  View Projects
  <ArrowRight size={18} />
</a>
<div className="mt-10 flex flex-wrap justify-center gap-5">

{[
"Java",

"Spring Boot",

"REST API",

"Generative AI",

"n8n",

"MySQL",

"Oracle"

].map((tech)=>(
<span

key={tech}

className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"

>

{tech}

</span>
))}

</div>

      </motion.div>
    </section>
  );
}