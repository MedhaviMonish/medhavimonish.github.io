"use client";

import { motion } from "motion/react";

interface ProjectProps { index:number; title:string; tagline:string; description:string; tags:string[]; signal?:"ember"|"green"|"violet"|"cyan"; links:{github?:string;demo?:string;blog?:string}; }

export default function ProjectCard({ index,title,tagline,description,tags,signal="ember",links }:ProjectProps) {
  return (
    <motion.article className={`project-module signal-${signal}`} initial={{y:24,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,margin:"-60px"}} whileHover={{y:-5}} transition={{duration:.4}}>
      <div className="module-top"><span>{String(index).padStart(2,"0")}</span><small>{tagline}</small><b><i /> ACTIVE</b></div>
      <h3>{title}</h3><p>{description}</p>
      <div className="module-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div>
      <div className="module-links">{links.github&&<a href={links.github} target="_blank">GitHub ↗</a>}{links.demo&&<a href={links.demo} target="_blank">Demo ↗</a>}{links.blog&&<a href={links.blog}>Field note →</a>}</div>
    </motion.article>
  );
}
