import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import {
  Award,
  BriefcaseBusiness,
  BrainCircuit,
  BadgeCheck,
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Oracle Certified",
    description: "Oracle Certified Associate, Java SE 7 Programmer",
  },
  {
    icon: BriefcaseBusiness,
    title: "8+ Years Experience",
    description: "Enterprise Java Backend Development",
  },
  {
    icon: BrainCircuit,
    title: "AI Buildathon",
    description: "Built AI Recruitment System & LinkedIn Content Generator",
  },
  {
    icon: BadgeCheck,
    title: "Enterprise Projects",
    description: "Worked with HSBC, Nordea, SBI & John Deere",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <SectionTitle
        title="Achievements"
        subtitle="Certifications and career highlights."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center"
            >
              <Icon className="mx-auto h-10 w-10 text-blue-400" />

              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}