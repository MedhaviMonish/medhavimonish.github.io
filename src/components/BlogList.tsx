const blogs = [
  {
    title: "Why I Moved from JSON to YAML for LLM Tool Calls",
    summary: "A deep dive into how YAML reduced token bloat, improved structure, and made LLM integrations more reliable than JSON.",
    link: "/blogs/json-to-yaml"
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
