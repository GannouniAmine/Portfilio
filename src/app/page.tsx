import { ProfileSummary } from "@/components/profile-summary";
import { ProjectShowcase } from "@/components/project-showcase";
import { ContactInfo } from "@/components/contact-info";
import { Certifications } from "@/components/certifications"; // Import the new Certifications component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
           <h1 className="text-xl font-semibold">Mohamed Amine Gannouni</h1>
           <div className="space-x-4">
             <a href="#profile" className="hover:text-accent transition-colors text-sm sm:text-base">Profile</a>
             <a href="#certifications" className="hover:text-accent transition-colors text-sm sm:text-base">Certifications</a>
             <a href="#projects" className="hover:text-accent transition-colors text-sm sm:text-base">Projects</a>
             <a href="#contact" className="hover:text-accent transition-colors text-sm sm:text-base">Contact</a>
           </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 md:px-6 py-8 md:py-12">
        <section id="profile" className="mb-12 md:mb-16 scroll-mt-20">
           <ProfileSummary />
        </section>

        {/* Add Certifications Section */}
        <section id="certifications" className="mb-12 md:mb-16 scroll-mt-20">
          <Certifications />
        </section>

        <section id="projects" className="scroll-mt-20">
          <ProjectShowcase />
        </section>

         <section id="contact" className="mt-12 md:mt-16 mb-8 scroll-mt-20">
           <ContactInfo />
        </section>
      </main>

      <footer className="bg-secondary py-6 text-center text-muted-foreground mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} Mohamed Amine Gannouni. All rights reserved.</p>
           <p className="text-xs mt-1">Built with Next.js & ShadCN UI</p>
        </div>
      </footer>
    </div>
  );
}
