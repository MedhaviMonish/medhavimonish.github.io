"use client";

import { motion, useScroll, useSpring } from "motion/react";
import ForgeHeader from "@/components/ForgeHeader";
import NeuralField from "@/components/NeuralField";

type Signal = "ember" | "green" | "violet" | "cyan";

export default function BlogMotionShell({ children, signal = "ember" }: { children: React.ReactNode; signal?: Signal }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <main className={`forge-shell blog-motion-page signal-${signal}`}>
      <NeuralField />
      <ForgeHeader />
      <motion.div className="reading-progress" style={{ scaleX }} />
      <motion.article
        className="blog-motion-article"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.article>
    </main>
  );
}
