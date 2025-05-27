"use client";

export default function BlogJsonToYaml() {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/bg-home.png')" }}>
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <main className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-gray-200">
        <h1 className="text-4xl font-bold mb-4 text-ember">
          Why I Moved from JSON to YAML for LLM Tool Calls
        </h1>
        <p className="text-sm text-gray-500 mb-10 border-b border-gray-700 pb-2">
          May 2025 · #LLM #YAML #Optimization
        </p>

        <p className="mb-6 leading-relaxed">
          At first glance, JSON seems like the obvious choice for structured data — it's everywhere, it's easy, it's clean.
          But when you're dealing with large language models (LLMs), especially in production or tool-calling setups, JSON starts showing cracks.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-ember">1. JSON Was Costing Me Tokens</h2>
        <p className="mb-6 leading-relaxed">
          Each brace, quote, and comma in JSON adds to your token count. When using OpenAI or any transformer-based model,
          token limits matter. They cost money. They affect latency. YAML, by contrast, removes much of that structural noise.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-ember">2. YAML Reads Like a Prompt</h2>
        <p className="mb-6 leading-relaxed">
          YAML aligns more closely with how LLMs interpret prompts. It's indentation-based, minimal, and resembles natural note-taking.
          This often results in better parsing and fewer generation errors from the model.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-ember">3. Easier Partial Extraction</h2>
        <p className="mb-6 leading-relaxed">
          If the model crashes or outputs an incomplete result, it's much easier to extract usable YAML with partial keys
          than to recover a broken JSON. That recovery process alone justified the switch in critical workflows.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-ember">4. Structured Yet Forgiving</h2>
        <p className="mb-6 leading-relaxed">
          YAML can tolerate slight inconsistencies or missing values better — the model doesn’t have to remember quotes around strings
          or commas between items. This flexibility leads to more resilient outputs.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-ember">5. Final Thoughts</h2>
        <p className="mb-6 leading-relaxed">
          YAML may not be the standard everywhere — but for LLMs, it's a hidden weapon. It’s not about popularity.
          It’s about pragmatism. If it saves tokens, improves clarity, and handles failure better — I’ll take it.
        </p>

        <blockquote className="border-l-4 border-ember pl-4 italic text-gray-400 mt-10">
          This blog is based on real frustrations and experiments I ran while building my own LLM pipelines.
        </blockquote>
      </main>
    </div>
  );
}
