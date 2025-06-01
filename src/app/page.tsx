"use client";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import BlogList from "@/components/BlogList";

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/bg-home.png')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 px-4 py-10 text-pale">
        <Hero />
        <section id="about" className="mt-16 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-700">Why I Build</h2>
          <p className="text-gray-400 text-md leading-relaxed">
            I don’t build for academia. I build for clarity.  
            Each project here exists because something felt wrong — and I had to fix it.  
            This isn’t about being right. It’s about creating something better than before.
          </p>
        </section>
        <section id="projects" className="mt-16">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-700">Projects</h2>
          <ProjectList />
        </section>
        <section id="blogs" className="mt-20">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-700">Blogs</h2>
          <BlogList />
        </section>
        <footer  id="footer" className="mt-24 text-center text-sm text-gray-400 border-t border-gray-700 pt-6 pb-1">
          <p>© {new Date().getFullYear()} Medhavi Monish — <span className="text-ember font-semibold">#AIBlacksmith</span></p>
          <div className="mt-2 space-x-4">
            <a href="mailto:monishmedhavi@gmail.com" className="hover:underline">
              Email
            </a>
            <a href="https://github.com/MedhaviMonish" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/medhavi-monish-a327ba169/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href="/Medhavi_Monish_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Résumé
            </a>
          </div>
        </footer>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-ember text-black px-4 py-2 rounded-full shadow-lg hover:bg-orange-400 transition"
        >
          ↑ Top
        </button>
      </div>
    </main>
  );
}
