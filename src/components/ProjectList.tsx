import ProjectCard from "./ProjectCard";
const projects = [
  {
    title: "Cortana++",
    tagline: "Lightweight ML engine in C++/CUDA",
    description: "Implements tensors, Dense layers, and broadcasted CUDA ops. Built from scratch.",
    tags: ["C++", "CUDA", "ML Engine", "GPU Based"],
    links: {
      github: "https://github.com/MedhaviMonish/CortanaPlusPlus",
    },
  },
  {
    title: "Darwin’s Silicate Organism",
    tagline: "Memory-based modular survival AI",
    description: "Simulates emergent behavior with curiosity, memory, and reward modules under survival pressure.",
    tags: ["RL", "Curiosity", "Modular", "Survival"],
    links: {
      github: "https://github.com/MedhaviMonish/Darwins-Silicate-Organism",
    },
  },
  {
    title: "GreedyContext",
    tagline: "Token reduction for LLMs using greedy semantic graphs",
    description: "Builds semantic trails using cosine similarity and a greedy graph search to reduce LLM context size.",
    tags: ["LLM", "Context Optimization"],
    links: {
      github: "https://github.com/MedhaviMonish/GreedyContext",
    },
  },
  {
    title: "Self-Driving Car v2",
    tagline: "Blender + Unity simulation with PPO agent",
    description: "Trains a car to navigate custom tracks using PPO in Unity with GPS integration.",
    tags: ["Blender", "Unity-3D", "PPO", "Simulation", "Self-Driving"],
    links: {
      github: "https://github.com/MedhaviMonish/Self-Driving-Car-Version-2",
    },
  },
  {
    title: "GeneticAlgorithm",
    tagline: "Classic genetic algorithm examples",
    description: "Demonstrates how genetic algorithms evolve solutions across Java and Python implementations.",
    tags: ["Genetic Algorithm", "Optimization", "Java", "Python"],
    links: {
      github: "https://github.com/MedhaviMonish/GeneticAlgorithm",
    },
  },
  {
    title: "FaceSwapping",
    tagline: "Face swap with OpenCV + deep learning",
    description: "A Python project to perform real-time or offline face-swapping.",
    tags: ["Python", "Computer Vision", "OpenCL", "GPU Programming"],
    links: {
      github: "https://github.com/MedhaviMonish/FaceSwapping",
    },
  },
  {
    title: "Face Recognition Attendance System",
    tagline: "Live attendance with face recognition",
    description: "Real-time face recognition system built with OpenCV to mark attendance accurately.",
    tags: ["OpenCV", "Attendance", "Face Recognition"],
    links: {
      github: "https://github.com/MedhaviMonish/AttendanceSystem",
    },
  },
];


export default function ProjectList() {
  return (
    <section id="projects" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
