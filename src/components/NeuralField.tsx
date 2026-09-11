"use client";

import { motion } from "motion/react";

const nodes = [[7,18],[18,9],[29,24],[43,11],[58,20],[72,8],[86,24],[94,12],[12,66],[26,78],[41,61],[55,81],[69,65],[82,77],[93,58]];

export default function NeuralField() {
  return (
    <div className="neural-field" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <g className="synapses">{nodes.slice(0,-1).map((n,i)=><line key={i} x1={n[0]} y1={n[1]} x2={nodes[i+1][0]} y2={nodes[i+1][1]} />)}</g>
        {nodes.map(([x,y],i)=><motion.circle key={i} cx={x} cy={y} r=".22" animate={{ opacity:[.15,.85,.15], r:[.16,.32,.16] }} transition={{ duration:3+i%4, repeat:Infinity, delay:i*.18 }} />)}
      </svg>
    </div>
  );
}
