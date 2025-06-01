"use client";
/* eslint-disable react/no-unescaped-entities */
import CodeBlock from "@/components/CodeBlock";

export default function BlogStreamingJSON() {
  return (
    <main className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-start py-20 px-4" style={{ backgroundImage: "url('/images/bg-home.png')" }}>
      <div className="w-full max-w-4xl bg-black/80 text-white p-10 rounded-xl shadow-md">
        <a href="/" className="text-sm text-gray-400 hover:text-white transition block mb-4">
          ← Back to Home
        </a>
        <h1 className="text-4xl font-bold text-ember mb-2">
        <a href="https://github.com/MedhaviMonish/Stream-JSON" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-base block mb-2">
          🔗 View on GitHub
        </a>
        Streaming JSON While Streaming from LLM
        </h1>

        <p className="mb-6 leading-relaxed">
          When generating structured responses from LLMs, streaming JSON is almost impossible. JSON parsing requires strict syntax — every quote, comma, and bracket must be perfectly placed. But when you stream output token-by-token, the structure is often incomplete mid-way. A missing brace or an unclosed string can break the whole parser.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">💥 The Problem</h2>
        <p className="mb-6 leading-relaxed">
          JSON is strict. If you're using OpenAI's streaming API and trying to render JSON in real-time, you can't do much until the full structure is delivered. That means the UI can't update until the model stops thinking — and that's frustrating.
          If your JSON affects how UI is rendered then you have to wait until the end, unlike text where you can stream freely without structural constraints.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">🔧 The Trick: Use YAML</h2>
        <p className="mb-6 leading-relaxed">
          YAML is more forgiving. It doesn’t require commas, brackets, or perfect nesting at every step. Here's what I did:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed mb-6">
          <li>Let the model output YAML instead of JSON</li>
          <li>Stream it token-by-token</li>
          <li>Try parsing it incrementally using a custom parser</li>
          <li>Merge whatever is valid into a full JSON template</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          In this code I have used <b>YamlTokenStreamer</b> to simulate token streaming.
          This class is purely for local testing — when using a real LLM with stream support (like OpenAI), you won’t need it.
          Just plug the rest of the logic into your streamed tokens, and you'll be able to produce fully structured JSON in real time — with `null` values where data is not yet available.
        </p>


        <h2 className="text-2xl font-bold text-ember mb-2">📦 The Template</h2>
        <CodeBlock language="json" code={`{
  "user": {"id": null, "name": null, "roles": []},
  "lastLogin": null
}`} />

        <h2 className="text-2xl font-bold text-ember mb-2">📡 Real-Time Merge</h2>
        <CodeBlock language="python" code={`buffer = ""
for chunk in openai.ChatCompletion.create(..., stream=True):
    token = chunk['choices'][0].delta.get('content')
    if token:
        buffer += token
        parsed, _ = try_partial_yaml_parse(buffer)
        merged = merge_yaml_into_template(template, parsed)
        print(merged)  # Always structured, even when partial`} />

        <h2 className="text-2xl font-bold text-ember mb-2">🧠 Bonus: Quote Heuristics</h2>
        <p className="mb-6 leading-relaxed">
          If parsing fails, the parser tries to append a missing quote `"` at the end of the last line — this fixes many broken outputs where the model stopped mid-string.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">📈 Outcome</h2>
        <p className="mb-6 leading-relaxed">
          Now <b className="text-ember">YOU</b> can stream LLM output into your UI and render the structure in real-time — safely. Every key exists thanks to the template. Every value updates only when it's available. No more crashes due to malformed JSON.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">🏁 Final Thought</h2>
        <p className="mb-6 leading-relaxed">
          YAML isn't just human-friendly — it's stream-friendly too. If you're building tool-based agents or structured UIs, this simple trick can make a big difference. Don't wait for perfect JSON. Start rendering now.
        </p>

      </div>
    </main>
  );
}
