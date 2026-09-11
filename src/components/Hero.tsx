"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="forge-hero">
      <motion.div className="portrait-orbit" initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .9 }}>
        <div className="orbit orbit-a" /><div className="orbit orbit-b" />
        <img src="https://avatars.githubusercontent.com/u/39962268?v=4" alt="Medhavi Monish" />
      </motion.div>
      <motion.div className="hero-copy" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .75, delay: .15 }}>
        <div className="operator-state"><span className="status-dot" /> OPERATOR / <b>ONLINE</b></div>
        <h1>Medhavi Monish</h1>
        <h2>AI Blacksmith</h2>
        <p className="hero-lead">Forging intelligence from scratch — one neuron, one kernel at a time.</p>
        <p className="hero-body">Builder of custom ML engines, modular AI lifeforms and reasoning systems that challenge assumptions.</p>
        <div className="hero-actions"><a className="forge-button primary" href="#projects">View projects <span>→</span></a><a className="forge-button" href="/Medhavi_Monish_Resume.pdf">Resume <span>↗</span></a></div>
      </motion.div>
      <aside className="hero-telemetry"><p>IDEAS <b>∞</b></p><p>EXPERIMENTS <b>ACTIVE</b></p><p>MODELS <b>LOCAL</b></p><p>IMPACT <b>REAL</b></p></aside>
    </section>
  );
}
