import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <p className="mb-4 text-blue-400">👋 Hello, I'm</p>

        <h1 className="mb-4 text-6xl font-bold">
          Nikhil <span className="text-blue-400">Bafna</span>
        </h1>

        <h2 className="mb-6 text-2xl text-slate-300">
          Senior Java Backend Engineer
        </h2>

        <p className="mb-10 text-lg text-slate-400">
          Building enterprise Java applications and AI-powered workflow
          automation using Spring Boot, Generative AI, and n8n.
        </p>

        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700">
            <Download size={18} />
            Resume
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-blue-500 px-6 py-3 hover:bg-blue-600">
            Projects
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}