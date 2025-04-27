import { ProjectCard } from "./project-card";

// Updated project data using provided GitHub links
const projects = [
  {
    title: "Portfolio Website",
    description: "This personal portfolio, built with Next.js, Tailwind CSS, and ShadCN UI to showcase my skills, projects, and certifications.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "ShadCN UI"],
    githubUrl: "https://github.com/GannouniAmine/ensi-portfolio", // Keep this one
    // liveUrl: "#", // Add deployment link when available
  },
  {
    title: "Web Project",
    description: "An e-commerce clothing store website developed using PHP, JavaScript, HTML, and CSS.", // Updated description
    technologies: ["PHP", "JavaScript", "HTML", "CSS"], // Updated technologies
    githubUrl: "https://github.com/GannouniAmine/projet-web",
  },
  {
    title: "RAG Agent for Market Research",
    description: "A collaborative project implementing a Retrieval-Augmented Generation (RAG) agent for market research analysis, leveraging large language models.",
    technologies: ["Python", "Langchain", "AI/LLM", "Vector Databases", "Streamlit"], // Added common RAG tools
    githubUrl: "https://github.com/AhmedTrb/RAG-Agent-for-Market-Research",
  },
   {
    title: "E-BUS", // Updated title
    description: "A command-line interface project for an E-bus system, implemented in the C programming language. Contains various personal projects and coursework.", // Description remains relevant
    technologies: ["C", "Algorithms", "Data Structures"], // Technologies remain relevant
    githubUrl: "https://github.com/GannouniAmine/Gannouni-Mohamed-amine",
  },
  // Add more projects as needed
];

export function ProjectShowcase() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-primary/5 rounded-lg">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 md:mb-12 text-primary">My Projects</h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
           <p className="text-center text-muted-foreground">No projects added yet. Check back soon!</p>
        )}

      </div>
    </section>
  );
}
