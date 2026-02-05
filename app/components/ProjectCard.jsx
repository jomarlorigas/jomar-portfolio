"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function ProjectCard({ title, description }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }, []);

  return (
    <div
      ref={tiltRef}
      className="bg-card p-6 rounded-2xl hover:shadow-primary/30 hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-text-sub mt-3">{description}</p>
    </div>
  );
}
