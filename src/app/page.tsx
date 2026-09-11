"use client";

import BlogList from "@/components/BlogList";
import ForgeHeader from "@/components/ForgeHeader";
import Hero from "@/components/Hero";
import NeuralField from "@/components/NeuralField";
import ProjectList from "@/components/ProjectList";

export default function HomePage() {
  return (
    <main className="forge-shell">
      <NeuralField />
      <ForgeHeader />
      <div className="forge-content">
        <Hero />

        <section id="projects" className="forge-section">
          <div className="section-heading">
            <div><span>//</span><h2>Active Systems</h2><small>research · build · deploy · repeat</small></div>
            <p>[ 09 systems indexed ]</p>
          </div>
          <ProjectList />
        </section>

        <section className="forge-map" aria-label="Forge map">
          <div>
            <span className="eyebrow">SYSTEM RELATIONSHIP MAP</span>
            <h2>Different machines.<br /><em>One evolving intelligence.</em></h2>
            <p>Compression, memory, GPU systems, reinforcement learning and emergent behaviour are not isolated experiments. Each one becomes material for the next.</p>
          </div>
          <div className="map-visual" aria-hidden="true">
            {['GPU', 'MEMORY', 'REASONING', 'EVOLUTION', 'SYSTEMS'].map((label, index) => (
              <div className={`map-node node-${index + 1}`} key={label}><i />{label}</div>
            ))}
          </div>
        </section>

        <section id="blogs" className="forge-section">
          <div className="section-heading">
            <div><span>//</span><h2>Field Notes</h2><small>decisions · failures · discoveries</small></div>
            <p>[ open archive ]</p>
          </div>
          <BlogList />
        </section>

        <footer id="contact" className="forge-footer">
          <div><span className="status-dot" /> OPERATOR AVAILABLE</div>
          <p>© {new Date().getFullYear()} Medhavi Monish · AI Blacksmith</p>
          <nav><a href="mailto:monishmedhavi@gmail.com">Email</a><a href="https://github.com/MedhaviMonish">GitHub</a><a href="https://www.linkedin.com/in/medhavi-monish-a327ba169/">LinkedIn</a></nav>
        </footer>
      </div>
    </main>
  );
}
