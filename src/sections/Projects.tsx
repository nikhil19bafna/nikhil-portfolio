import SectionTitle from "../ui/SectionTitle";
import { projects } from "../data/projects";
import { } from "lucide-react";
import { Code2, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <SectionTitle
        title="Featured Projects"
        subtitle="Projects that showcase my backend and AI engineering skills."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-300">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="mt-8 flex gap-6">
              <a
                href={project.github}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <Code2 size={18} />
                GitHub
              </a>

              <a
                href={project.demo}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <ExternalLink size={18} />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}