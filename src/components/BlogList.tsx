const blogs = [
  {
    title: "TwinSqueeze: Compressing Embeddings with Contrastive NEFTune",
    summary: "A compact Siamese model that shrinks sentence embeddings for custom RAG pipelines while preserving cosine similarity.",
    link: "/blogs/twin-squeeze"
  },
  {
    title: "GreedyContext: Shrinking LLM Memory with Semantic Graphs",
    summary: "How I built a cosine-similarity graph and greedy search to reduce token cost in long LLM conversations — without losing context.",
    link: "/blogs/greedy-context"
  },
  {
    title: "Why I Moved from JSON to YAML for LLM Use cases",
    summary: "A deep dive into how YAML reduced token bloat, improved structure, and made LLM integrations more reliable than JSON.",
    link: "/blogs/json-to-yaml"
  },
  {
    title: "Streaming JSON While streaming from LLM",
    summary: "How I built a forgiving JSON parser that lets you render partial LLM responses using YAML.",
    link: "/blogs/streaming-json"
  },
  {
    title: "Custom RAG Without a Vector DB",
    summary: "How I built a fast, local, vector-free RAG system using just pandas and SentenceTransformers — no FAISS, no Pinecone.",
    link: "/blogs/custom-rag"
  }
];

export default function BlogList() {
  return (
    <section id="blogs" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <a
          href={blog.link}
          key={blog.title}
          className="block bg-iron border border-steel text-pale rounded-lg shadow hover:shadow-md p-6 hover:scale-[1.02] transition"
        >
          <h3 className="text-xl font-bold text-white mb-1">{blog.title}</h3>
          <p className="text-sm text-gray-400">{blog.summary}</p>
        </a>
      ))}
    </section>
  );
}
