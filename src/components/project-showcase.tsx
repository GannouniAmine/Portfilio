import { ProjectCard } from "./project-card";

// Dummy data for projects - replace with actual data source if available
const projects = [
  {
    title: "Portfolio Website",
    description: "This very portfolio website, built using Next.js and Tailwind CSS to showcase my skills and projects.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "ShadCN UI"],
    githubUrl: "https://github.com/yourusername/portfolio-repo", // Replace with actual URL
    liveUrl: "#", // Replace with actual URL if deployed
  },
  {
    title: "Algorithm Visualizer",
    description: "A web application developed during coursework to visualize common sorting and pathfinding algorithms.",
    technologies: ["JavaScript", "HTML", "CSS", "React"],
    githubUrl: "https://github.com/yourusername/algo-visualizer", // Replace with actual URL
  },
  {
    title: "ENSI Library Manager (Conceptual)",
    description: "Conceptual design and basic prototype for a library management system for ENSI students.",
    technologies: ["Java", "Swing (GUI)", "SQL (Conceptual)"],
    githubUrl: "https://github.com/yourusername/ensi-library-concept", // Replace with actual URL
  },
  // Add more projects as needed
];

export function ProjectShowcase() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 md:mb-12 text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
