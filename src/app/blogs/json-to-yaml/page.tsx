"use client";

export default function BlogJsonToYaml() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/bg-home.png')" }}
    >
      <div className="w-full max-w-4xl bg-black/80 text-white p-10 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-ember mb-2">
          Why I Moved from JSON to YAML for LLM Tool Calls
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          May 2025 · #LLM #YAML #Optimization
        </p>
        <p className="mb-6">
          JSON seems clean — until you run into token cost, fragility, and model errors.
        </p>
        <h2 className="text-2xl font-semibold text-ember mb-2">1. YAML saves tokens</h2>
        <p className="mb-6">
          No braces. No quotes. Just structure. That’s fewer tokens and fewer surprises.
        </p>
        <blockquote className="border-l-4 border-ember pl-4 italic text-gray-400">
          The decision wasn’t emotional — it was practical.
        </blockquote>
      </div>
    </main>
  );
}
