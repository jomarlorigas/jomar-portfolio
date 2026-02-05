"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {
  const photoRef = useRef(null);

  useEffect(() => {
    if (photoRef.current) {
      VanillaTilt.init(photoRef.current, {
        max: 18,
        speed: 500,
        glare: true,
        "max-glare": 0.35,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* ================= Aurora Gradient Lighting ================= */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute w-[750px] h-[750px] bg-primary/20 blur-[160px] rounded-full top-[-150px] left-[-120px] animate-pulse" />
        <div className="absolute w-[650px] h-[650px] bg-secondary/20 blur-[150px] rounded-full bottom-[-120px] right-[-100px] animate-pulse" />
      </div>

      {/* ================= Grid Layout ================= */}
      <div className="grid md:grid-cols-2 gap-14 items-center z-10">

        {/* ================= Profile Image ================= */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-xl opacity-30 animate-pulse" />

            <Image
              src="/profile.png"
              alt="Jomar Lorigas"
              width={300}
              height={300}
              priority
              className="relative rounded-full border-4 border-primary shadow-2xl"
            />
          </div>
        </motion.div>

        {/* ================= Text Content ================= */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center md:text-left"
        >
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jomar Lorigas
            </span>
          </h1>

          {/* Typing Animation */}
          <p className="mt-6 text-textSub text-lg md:text-xl max-w-xl min-h-[40px]">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Next.js & React Specialist",
                "Mobile App Developer",
                "Firebase System Builder",
                "BSIT Candidate – 2026",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          {/* Description */}
          <p className="mt-4 text-textSub max-w-xl leading-relaxed">
            I build modern, scalable web and mobile applications with clean UI,
            smooth animations, and strong backend integration.
          </p>

          {/* ================= Buttons ================= */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Projects */}
            <a
              href="#projects"
              className="group relative bg-primary px-7 py-3 rounded-xl font-semibold text-white overflow-hidden transition"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-20 transition" />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="border border-primary px-7 py-3 rounded-xl text-primary hover:bg-primary hover:text-white transition"
            >
              Contact Me
            </a>

            {/* CV */}
            <a
              href="/Jomar-Lorigas-CV.pdf"
              download
              className="border border-secondary px-7 py-3 rounded-xl text-secondary hover:bg-secondary hover:text-black transition"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
