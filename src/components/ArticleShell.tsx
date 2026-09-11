import ForgeHeader from "./ForgeHeader";
import NeuralField from "./NeuralField";

interface ArticleShellProps {
  code: string;
  title: string;
  summary: string;
  signal?: "ember" | "green" | "violet" | "cyan";
  github?: string;
  children: React.ReactNode;
}

export default function ArticleShell({ code,title,summary,signal="ember",github,children }:ArticleShellProps) {
  return (
    <main className={`forge-shell article-theme signal-${signal}`}>
      <NeuralField />
      <ForgeHeader />
      <article className="article-shell">
        <header className="article-hero">
          <a href="/" className="article-back">← RETURN TO FORGE</a>
          <span>{code}</span>
          <h1>{title}</h1>
          <p>{summary}</p>
          {github && <a className="forge-button" href={github} target="_blank">View source <b>↗</b></a>}
        </header>
        <div className="article-body">{children}</div>
      </article>
    </main>
  );
}
