import Hero from "@/components/Hero";
// import ProjectList from "@/components/ProjectList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-10">
      <Hero />
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-200">Projects</h2>
        {/* <ProjectList /> */}
      </section>
    </main>
  );
}
