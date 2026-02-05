"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Firebase", level: 75 },
  { name: "React Native", level: 70 },
];

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-28">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Skills
      </h2>

      <div className="space-y-6">
        {skills.map((skill, i) => (
          <div key={i}>
            <p className="mb-2">{skill.name}</p>

            <div className="w-full bg-card rounded-full h-3">
              <motion.div
                className="bg-primary h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
