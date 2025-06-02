"use client";
/* eslint-disable react/no-unescaped-entities */
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function BlogCustomRAG() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-start py-20 px-4"
      style={{ backgroundImage: "url('/images/bg-home.png')" }}
    >
      <div className="w-full max-w-4xl bg-black/80 text-white p-10 rounded-xl shadow-md">
        <Link href="/" className="text-sm text-gray-400 hover:text-white transition block mb-4">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-ember mb-2">
          Custom RAG: Lightweight Retrieval Without a Vector DB
        </h1>

        <p className="mb-6 leading-relaxed">
          Most Retrieval-Augmented Generation (RAG) systems lean on vector databases like FAISS, Pinecone, or Supabase with pgvector. 
          But in real use, these often bring more pain than value:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed mb-6">
          <li>High memory usage even for small indexes</li>
          <li>Latency spikes due to IO or over-threading</li>
          <li>Complexity with persistence, scaling, and API setup</li>
          <li>External dependencies that break portability and debugging</li>
          <li>Voyager setups can use gigabytes for context trees</li>
          <li>Network latency for cloud vector search often exceeds 2 seconds</li>
        </ul>

        <p className="mb-6 leading-relaxed">
          So I built a minimal alternative. One that runs entirely in memory, stays fast on CPU, and doesn’t require anything beyond <code>numpy</code> and cosine similarity.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">⚙️ Step 1: Prepare Sentences and Embeddings</h2>
        <p className="mb-6 leading-relaxed">
          Start with a list of sentences. You can embed all at once using the SentenceTransformer model:
        </p>

        <CodeBlock language="python" code={`from sentence_transformers import SentenceTransformer
import numpy as np

sentences = [
  "Reinforcement learning uses rewards to guide actions.",
  "Transformers predict sequences token by token.",
  "Backpropagation updates weights in neural networks.",
  "Cosine similarity measures vector direction overlap."
]

model = SentenceTransformer("all-MiniLM-L6-v2")
emb_matrix = model.encode(sentences)  # efficient batch embedding`} />

        <h2 className="text-2xl font-bold text-ember mb-2">💾 Memory Footprint</h2>
        <p className="mb-6 leading-relaxed">
          Each 384-dim vector with float32 takes 384 * 4 = 1536 bytes (1.5 KB). So 100,000 vectors ≈ <strong>150 MB</strong>.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">🔍 Step 2: Search With Cosine Similarity</h2>
        <p className="mb-6 leading-relaxed">
          At query time, encode the input and compare with all vectors using brute-force cosine similarity:
        </p>

        <CodeBlock language="python" code={`from sklearn.metrics.pairwise import cosine_similarity

query = "What is backpropagation?"
query_vec = model.encode([query])[0]
scores = cosine_similarity([query_vec], emb_matrix)[0]

# Threshold or top-k filtering
threshold = 0.5
indices = np.where(scores > threshold)[0]
# OR: indices = scores.argsort()[-10:][::-1]

# Fetch matching sentences
results = [sentences[i] for i in indices]`} />

        <h2 className="text-2xl font-bold text-ember mb-2">📈 Final Result</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed mb-6">
          <li>~200ms latency for 100k records on CPU</li>
          <li>Total memory under 200 MB with float32</li>
          <li>Zero infra, zero disk, fully in-memory</li>
          <li>Faster and leaner than Voyager/FAISS/Pinecone for most personal use-cases</li>
        </ul>

        <p className="mb-6 leading-relaxed">
          For local apps, embedded systems, or fast prototyping — this method is more than enough. No setup. No permission errors. Just pure speed.
        </p>

        <p className="mb-6 leading-relaxed">
          🧠 Want more scale? Replace the brute-force search with a smarter index later. The logic stays the same.
        </p>

        <p className="mb-4 leading-relaxed">
          One common optimization is to pre-group data by topic or category, so you can filter early before running similarity search.
        </p>

        <CodeBlock language="python" code={`category_map = {
  "RL": ["Reinforcement learning uses rewards to guide actions.", ...],
  "NLP": ["Transformers predict sequences token by token.", ...],
  "Math": ["Cosine similarity measures vector direction overlap.", ...]
}`} />

        <p className="mb-6 leading-relaxed">
          At search time, you can first classify or filter the query into a relevant category (like RL, NLP, Math), and only run cosine similarity on that smaller subset.
          This reduces both memory access and comparison cost. If you're working with 100,000 records across 100 categories, you may only need to search over ~1,000 records per query — making retrieval almost instant.
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