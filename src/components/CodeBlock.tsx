"use client";

// @ts-expect-error: no type declaration for style file
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-expect-error: no type declaration for style file
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "text" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative mb-6 rounded-lg overflow-hidden">
      {/* Language Badge */}
      <span className="absolute top-2 left-2 text-xs text-gray-300 px-2 py-0.5 rounded">
        {language}
      </span>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs text-black bg-ember px-2 py-1 rounded hover:bg-orange-500 transition z-10"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Code Highlight */}
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        showLineNumbers
        customStyle={{
          padding: "1.75rem 1.25rem 0.25rem 1.25rem", // top padding makes space for label
          fontSize: "0.9rem",
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
