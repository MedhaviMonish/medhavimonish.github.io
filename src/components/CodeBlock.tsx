"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react";

export default function CodeBlock({code,language="text"}:{code:string;language?:string}) {
  const [copied,setCopied]=useState(false);
  async function copy(){await navigator.clipboard.writeText(code);setCopied(true);setTimeout(()=>setCopied(false),1500)}
  return <div className="forge-code"><div className="code-rail"><span>{language.toUpperCase()}</span><button onClick={copy}>{copied?"COPIED":"COPY"}</button></div><SyntaxHighlighter language={language} style={nightOwl} showLineNumbers customStyle={{margin:0,padding:"1.5rem",background:"#090a0a",fontSize:".86rem"}}>{code}</SyntaxHighlighter></div>
}
