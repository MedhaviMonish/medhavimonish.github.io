const blogs = [
  {
    title: "Inside Cortana++: Building an ML Engine from Scratch",
    summary: "How I designed tensors, Dense layers, and CUDA operations step-by-step in C++.",
    link: "/blogs/cortana",
  },
  {
    title: "Darwin’s Silicate Organism: Simulated Survival Intelligence",
    summary: "Design principles behind modular AI driven by memory, curiosity, and reward.",
    link: "/blogs/darwin",
  },
  {
    title: "GreedyContext: Smarter LLM Context with Fewer Tokens",
    summary: "Reducing token cost by selecting only the most relevant messages using semantic graphs.",
    link: "/blogs/greedycontext",
  },
];

export default function BlogList() {
  return (
    <section id="blogs" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <a
          key={blog.title}
          href={blog.link}
          className="bg-iron border border-steel text-pale rounded-lg shadow hover:shadow-md p-6 block"
        >
          <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
          <p className="text-gray-400 text-sm">{blog.summary}</p>
        </a>
      ))}
    </section>
  );
}
