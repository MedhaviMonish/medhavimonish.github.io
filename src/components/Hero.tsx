export default function Hero() {
  return (
    <section className="relative text-center max-w-3xl mx-auto py-16 px-4">
      {/* Hero content */}
      <h1 className="text-5xl font-extrabold text-gray-300 mb-4">
        Medhavi Monish
      </h1>
      <p className="text-xl text-gray-400 mb-6">
        <span className="text-ember">#AIBlacksmith</span> forging intelligence from scratch — one neuron, one kernel at a time.
      </p>
      <p className="text-md text-gray-400 mb-6">
        Builder of custom ML engines, modular AI lifeforms, and reasoning systems that challenge assumptions.<br />
        Sometimes with tools. Often from scratch. Always with intent.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
        >
          View My Work
        </a>
        <a
          href="#blogs"
          className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
        >
          View My Blogs
        </a>
        <a
          href="#footer"
          className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
        <a
          href="/Medhavi_Monish_Resume.pdf" // or the hosted PDF path
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
