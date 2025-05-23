import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/bg-home.png')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 px-4 py-10 text-pale">
        <Hero />
        <section id="projects" className="mt-16">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-700">Projects</h2>
          <ProjectList />
        </section>
      </div>
    </main>
  );
}
