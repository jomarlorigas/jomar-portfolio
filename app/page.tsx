import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <ParticlesBackground />

      <main className="text-foreground">

        <Hero />

        <Skills />

        <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
          <Reveal>
            <h2 className="text-4xl font-bold mb-14 text-center">
              Projects
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard title="Workout App" description="React Native fitness app." />
            <ProjectCard title="Spin Reward System" description="Firebase gamified rewards." />
            <ProjectCard title="Portfolio Website" description="Next.js animated portfolio." />
          </div>
        </section>

        <Certificates />

      </main>
    </>
  );
}
