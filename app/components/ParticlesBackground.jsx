"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#6366f1" },
          links: {
            enable: true,
            color: "#6366f1",
            opacity: 0.2,
          },
          move: { enable: true, speed: 1 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
