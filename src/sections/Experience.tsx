import SectionTitle from "../ui/SectionTitle";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <SectionTitle
        title="Experience"
        subtitle="My professional journey"
      />

      <div className="space-y-8">
        {experiences.map((job) => (
          <div
            key={job.company}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">
                  {job.company}
                </h3>

                <p className="text-slate-300">
                  {job.role}
                </p>

                {job.client && (
                  <p className="text-slate-400">
                    Client: {job.client}
                  </p>
                )}
              </div>

              <div className="text-slate-400">
                {job.duration}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-300">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}