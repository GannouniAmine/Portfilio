import { ProfileSummary } from "@/components/profile-summary";
import { ProjectShowcase } from "@/components/project-showcase";
import { ContactInfo } from "@/components/contact-info";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 shadow-md">
        <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
           <h1 className="text-xl font-semibold">ENSI Portfolio</h1>
           {/* Basic navigation, can be expanded later */}
           {/* <div className="space-x-4">
             <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
             <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
           </div> */}
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 md:px-6 py-8 md:py-12">
        <section id="profile" className="mb-12 md:mb-16">
           <ProfileSummary />
        </section>

        <section id="projects">
          <ProjectShowcase />
        </section>

         <section id="contact" className="mt-12 md:mt-16 mb-8">
           <ContactInfo />
        </section>
      </main>

      <footer className="bg-secondary py-6 text-center text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} Your Name Here. All rights reserved.</p>
           <p className="text-xs mt-1">Built with Next.js & ShadCN UI</p>
        </div>
      </footer>
    </div>
  );
}
