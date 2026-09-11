"use client";

import { motion } from "motion/react";

const links = [["01", "Home", "#home"], ["02", "Projects", "#projects"], ["03", "Writings", "#blogs"], ["04", "Contact", "#contact"]];

export default function ForgeHeader() {
  return (
    <motion.header className="forge-header" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7 }}>
      <a className="forge-brand" href="#home"><strong>The Living Forge</strong><small>CODE × COMPUTE × CONSCIOUSNESS</small></a>
      <nav>{links.map(([n, label, href]) => <a key={n} href={href}><span>[ {n} ]</span> {label}</a>)}</nav>
      <div className="system-state"><span className="status-dot" /><div>SYSTEMS NOMINAL<small>BUILD A BRIGHTER INTELLIGENCE</small></div></div>
    </motion.header>
  );
}
