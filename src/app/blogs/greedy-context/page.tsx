"use client";

import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";

export default function BlogGreedyContext() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-start py-20 px-4"
      style={{ backgroundImage: "url('/images/bg-home.png')" }}
    >
      <div className="w-full max-w-4xl bg-black/80 text-gray-200 p-10 rounded-xl shadow-md">

        <h1 className="text-4xl font-bold text-ember mb-2">
          GreedyContext: Shrinking LLM Memory with Semantic Graphs
        </h1>
        <p className="mb-6 leading-relaxed">
          Long LLM conversations waste tokens. GreedyContext finds what's truly relevant.
          Instead of feeding your model the last 100 messages, why not just pass the 7 that matter?
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
          Imagine this is a real user conversation:
        </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed mb-6">
            <li>1️⃣ “I love taking long walks on the beach during sunset.”</li>
            <li>2️⃣ “Artificial Intelligence is transforming the world rapidly.”</li>
            <li>3️⃣ “Is there any financial aid or scholarship info I can look into?”</li>
            <li>4️⃣ “I'm also curious about campus housing options—are freshmen required to live on campus?”</li>
            <li>5️⃣ “By the way, do you know any good recommendations for online courses in data science?”</li>
            <li>6️⃣ “How long does it typically take to complete one of those courses?”</li>
            <li>7️⃣ “And for the application process, should I contact professors directly?”</li>
            <li>8️⃣ “Are there any specific deadlines I should be aware of?”</li>
            <li>9️⃣ “So, should I submit my test scores along with my application?”</li>
            <li>🔟 “What about letters of recommendation—how many do I need?”</li>
          </ul>
        <p className="mb-6 leading-relaxed">
          In a traditional method, all 10 messages would be sent to the model — including unrelated ones about beaches, data science, and student life.
        </p>
        <p className="mb-6 leading-relaxed">
          With GreedyContext, only messages 🔟, 9️⃣, 8️⃣, 7️⃣, and 3️⃣ are selected — because they are semantically related to the application and admissions topic.
          This drastically reduces token usage and focuses model attention on what actually matters.
        </p>
        <p className="mb-6 leading-relaxed">
          If the user sends an 11<sup>th</sup> message like <b><i>“What is LLM?”</i></b>, then all previous 10 messages become irrelevant.
          This method ensures those irrelevant messages are skipped — greatly benefiting LLMs during long sessions.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">🔍 What GreedyContext Does</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed mb-6">
          <li>Embeds all conversation messages using SentenceTransformers</li>
          <li>Builds a similarity graph using cosine scores</li>
          <li>Restricts connections to past messages (upper triangular)</li>
          <li>Uses greedy search to find the most relevant backward chain</li>
          <li>Returns just the chain — no summarization needed</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          The full graph visualization takes time because it generates HTML, but the actual filtering is fast — in under 0.5 seconds, hundreds of messages can be reduced to a tenth or less.
          This helps the LLM preserve context and respond faster by processing fewer tokens.
        </p>
        <h2 className="text-2xl font-bold text-ember mb-2">⚙️ The Code</h2>
        <p className="mb-6 leading-relaxed">
          The full code fits in one Python file. You embed, graph, and greedily walk back:
        </p>
        <CodeBlock language="python" code={`from sentence_transformers import SentenceTransformer
import networkx as nx
import numpy as np

s = ["message 1", "message 2", ..., "latest message"]
model = SentenceTransformer("all-MiniLM-L6-v2")
embeddings = model.encode(s)
similarities = np.inner(embeddings, embeddings)

# Strict upper triangular
for i in range(len(s)):
  similarities[i, :i+1] = 0

G = nx.DiGraph()
for i in range(len(s)):
  for j in range(i+1, len(s)):
    if similarities[i][j] > 0.2:
      G.add_edge(j+1, i+1, weight=similarities[i][j])

# Greedy backward walk
path = [len(s)]
while path[-1] != 1:
  preds = list(G[path[-1]].items())
  if not preds: break
  next_node = max(preds, key=lambda x: x[1]['weight'])[0]
  path.append(next_node)
path.reverse()`} />

        <h2 className="text-2xl font-bold text-ember mb-2">🖼️ Visualizing the Greedy Path</h2>
        <p className="mb-4 leading-relaxed">
          The red path below shows the semantic trail GreedyContext selects. 
          We are tracking back from the latest user message to the first one.
          The first visualization uses no threshold. The next one applies a small threshold to filter weaker links.
          Gray edges represent all possible semantic links:
        </p>
        <Image
          src="https://raw.githubusercontent.com/MedhaviMonish/GreedyContext/main/images/without_threshold.png"
          alt="GreedyContext path visualization"
          width={600}
          height={600}
          className="rounded shadow mb-6"
        />


        <h2 className="text-2xl font-bold text-ember mb-2">💡 Final Tip</h2>
        <p className="mb-6 leading-relaxed">
          For optimal results, filter out weak similarities (e.g., below 0.2). This makes the graph cleaner and the context chain sharper — like this:
          <br /><br />
          <Image
            src="https://raw.githubusercontent.com/MedhaviMonish/GreedyContext/main/images/with_threshold.png"
            alt="GreedyContext path visualization"
            width={600}
            height={600}
            className="rounded shadow mb-6"
          />
          <br /><br />
          💬 Bonus: You don’t need any database or summarization logic. Just plug this in and call your LLM with the selected messages.
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