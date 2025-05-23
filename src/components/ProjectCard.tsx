interface ProjectProps {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    blog?: string;
  };
}

export default function ProjectCard({ title, tagline, description, tags, links }: ProjectProps) {
  return (
    <div className="bg-iron border border-steel text-pale rounded-lg shadow hover:shadow-md p-6">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-300 mb-2">{tagline}</p>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs bg-ember text-black px-2 py-1 rounded font-medium shadow-sm">
            #{tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Demo
          </a>
        )}
        {links.blog && (
          <a href={links.blog} className="text-blue-600 hover:underline">
            Blog
          </a>
        )}
      </div>
    </div>
  );
}
