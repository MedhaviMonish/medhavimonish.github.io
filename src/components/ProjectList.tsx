import ProjectCard from "./ProjectCard";

const projects = [
  {title:"Cortana++",tagline:"C++ / CUDA ML ENGINE",description:"A lightweight machine-learning engine implementing tensors, dense layers and broadcasted CUDA operations from scratch.",tags:["C++","CUDA","GPU"],signal:"ember" as const,links:{github:"https://github.com/MedhaviMonish/CortanaPlusPlus"}},
  {title:"Darwin’s Silicate Organism",tagline:"EVOLUTIONARY AI",description:"A modular survival system exploring emergent behaviour through curiosity, memory and reward.",tags:["RL","CURIOSITY","SIMULATION"],signal:"green" as const,links:{github:"https://github.com/MedhaviMonish/Darwins-Silicate-Organism"}},
  {title:"TwinSqueeze",tagline:"MODEL COMPRESSION",description:"Compresses 384-dimensional embeddings to 32 dimensions with contrastive learning and NEFTune.",tags:["SIAMESE","NEFTUNE","EMBEDDINGS"],signal:"violet" as const,links:{github:"https://github.com/MedhaviMonish/TwinSqueeze",blog:"/blogs/twin-squeeze"}},
  {title:"GreedyContext",tagline:"SEMANTIC MEMORY",description:"Builds semantic trails through conversation history to reduce LLM context without summarization.",tags:["LLM","GRAPHS","MEMORY"],signal:"cyan" as const,links:{github:"https://github.com/MedhaviMonish/GreedyContext",blog:"/blogs/greedy-context"}},
  {title:"Stream-JSON",tagline:"STRUCTURED STREAMING",description:"Streams YAML from an LLM and incrementally merges valid chunks into a reactive JSON structure.",tags:["LLM","YAML","STREAMING"],signal:"ember" as const,links:{github:"https://github.com/MedhaviMonish/Stream-JSON",blog:"/blogs/streaming-json"}},
  {title:"Self-Driving Car v2",tagline:"REINFORCEMENT LEARNING",description:"Trains a simulated vehicle to navigate custom Unity tracks using PPO and GPS observations.",tags:["PPO","UNITY","SIMULATION"],signal:"green" as const,links:{github:"https://github.com/MedhaviMonish/Self-Driving-Car-Version-2"}},
  {title:"Genetic Algorithm",tagline:"EVOLUTIONARY COMPUTE",description:"Java and Python implementations showing how populations evolve solutions through selection and mutation.",tags:["GENETIC","JAVA","PYTHON"],signal:"violet" as const,links:{github:"https://github.com/MedhaviMonish/GeneticAlgorithm"}},
  {title:"Face Swapping",tagline:"COMPUTER VISION",description:"A real-time deepfake pipeline built with OpenCV and GPU programming without relying on an ML framework.",tags:["OPENCV","OPENCL","GPU"],signal:"cyan" as const,links:{github:"https://github.com/MedhaviMonish/FaceSwapping"}},
  {title:"Attendance System",tagline:"FACE RECOGNITION",description:"A real-time OpenCV system that identifies faces and records attendance automatically.",tags:["OPENCV","VISION","REAL-TIME"],signal:"ember" as const,links:{github:"https://github.com/MedhaviMonish/AttendanceSystem"}},
];

export default function ProjectList(){return <div className="project-grid">{projects.map((project,index)=><ProjectCard key={project.title} index={index+1} {...project}/>)}</div>}
