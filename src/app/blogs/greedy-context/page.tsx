"use client";
/* eslint-disable react/no-unescaped-entities */
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function BlogGreedyContext() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-start py-20 px-4"
      style={{ backgroundImage: "url('/images/bg-home.png')" }}
    >
      <div className="w-full max-w-4xl bg-black/80 text-gray-200 p-10 rounded-xl shadow-md">
        <Link href="/" className="text-sm text-gray-400 hover:text-white transition block mb-4">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-ember mb-2">
  <Link href="https://github.com/MedhaviMonish/GreedyContext" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-base block mb-2">
    🔗 View on GitHub
  </Link>
          GreedyContext: Shrinking LLM Memory with Semantic Graphs
        </h1>
        <p className="mb-6 leading-relaxed">
  Traditional LLM-based chat systems send the entire conversation history to the model, even if most of it is no longer relevant.
  This not only increases token usage and latency but can also confuse the model during topic switches. GreedyContext solves this by
  constructing a semantic graph of message relationships and then extracting a minimal, meaningful subset of messages that are
  directly relevant to the user's latest query. So instead of blindly sending 100+ previous messages, you send only the 5–10 that matter.
</p>

        <h2 className="text-2xl font-bold text-ember mb-2">❌ Problems with Full-History Approach</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed mb-6">
          <li>Includes outdated or unrelated messages just because they're part of the session</li>
          <li>Treats topic switches as continuation — when they should be fresh starts</li>
          <li>Token usage grows linearly with conversation length</li>
          <li>Drives up cost, latency, and risk of hallucination</li>
          <li>Requires summarization layers or external memory management or custom memory modules</li>
          <li>Makes it unclear which messages actually shaped the response</li>
        </ul>

        <h2 className="text-2xl font-bold text-ember mb-2">✅ GreedyContext Advantages</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed mb-6">
          <li>Strips out irrelevant branches and topic switches — treating each as a fresh intent</li>
          <li>Keeps only semantically linked messages, not just recent ones</li>
          <li>Reduces tokens by 50–90%, slashing cost and improving focus</li>
          <li>Avoids summarization yet keeps outputs coherent</li>
          <li>Less LLM confusion = fewer hallucinations and context drift</li>
          <li>Plug-and-play with any LLM — no infra or architecture change needed</li>
        </ul>

        <h2 className="text-2xl font-bold text-ember mb-2">📌 A Simple Example</h2>
        <p className="mb-6 leading-relaxed">
          You can pass both user and assistant messages into GreedyContext and let it trace the most relevant semantic path backward from the latest query:
        </p>
        <CodeBlock language="python" code={`from semantic_context_graph import SemanticContextGraph

chat_messages = [
    {"role": "user", "content": "How do I start preparing for a career in robotics?"},
    {"role": "assistant", "content": "You can begin with mechanical basics, then move into programming and embedded systems."},
    {"role": "user", "content": "Which language is preferred—C++ or Python?"},
    {"role": "assistant", "content": "Python is great for prototyping, but C++ is essential for performance-critical robotics."},
    {"role": "user", "content": "Any tips on improving productivity while studying?"},
    {"role": "assistant", "content": "Use Pomodoro timers and remove distractions."},
    {"role": "user", "content": "What are some good home workouts without equipment?"},
    {"role": "assistant", "content": "Bodyweight exercises like push-ups, squats, and planks work great."},
    {"role": "user", "content": "Can you give me a quick vegetarian recipe?"},
    {"role": "assistant", "content": "Try stir-fried veggies with tofu and rice."},
    {"role": "user", "content": "What is quantum entanglement in simple terms?"}
]

# Recommended: use mode='cross' for better semantic accuracy
graph = SemanticContextGraph(chat_messages, model_name="cross-encoder/stsb-roberta-base", mode="cross")
graph.build_graph(threshold=0.2)

path = graph.greedy_path(start_node=len(chat_messages), goal_node=1)
used_ids, relevant_messages = graph.extract_relevant_messages(path)

for msg in relevant_messages:
    print(f"{msg['role'].upper()}: {msg['content']}")`} />

        <h2 className="text-2xl font-bold text-ember mb-2">🧪 Output: Final Subset of Context</h2>
        <CodeBlock language="text" code={`USER: What is quantum entanglement in simple terms?`} />
        <p className="mb-6 leading-relaxed">
          Since this question starts a new topic, GreedyContext correctly filters out all unrelated prior messages and returns only the final user query — reducing token usage and improving clarity.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">🖼️ Visualizing the Greedy Path</h2>
        <p className="mb-4 leading-relaxed">
          The red path below shows the semantic trail GreedyContext selects.
          Even with the same result path, thresholded graphs reduce the number of edges, which leads to faster graph processing and clearer message linkage.
        </p>
        <img
  src="https://raw.githubusercontent.com/MedhaviMonish/GreedyContext/main/images/without_threshold.png"
  alt="GreedyContext path visualization"
  width={600}
  className="rounded shadow mb-6"
/>

        <img
  src="https://raw.githubusercontent.com/MedhaviMonish/GreedyContext/main/images/with_threshold.png"
  alt="GreedyContext path visualization"
  width={600}
  className="rounded shadow mb-6"
/>

        <h2 className="text-2xl font-bold text-ember mb-2">💡 Final Tip</h2>
        <p className="mb-6 leading-relaxed">
          For best results, use a threshold (e.g. 0.2) to ignore weak links.
          It trims unnecessary edges and lets the greedy algorithm return a cleaner and more focused message subset.
          <br /><br />
          📌 <strong>CrossEncoder is recommended</strong> for better direction-aware relevance.
          <br />
          💬 Bonus: No database, no summarization — just plug this into your LLM chain.
        </p>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 bg-ember text-black px-4 py-2 rounded-full shadow-lg hover:bg-orange-400 transition"
      >
        ↑ Top
      </button>
    </main>
  );
}
