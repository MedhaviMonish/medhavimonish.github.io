"use client";
import { motion } from "motion/react";

const blogs=[
  {title:"TwinSqueeze: Compressing Embeddings with Contrastive NEFTune",summary:"Shrinking sentence embeddings while preserving their semantic geometry.",link:"/blogs/twin-squeeze",code:"EXP-05"},
  {title:"GreedyContext: Shrinking LLM Memory with Semantic Graphs",summary:"Selecting the conversations that matter instead of carrying everything.",link:"/blogs/greedy-context",code:"SYS-03"},
  {title:"Why I Moved from JSON to YAML for LLM Use Cases",summary:"A practical investigation into token cost, structure and streaming.",link:"/blogs/json-to-yaml",code:"NOTE-12"},
  {title:"Streaming JSON While Streaming from an LLM",summary:"Rendering structured responses before the model has finished generating.",link:"/blogs/streaming-json",code:"SYS-08"},
  {title:"Custom RAG Without a Vector Database",summary:"Fast local retrieval with simple embeddings, filtering and cosine similarity.",link:"/blogs/custom-rag",code:"NOTE-17"},
];

export default function BlogList(){return <div className="blog-grid">{blogs.map((blog,index)=><motion.a href={blog.link} className="field-note" key={blog.title} initial={{opacity:0,x:-18}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:index*.06}}><span>{blog.code}</span><div><h3>{blog.title}</h3><p>{blog.summary}</p></div><b>READ →</b></motion.a>)}</div>}
