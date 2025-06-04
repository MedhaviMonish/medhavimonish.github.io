"use client";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function BlogTwinSqueeze() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-start py-20 px-4"
      style={{ backgroundImage: "url('/images/bg-home.png')" }}
    >
      <div className="w-full max-w-4xl bg-black/80 text-white p-10 rounded-xl shadow-md">
        <Link href="/" className="text-sm text-gray-400 hover:text-white transition block mb-4">
          ← Back to Home
        </Link>

        <Link
          href="https://github.com/MedhaviMonish/TwinSqueeze"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-base block mb-2"
        >
          🔗 View on GitHub
        </Link>

        <h1 className="text-4xl font-bold text-ember mb-6">
          TwinSqueeze: Contrastive Compression with NEFTune Regularization
        </h1>

        <p className="mb-6 leading-relaxed">
          <strong>TwinSqueeze</strong> is a Siamese network designed to compress high-dimensional sentence embeddings (e.g., 384-dim from MiniLM) into a smaller, task-optimized vector (e.g., 32-dim) while preserving cosine similarity. This project also systematically studies <strong>NEFTune</strong>, a noise-based regularization technique, to improve generalization and ranking quality.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">
          🎯 Goals
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-400 leading-relaxed">
          <li>Compress 384-dim vectors to smaller sizes (e.g., 32-dim) for latency and memory gains</li>
          <li>Preserve and align cosine similarity for task-specific domains</li>
          <li>Support robust RAG pipelines with noise-tolerant NEFTune-optimized vectors</li>
        </ul>

        <h2 className="text-2xl font-bold text-ember mb-2">
          ❗ Why Build TwinSqueeze?
        </h2>
        <p className="mb-6 leading-relaxed">
          OpenAI’s 1536-dim embeddings are powerful but large and prone to spurious similarity. TwinSqueeze addresses two issues:
          <br />
          - High dimensionality → slow search, more memory
          <br />
          - Too much similarity between unrelated phrases
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">
          🚀 Project Highlights
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-400 leading-relaxed">
          <li>3-layer MLP Siamese encoder with cosine-based loss</li>
          <li>Training on STS-B from GLUE with noise regularization (NEFTune)</li>
          <li>Evaluation with MSE, MAE, Pearson, Spearman</li>
          <li>Visualizations: loss curves, prediction scatter plots, histograms</li>
        </ul>

        <h2 className="text-2xl font-bold text-ember mb-2">
          🔍 NEFTune Ablation Study
        </h2>
        <p className="mb-6 leading-relaxed">
          Tested with different noise scales (α) to measure ranking impact:
        </p>
        <div className="overflow-x-auto mb-6">
  <table className="w-full text-sm text-left text-gray-400 border-collapse border border-gray-700">
    <thead className="bg-gray-800 text-ember">
      <tr>
        <th className="px-4 py-2 border border-gray-700">Model</th>
        <th className="px-4 py-2 border border-gray-700">α</th>
        <th className="px-4 py-2 border border-gray-700">MSE</th>
        <th className="px-4 py-2 border border-gray-700">MAE</th>
        <th className="px-4 py-2 border border-gray-700">Pearson</th>
        <th className="px-4 py-2 border border-gray-700">Spearman</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border border-gray-700">Baseline</td>
        <td className="px-4 py-2 border border-gray-700">0.0</td>
        <td className="px-4 py-2 border border-gray-700">0.072</td>
        <td className="px-4 py-2 border border-gray-700">0.203</td>
        <td className="px-4 py-2 border border-gray-700">0.731</td>
        <td className="px-4 py-2 border border-gray-700">0.775</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-700">Alpha 0.5</td>
        <td className="px-4 py-2 border border-gray-700">0.5</td>
        <td className="px-4 py-2 border border-gray-700">0.068</td>
        <td className="px-4 py-2 border border-gray-700">0.198</td>
        <td className="px-4 py-2 border border-gray-700">0.774</td>
        <td className="px-4 py-2 border border-gray-700 font-bold text-white">0.814</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-700">Alpha 0.75</td>
        <td className="px-4 py-2 border border-gray-700">0.75</td>
        <td className="px-4 py-2 border border-gray-700">0.072</td>
        <td className="px-4 py-2 border border-gray-700">0.201</td>
        <td className="px-4 py-2 border border-gray-700">0.773</td>
        <td className="px-4 py-2 border border-gray-700 font-bold text-white">0.818</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-700">Alpha 1.0</td>
        <td className="px-4 py-2 border border-gray-700">1.0</td>
        <td className="px-4 py-2 border border-gray-700">0.082</td>
        <td className="px-4 py-2 border border-gray-700">0.215</td>
        <td className="px-4 py-2 border border-gray-700">0.748</td>
        <td className="px-4 py-2 border border-gray-700">0.798</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-700">Alpha 3.0</td>
        <td className="px-4 py-2 border border-gray-700">3.0</td>
        <td className="px-4 py-2 border border-gray-700">0.154</td>
        <td className="px-4 py-2 border border-gray-700">0.299</td>
        <td className="px-4 py-2 border border-gray-700">0.647</td>
        <td className="px-4 py-2 border border-gray-700">0.762</td>
      </tr>
    </tbody>
  </table>
</div>


        <h2 className="text-2xl font-bold text-ember mb-2">
          📊 Visualizations
        </h2>
        <p className="mb-4 leading-relaxed">
          We compare the training loss evolution for all models, and display NEFTune-style histograms for α = 0.75.
          Lower training loss does not always mean better generalization — as the log-scale test loss chart shows.
        </p>

        <img src="https://raw.githubusercontent.com/MedhaviMonish/TwinSqueeze/main/results/loss_comparison.png" className="rounded shadow mb-6" alt="Loss Curves All Alphas" />

        <img src="https://raw.githubusercontent.com/MedhaviMonish/TwinSqueeze/main/results/benchmark_charts/loss_compare_alpha_0.75.png" className="rounded shadow mb-6" alt="Histogram NEFTune 0.75" />

        <h2 className="text-2xl font-bold text-ember mb-2">
          🔧 Run It Yourself
        </h2>
        <CodeBlock
          language="bash"
          code={`# Install deps
pip install torch datasets sentence-transformers matplotlib

# Run training
python train_experiment.py

# Evaluate all saved models
python test_all_models.py`}/>

        <h2 className="text-2xl font-bold text-ember mb-2">
          📚 Learnings
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-400 leading-relaxed">
          <li>How NEFTune improves ranking despite noisy training</li>
          <li>Why smaller vectors can still preserve semantic relevance</li>
          <li>When to use cosine vs MSE loss for contrastive objectives</li>
        </ul>

        <p className="mb-6 leading-relaxed">
          For anyone building RAG agents or compressing local memory for embedded search — <strong>TwinSqueeze</strong> gives you full control over similarity without overloading your hardware.
        </p>

        <p className="text-gray-400 text-sm italic">Inspired by the NEFTune paper · Dataset: STS-B · Backbone: MiniLM</p>
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
