// components/Hero.jsx
"use client"; // for Next.js 13+ app directory, needed for client-side JS

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

export default function Hero() {
  const photoRef = useRef(null);

  useEffect(() => {
    if (photoRef.current) {
      VanillaTilt.init(photoRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.img
          ref={photoRef}
          src="/profile.png"
          alt="Jomar Lorigas"
          className="w-72 rounded-full border-4 border-primary shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I’m <span className="text-primary">Jomar Lorigas</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            IT Professional | Full-Stack Developer | BSIT Candidate (2026)
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-black transition"
            >
              Contact Me
            </a>
            <a
              href="/Jomar-Lorigas-CV.pdf"
              download
              className="border border-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
