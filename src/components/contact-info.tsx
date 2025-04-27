import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactInfo() {
  // *** IMPORTANT: Replace placeholders with your actual information ***
  const email = "mohamedamine.gannouni@ensi.ucar.tn"; // Replace with your email
  const linkedInUrl = "https://www.linkedin.com/in/mohamed-amine-gannouni/"; // Replace with your LinkedIn profile URL
  const githubUrl = "https://github.com/GannouniAmine"; // Updated GitHub profile URL

  return (
    <Card className="w-full shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-primary/5 pb-4 pt-6">
        <CardTitle className="text-center text-2xl md:text-3xl font-bold text-primary">Get In Touch</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6 p-6 md:p-8">
        <p className="text-center text-muted-foreground max-w-md">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
           <Button variant="default" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 py-2 shadow-sm">
            <a href={`mailto:${email}`}>
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
          <Button variant="outline" asChild className="rounded-full px-6 py-2 shadow-sm">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild className="rounded-full px-6 py-2 shadow-sm">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
