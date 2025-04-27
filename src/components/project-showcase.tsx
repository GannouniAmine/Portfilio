import { ProjectCard } from "./project-card";

// Dummy data for projects - replace with actual project details and GitHub links
const projects = [
  {
    title: "Portfolio Website",
    description: "This personal portfolio, built with Next.js, Tailwind CSS, and ShadCN UI to showcase my skills, projects, and certifications.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "ShadCN UI"],
    githubUrl: "https://github.com/GannouniAmine/ensi-portfolio", // Updated GitHub repo link
    // liveUrl: "#", // Add deployment link when available
  },
  {
    title: "Basic E-commerce Backend (Conceptual)",
    description: "Developed a conceptual RESTful API for a simple e-commerce platform during coursework, focusing on data modeling and API design.",
    technologies: ["Java", "Spring Boot", "JPA/Hibernate", "REST API", "SQL"],
    githubUrl: "https://github.com/GannouniAmine/ecommerce-backend-concept", // Updated GitHub repo link
  },
  {
    title: "Data Structures & Algorithms Implementations",
    description: "A collection of classic data structures (linked lists, trees, graphs) and algorithms (sorting, searching) implemented in C++ and Python as part of university studies.",
    technologies: ["C++", "Python", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/GannouniAmine/dsa-implementations", // Updated GitHub repo link
  },
   {
    title: "Simple Shell (Unix)",
    description: "A basic command-line interpreter (shell) created for an operating systems course, handling command execution, piping, and redirection.",
    technologies: ["C", "Unix/Linux API", "Operating Systems"],
    githubUrl: "https://github.com/GannouniAmine/simple-shell", // Updated GitHub repo link
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
